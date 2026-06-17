import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Phone, Linkedin, Send, Loader2 } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";
import { PERSONAL } from "@/data/portfolio";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${API}/contact`, form);
      if (res.data?.success) {
        toast.success("Message sent! Maram will get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === "string" ? detail : "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-28 sm:py-36 overflow-hidden"
    >
      {/* Closing-section glow */}
      <div className="absolute inset-0 contact-glow pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00377e]/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading
            kicker="get_in_touch"
            title="Let's build something great."
            subtitle="I'm open to opportunities, collaborations, and exciting projects. Feel free to reach out!"
            align="center"
          />
        </motion.div>
        
        {/*
        <div className="grid lg:grid-cols-5 gap-6 mt-8">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 glass-card p-7 sm:p-9"
            data-testid="contact-form"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono-acc tracking-widest text-[#00D1FF] mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  data-testid="contact-input-name"
                  className="w-full px-4 py-3 rounded-xl bg-[#00132d]/80 border border-[#7dd3fc]/25 text-[#E5E7EB] placeholder:text-[#9CA3AF]/60 focus:border-[#00D1FF]/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono-acc tracking-widest text-[#00D1FF] mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  data-testid="contact-input-email"
                  className="w-full px-4 py-3 rounded-xl bg-[#00132d]/80 border border-[#7dd3fc]/25 text-[#E5E7EB] placeholder:text-[#9CA3AF]/60 focus:border-[#00D1FF]/60 transition-colors"
                />
              </div>
            </div>
            <div className="mt-5">
              <label className="block text-xs font-mono-acc tracking-widest text-[#00D1FF] mb-2">
                MESSAGE
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell me about your project, opportunity, or idea..."
                data-testid="contact-input-message"
                className="w-full px-4 py-3 rounded-xl bg-[#00132d]/80 border border-[#7dd3fc]/25 text-[#E5E7EB] placeholder:text-[#9CA3AF]/60 focus:border-[#00D1FF]/60 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              data-testid="contact-form-submit"
              className="mt-6 glow-button w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </motion.form> 
           */}
          

          {/* Direct contact card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 glass-card p-7 sm:p-9 flex flex-col"
            data-testid="contact-info-card"
          >
            <div className="font-mono-acc text-xs tracking-widest text-[#00D1FF] mb-4">
              // direct_lines
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#E5E7EB]">Reach me directly</h3>
            <p className="mt-2 text-sm text-[#9CA3AF]">
              Prefer email or LinkedIn? I&apos;m responsive across channels.
            </p>

            <div className="mt-6 space-y-3 flex-1">
              <a
                href={`mailto:${PERSONAL.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#00132d]/60 border border-[#7dd3fc]/15 hover:border-[#00D1FF]/50 transition-all group"
                data-testid="contact-link-email"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#001e45]/70 border border-[#00D1FF]/25 group-hover:border-[#00D1FF]/60 transition-colors">
                  <Mail size={16} style={{ color: "#00D1FF" }} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono-acc tracking-widest text-[#7dd3fc]">EMAIL</div>
                  <div className="text-sm text-[#E5E7EB] truncate group-hover:text-[#bae6fd] transition-colors">
                    {PERSONAL.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#00132d]/60 border border-[#7dd3fc]/15 hover:border-[#00D1FF]/50 transition-all group"
                data-testid="contact-link-phone"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#001e45]/70 border border-[#00D1FF]/25 group-hover:border-[#00D1FF]/60 transition-colors">
                  <Phone size={16} style={{ color: "#00D1FF" }} />
                </div>
                <div>
                  <div className="text-[10px] font-mono-acc tracking-widest text-[#7dd3fc]">PHONE</div>
                  <div className="text-sm text-[#E5E7EB] group-hover:text-[#bae6fd] transition-colors">
                    {PERSONAL.phone}
                  </div>
                </div>
              </a>

              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#00132d]/60 border border-[#7dd3fc]/15 hover:border-[#00D1FF]/50 transition-all group"
                data-testid="contact-link-linkedin"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#001e45]/70 border border-[#00D1FF]/25 group-hover:border-[#00D1FF]/60 transition-colors">
                  <Linkedin size={16} style={{ color: "#00D1FF" }} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono-acc tracking-widest text-[#7dd3fc]">LINKEDIN</div>
                  <div className="text-sm text-[#E5E7EB] truncate group-hover:text-[#bae6fd] transition-colors">
                    /in/maram-alhusami
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      
    </section>
  );
}
