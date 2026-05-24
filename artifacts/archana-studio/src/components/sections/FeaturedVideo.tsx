import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";

const YOUTUBE_VIDEO_ID = "9Og5tHF9SHE";

function getYouTubeId(url: string): string {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : url;
}

const videoId = getYouTubeId(YOUTUBE_VIDEO_ID);
const isPlaceholder = videoId === "PLACEHOLDER";

export default function FeaturedVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Featured Film</h2>
            <h3 className="text-3xl md:text-5xl font-serif mb-4 text-foreground">
              Experience the <span className="italic font-light text-primary">Cinematic</span> Difference
            </h3>
            <p className="text-muted-foreground font-light max-w-2xl mx-auto">
              Prateek & Kanika — Ring Ceremony 2020. A film crafted to immortalise every emotion, every glance, every precious moment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(212,175,55,0.1)] group"
          >
            {isPlaceholder ? (
              /* Beautiful placeholder until YouTube URL is provided */
              <div className="w-full h-full bg-[#0a0a0a] flex flex-col items-center justify-center gap-6">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-primary/15 animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="w-24 h-24 rounded-full bg-black/60 border border-primary/40 flex items-center justify-center">
                    <Youtube size={36} className="text-primary" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-foreground/60 text-sm font-light">YouTube video coming soon</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-16 bg-primary/20" />
                  <div className="w-1 h-1 rotate-45 bg-primary/40" />
                  <div className="h-[1px] w-16 bg-primary/20" />
                </div>
              </div>
            ) : !playing ? (
              /* YouTube thumbnail with custom play button */
              <div
                className="w-full h-full cursor-pointer"
                onClick={() => setPlaying(true)}
              >
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="Featured film thumbnail"
                  className="w-full h-full object-cover brightness-50 group-hover:brightness-60 transition-all duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.7)_100%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-full bg-primary/15 animate-ping" style={{ animationDuration: '3s' }} />
                    <div className="absolute -inset-2 rounded-full bg-primary/10 animate-ping" style={{ animationDuration: '2s' }} />
                    <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-primary/50 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 z-10 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                      <Play size={36} className="ml-2 fill-primary" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
                  <div>
                    <p className="text-primary text-xs uppercase tracking-[0.2em] mb-1">Ring Ceremony Highlight</p>
                    <h4 className="text-white text-xl md:text-2xl font-serif">Prateek & Kanika</h4>
                    <p className="text-white/50 text-sm font-light">2020</p>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-wider">
                    <div className="w-8 h-[1px] bg-primary/50" />
                    Archana Digital Studio
                  </div>
                </div>
              </div>
            ) : (
              /* Actual YouTube iframe — only loads when play is clicked */
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&color=white`}
                title="Prateek & Kanika Ring Ceremony 2020"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-8 mt-8 text-center"
          >
            <div>
              <p className="text-primary text-xs uppercase tracking-widest mb-1">Couple</p>
              <p className="text-foreground/80 text-sm font-light">Prateek & Kanika</p>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div>
              <p className="text-primary text-xs uppercase tracking-widest mb-1">Event</p>
              <p className="text-foreground/80 text-sm font-light">Ring Ceremony</p>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div>
              <p className="text-primary text-xs uppercase tracking-widest mb-1">Year</p>
              <p className="text-foreground/80 text-sm font-light">2020</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
