export function researchFileUrl(filename) {
  if (!filename) return null;
  return "/files/" + encodeURIComponent(filename);
}

// Research & Publications data
export const TROPHY_IMG =
  "https://customer-assets.emergentagent.com/job_ai-security-dev-2/artifacts/g7bv8x0k_UGRF%20Trophy%20Image.jpeg";

// Museum visit gallery for VR research
export const MUSEUM_GALLERY = [
  {
    src: "https://customer-assets.emergentagent.com/job_ai-security-dev-2/artifacts/4rdaxtcf_image.png",
    caption:
      "Exploring the art gallery hall at Al Taybat Museum — observing how visitors engage with cultural artifacts.",
    label: "Museum Visit",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_ai-security-dev-2/artifacts/vyuhi6ig_image.png",
    caption:
      "Inside the Saudi heritage diorama hall — studying immersive storytelling techniques in current exhibits.",
    label: "Site Exploration",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_ai-security-dev-2/artifacts/mne4px8w_image.png",
    caption:
      "Traditional Saudi attire exhibit — documenting heritage displays for VR replication.",
    label: "Heritage Documentation",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_ai-security-dev-2/artifacts/f185efeg_image.png",
    caption:
      "Large-scale 3D landscape diorama of Saudi mountain villages — a key candidate scene for VR adaptation.",
    label: "VR Scene Candidate",
  },
];

export const SMART_CITY_PAPER_URL = researchFileUrl("smart_cities_iot_paper.pdf");

export const VR_PAPER_URL = researchFileUrl("vr_museums_paper.pdf");


export const RESEARCH_JOURNEY = [
  { step: "Literature Review", desc: "Surveyed global VR-in-museum implementations and academic literature." },
  { step: "Museum Visit", desc: "On-site visit to Al Taybat Museum to study exhibits and visitor behavior." },
  { step: "Stakeholder Meetings", desc: "Discussions with museum representatives about needs and constraints." },
  { step: "Technology Analysis", desc: "Evaluated VR hardware, software, and content production options." },
  { step: "Research Findings", desc: "Synthesized findings on visitor engagement, cost, and feasibility." },
  { step: "Final Recommendations", desc: "Proposed the most suitable VR stack for Saudi Arabian museums." },
];

export const AWARDS_DETAIL = {
  ugrf: {
    id: "ugrf",
    awardTitle: "1st Place – Undergraduate Research Forum",
    modalTitle: "First Place Winner – Undergraduate Research Forum 2024",
    year: "2024",
    track: "Tech Challenges and Considerations",
    institution: "Effat University",
    date: "April 28, 2024",
    description:
      "Awarded First Place in the 5th Undergraduate Research Forum at Effat University for outstanding research contributions in cybersecurity and smart city technologies.",
    relatedResearch:
      "Analyzing Security Threats and Vulnerabilities in IoT Systems within Smart Cities",
    paperUrl: SMART_CITY_PAPER_URL,
    gallery: [
      {
        src: TROPHY_IMG,
        caption:
          "UGRF 2024 First Place Trophy — Effat University, April 28, 2024",
        label: "Trophy",
      },
    ],
  },
  germanDay: {
    id: "germanDay",
    awardTitle: "1st Place – German Day Projects Competition",
    modalTitle: "First Place Winner – German Day Projects Competition 2023",
    year: "2023",
    track: "Languages & Cultural Project",
    institution: "Effat University",
    date: "2023",
    description:
      "Awarded First Place at the German Day Projects Competition for an interactive city model used to teach German vocabulary — designed and built together with a teammate, featuring transportation, buildings, and everyday vocabulary in a hands-on diorama.",
    relatedResearch: null,
    paperUrl: null,
    gallery: [
      {
        src: "https://customer-assets.emergentagent.com/job_ai-security-dev-2/artifacts/9ek5wztt_image.png",
        caption:
          "The full interactive city model — labeled in German with key vocabulary (transport, buildings, people).",
        label: "Project Diorama",
      },
      {
        src: "https://customer-assets.emergentagent.com/job_ai-security-dev-2/artifacts/dmc4wrqf_image.png",
        caption:
          "Close-up: the 'You've got mail' branded envelope and our team name tags (Maram Alhusami · Aisha Alamoodi).",
        label: "Team Detail",
      },
    ],
  },
};
