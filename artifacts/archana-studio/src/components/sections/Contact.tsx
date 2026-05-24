import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json() as { success: boolean; message?: string };
      if (response.ok && data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-background relative border-t border-white/5"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary tracking-[0.2em] uppercase text-sm mb-4">
              Connect
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Begin the <span className="italic font-light">Conversation</span>
            </h3>
            <p className="text-muted-foreground font-light mb-12 max-w-md">
              Our calendar fills quickly. Please provide details about your
              event, and our creative director will be in touch to schedule a
              private consultation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/50 group-hover:text-primary transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-foreground uppercase tracking-wider text-sm mb-1">
                    Direct Line
                  </h4>
                  <p className="text-muted-foreground font-light">
                    +07947133944
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/50 group-hover:text-primary transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-foreground uppercase tracking-wider text-sm mb-1">
                    Email
                  </h4>
                  <p className="text-muted-foreground font-light">
                    thearchanastudio@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/50 group-hover:text-primary transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-foreground uppercase tracking-wider text-sm mb-1">
                    Atelier
                  </h4>
                  <p className="text-muted-foreground font-light">
                    Shop No Rz-65A, Palam Road
                    <br />
                    Palam Village, Delhi - 110045
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-12">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-black transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-black transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-black transition-all"
              >
                <Youtube size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-8 md:p-12 space-y-6 rounded-none border border-white/5"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Full Name
                  </label>
                  <Input
                    required
                    name="name"
                    className="bg-black/50 border-white/10 rounded-none h-12 focus-visible:ring-primary/50"
                    placeholder="Hemant Singh"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Phone
                  </label>
                  <Input
                    required
                    name="phone"
                    type="tel"
                    className="bg-black/50 border-white/10 rounded-none h-12 focus-visible:ring-primary/50"
                    placeholder="+91"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Email
                  </label>
                  <Input
                    required
                    name="email"
                    type="email"
                    className="bg-black/50 border-white/10 rounded-none h-12 focus-visible:ring-primary/50"
                    placeholder="hello@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Event Date
                  </label>
                  <Input
                    name="event_date"
                    type="date"
                    className="bg-black/50 border-white/10 rounded-none h-12 focus-visible:ring-primary/50 text-foreground"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-muted-foreground">
                  Event Type / Details
                </label>
                <Textarea
                  required
                  name="message"
                  className="bg-black/50 border-white/10 rounded-none min-h-[120px] focus-visible:ring-primary/50"
                  placeholder="Tell us about your vision..."
                />
              </div>

              {status === "success" && (
                <div className="border border-primary/40 bg-primary/5 px-5 py-4 text-sm text-primary tracking-wide">
                  ✦ Your inquiry has been sent. We will be in touch shortly.
                </div>
              )}
              {status === "error" && (
                <div className="border border-red-500/40 bg-red-500/5 px-5 py-4 text-sm text-red-400 tracking-wide">
                  {errorMsg}
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-none uppercase tracking-widest text-sm font-bold mt-4"
              >
                {loading ? "Sending..." : "Submit Inquiry"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
