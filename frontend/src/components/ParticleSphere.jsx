import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Three.js particle sphere that smoothly explodes outward then reassembles
 * into a perfect sphere, in a continuous loop. Purple + cyan glow.
 */
export default function ParticleSphere() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene & camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 4.2;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Generate particles on a sphere
    const PARTICLE_COUNT = 2200;
    const radius = 1.55;

    const basePositions = new Float32Array(PARTICLE_COUNT * 3);
    const targetPositions = new Float32Array(PARTICLE_COUNT * 3);
    const explodeDir = new Float32Array(PARTICLE_COUNT * 3);
    const colorsArr = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);

    const cyan = new THREE.Color("#00D1FF");
    const purpleLight = new THREE.Color("#7dd3fc");
    const purpleDeep = new THREE.Color("#00377e");

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Fibonacci sphere distribution for even coverage
      const k = i + 0.5;
      const phi = Math.acos(1 - (2 * k) / PARTICLE_COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * k;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      targetPositions[i * 3] = x;
      targetPositions[i * 3 + 1] = y;
      targetPositions[i * 3 + 2] = z;

      // Start with current = target
      basePositions[i * 3] = x;
      basePositions[i * 3 + 1] = y;
      basePositions[i * 3 + 2] = z;

      // Explosion direction = normalized outward + small random
      const len = Math.sqrt(x * x + y * y + z * z) || 1;
      const jitterX = (Math.random() - 0.5) * 0.4;
      const jitterY = (Math.random() - 0.5) * 0.4;
      const jitterZ = (Math.random() - 0.5) * 0.4;
      explodeDir[i * 3] = x / len + jitterX;
      explodeDir[i * 3 + 1] = y / len + jitterY;
      explodeDir[i * 3 + 2] = z / len + jitterZ;

      // Color: mix between cyan and purple based on position
      const mix = (y + radius) / (radius * 2); // 0 to 1
      const c = new THREE.Color();
      if (mix < 0.5) {
        c.lerpColors(cyan, purpleLight, mix * 2);
      } else {
        c.lerpColors(purpleLight, purpleDeep, (mix - 0.5) * 2);
      }
      colorsArr[i * 3] = c.r;
      colorsArr[i * 3 + 1] = c.g;
      colorsArr[i * 3 + 2] = c.b;

      sizes[i] = Math.random() * 0.6 + 0.4;
    }

    const geometry = new THREE.BufferGeometry();
    const livePositions = basePositions.slice();
    geometry.setAttribute("position", new THREE.BufferAttribute(livePositions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colorsArr, 3));

    // Circular soft sprite texture
    const sprite = (() => {
      const c = document.createElement("canvas");
      c.width = c.height = 64;
      const ctx = c.getContext("2d");
      const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      g.addColorStop(0, "rgba(255,255,255,1)");
      g.addColorStop(0.35, "rgba(255,255,255,0.6)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 64, 64);
      const tex = new THREE.CanvasTexture(c);
      tex.needsUpdate = true;
      return tex;
    })();

    const material = new THREE.PointsMaterial({
      size: 0.07,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      map: sprite,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Subtle inner glow sphere
    const glowGeo = new THREE.SphereGeometry(0.6, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x002d67,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });
    const glowSphere = new THREE.Mesh(glowGeo, glowMat);
    scene.add(glowSphere);

    // Animation loop with explode/reassemble cycle
    const clock = new THREE.Clock();
    let raf = 0;

    const animate = () => {
      const t = clock.getElapsedTime();

      // Cycle: 0..1..0 using sine; period ~7s
      const period = 7;
      // Smoothstep-y wave: 0 to 1.4 max
      const raw = (Math.sin((t / period) * Math.PI * 2) + 1) * 0.5; // 0..1
      // Easing for smoother explode
      const eased = raw * raw * (3 - 2 * raw);
      const explodeAmount = eased * 1.6;

      const pos = geometry.attributes.position.array;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const ix = i * 3;
        // small per-particle wobble
        const wobble = Math.sin(t * 1.5 + i * 0.05) * 0.02;
        pos[ix] = targetPositions[ix] + explodeDir[ix] * explodeAmount + wobble * explodeDir[ix];
        pos[ix + 1] = targetPositions[ix + 1] + explodeDir[ix + 1] * explodeAmount + wobble * explodeDir[ix + 1];
        pos[ix + 2] = targetPositions[ix + 2] + explodeDir[ix + 2] * explodeAmount + wobble * explodeDir[ix + 2];
      }
      geometry.attributes.position.needsUpdate = true;

      // Slow rotation
      points.rotation.y = t * 0.12;
      points.rotation.x = Math.sin(t * 0.18) * 0.15;
      glowSphere.rotation.y = -t * 0.15;

      // Opacity flickers slightly with explosion
      material.opacity = 0.85 - eased * 0.25;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    // Resize
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      sprite.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      renderer.dispose();
      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      data-testid="hero-particle-sphere"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
