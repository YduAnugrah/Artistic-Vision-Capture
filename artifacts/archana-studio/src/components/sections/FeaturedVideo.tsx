import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

export default function FeaturedVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (!started) setStarted(true);
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const openFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen();
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Gold glow */}
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
            className="relative aspect-video rounded-xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(212,175,55,0.1)] group cursor-pointer"
            onClick={togglePlay}
          >
            {/* Actual video */}
            <video
              ref={videoRef}
              src="/api/video/featured"
              className="w-full h-full object-cover"
              preload="metadata"
              playsInline
              onEnded={() => setPlaying(false)}
            />

            {/* Dark overlay — only when not playing */}
            {!playing && (
              <div className="absolute inset-0 bg-black/50 transition-opacity duration-500" />
            )}

            {/* Gold vignette overlay */}
            {!playing && (
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.7)_100%)]" />
            )}

            {/* Centre play button — hidden while playing */}
            {!playing && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-primary/15 animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute -inset-2 rounded-full bg-primary/10 animate-ping" style={{ animationDuration: '2s' }} />
                  <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-primary/50 text-primary hover:scale-110 hover:bg-primary/20 transition-all duration-500 z-10 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                    <Play size={36} className="ml-2 fill-primary" />
                  </div>
                </div>
              </div>
            )}

            {/* Film title overlay — only before first play */}
            {!started && (
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
            )}

            {/* Controls bar — visible while playing on hover */}
            {started && (
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors"
                >
                  {playing ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
                </button>
                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors"
                  >
                    {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                  <button
                    onClick={openFullscreen}
                    className="w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors"
                  >
                    <Maximize size={16} />
                  </button>
                </div>
              </div>
            )}
          </motion.div>

          {/* Film details strip */}
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
