import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft, Share2, Twitter, Link, Check } from 'lucide-react';

interface JournalEntry {
  date: string;
  title: string;
  snippet: string;
  content: string[];
}

export default function Journal() {
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedEntry) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedEntry]);

  const entries: JournalEntry[] = [
    {
      date: "Spring, '26",
      title: "The Architecture of Silence",
      snippet: "In a world designed for distraction, how do we build for focus? We explore the intersection of negative space and neural flows.",
      content: [
        "In the hyper-accelerated slipstream of the modern web, pixels are often deployed as weapons of attention. Every notification, every high-contrast gradient, and every auto-playing disruption is a calculation designed to hijack the human central nervous system. At Thera, we believe in a different architecture—the architecture of silence.",
        "Silence is not merely the absence of noise; it is a meticulously crafted space that allows thought to expand. In digital design, this translates to the intentional use of negative space, the reduction of cognitive load, and the prioritization of focus over engagement metrics.",
        "When we strip away the decorative and the distracting, we are left with the essential. This 'Essentialism' creates a neural flow—a state where the tool disappears and the user's intent becomes primary. A digital sanctuary is one where the interface serves the soul, not the other way around.",
        "We build for the deep workers. The creators who need hours of uninterrupted concentration to bring world-changing ideas to life. Our platforms are quiet by design, ensuring that when you are within our environments, the only voice you hear is your own."
      ]
    },
    {
      date: "Winter, '25",
      title: "Tactile Digitalism",
      snippet: "Why software should feel heavy. Notes on friction, physical world metaphors, and the importance of digital resistance.",
      content: [
        "Digital objects often lack the weight of reality. They pop in and out of existence with a weightlessness that feels disconnected from our physical lived experience. Tactile Digitalism is our response to this void—an exploration into how we can imbue software with mass and permanence.",
        "Everything in nature has a physical presence. When you touch an object, it offers resistance; it has inertia. We bring these metaphors into the browser through spring physics, dampened ease-ins, and spatial layouts that respect the laws of gravity.",
        "When a button resists slightly before clicking, or when a panel slides away with a sense of momentum, the user's brain registers it as 'real.' This realism builds a subconscious trust. The user knows this platform is stable—that it won't vanish at the first sign of a network hiccup or a browser refresh.",
        "True quality is felt before it is seen. By treating pixels as physical matter, we create interfaces that don't just look cinematic—they feel eternal. We are moving beyond flat design into a world of depth, texture, and substance."
      ]
    },
    {
      date: "Autumn, '25",
      title: "Beyond the Screen",
      snippet: "Thinking about hardware. How the enclosures we build for our code affect the souls who interact with them.",
      content: [
        "The screen is a window, but too often, it feels like a wall. As designers and engineers, we must remember that our work does not end at the glass. It extends into the room, into the posture of the user, and into the very atmosphere of their environment.",
        "Beyond the Screen is a philosophy that views software as a participant in the physical world. A well-designed platform shouldn't demand that you hunched over a laptop; it should encourage an open, thoughtful stance. It should respect the lighting of the room and the time of the day.",
        "We consider the broader context of production. A maker using a Thera-built system is likely in a room filled with tools—real tools. Our goal is to ensure our digital instruments feel at home next to a heavy fountain pen, a mechanical keyboard, or a craftsman's workbench.",
        "We are building for the whole human. By acknowledging that the screen is just one part of a larger, tactile ecosystem, we can create digital havens that feel inclusive of the messy, beautiful reality of real life."
      ]
    }
  ];

  const handleShare = async (platform: 'twitter' | 'copy' | 'generic') => {
    if (!selectedEntry) return;

    const url = window.location.href;
    const text = `Read "${selectedEntry.title}" on Thera Journal.`;

    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'copy') {
      await navigator.clipboard.writeText(`${text} ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else if (platform === 'generic' && navigator.share) {
      try {
        await navigator.share({
          title: selectedEntry.title,
          text: text,
          url: url,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    }
  };

  const relatedEntries = selectedEntry 
    ? entries.filter(e => e.title !== selectedEntry.title)
    : [];

  return (
    <main 
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-40 min-h-screen"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal text-foreground opacity-0 animate-fade-rise" style={{ lineHeight: 0.95, letterSpacing: '-2.46px' }}>
          The <span className="italic text-muted">Journal</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left opacity-0 animate-fade-rise-delay">
          {entries.map((entry, index) => (
            <article 
              key={index} 
              onClick={() => setSelectedEntry(entry)}
              className="group cursor-pointer space-y-4 px-6 py-8 rounded-2xl transition-all duration-500 ease-[0.16,1,0.3,1] hover:scale-[1.02] hover:bg-foreground/[0.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-transparent hover:border-foreground/5"
            >
              <p className="text-[10px] uppercase tracking-widest text-muted group-hover:text-foreground transition-colors duration-500">{entry.date}</p>
              <h3 className="text-xl font-serif text-foreground group-hover:italic group-hover:translate-x-1 transition-all duration-500 ease-[0.16,1,0.3,1]">{entry.title}</h3>
              <p className="text-sm leading-relaxed text-muted line-clamp-3 group-hover:text-foreground/80 transition-colors duration-500">
                {entry.snippet}
              </p>
              <div className="pt-2">
                <span className="text-[10px] uppercase tracking-widest text-foreground border-b border-foreground/0 group-hover:border-foreground/100 group-hover:tracking-[0.15em] transition-all duration-500 font-medium">Read Entry</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Article Overlay */}
      <AnimatePresence>
        {selectedEntry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] overflow-y-auto px-6 py-24 flex flex-col items-center"
          >
            {/* Global Background Video Effect - Shared visual language with App.tsx */}
            <div className="fixed inset-0 -z-10 bg-background/20 backdrop-blur-[100px]" />
            <div className="fixed inset-0 -z-20 bg-gradient-to-b from-background via-background/20 to-background opacity-90" />
            
            {/* Inner content shadow for depth */}
            <div className="fixed inset-0 -z-30 bg-foreground/5 mix-blend-overlay" />

            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setSelectedEntry(null)}
              className="fixed top-8 right-8 p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors group z-20"
            >
              <X className="w-6 h-6 text-foreground group-active:scale-95" />
            </motion.button>

            <motion.button 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedEntry(null)}
              className="group flex items-center gap-2 text-xs uppercase tracking-widest text-muted mb-12 hover:text-foreground transition-colors self-start max-w-4xl mx-auto w-full"
            >
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              Back to Journal
            </motion.button>

            <article className="max-w-3xl w-full text-left space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 border-b border-foreground/10 pb-12"
              >
                <div className="space-y-6">
                  <p className="text-xs uppercase tracking-widest text-muted">{selectedEntry.date}</p>
                  <h2 className="font-serif text-4xl sm:text-6xl text-foreground leading-tight">
                    {selectedEntry.title}
                  </h2>
                </div>

                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => handleShare('twitter')}
                    className="p-2.5 rounded-full border border-foreground/10 text-muted hover:text-foreground hover:border-foreground/30 transition-all active:scale-90"
                    title="Share on Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleShare('copy')}
                    className="p-2.5 rounded-full border border-foreground/10 text-muted hover:text-foreground hover:border-foreground/30 transition-all active:scale-90 relative"
                    title="Copy Link"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Link className="w-4 h-4" />}
                    {copied && (
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest bg-foreground text-background px-2 py-1 rounded">Copied</span>
                    )}
                  </button>
                  {navigator.share && (
                    <button 
                      onClick={() => handleShare('generic')}
                      className="p-2.5 rounded-full border border-foreground/10 text-muted hover:text-foreground hover:border-foreground/30 transition-all active:scale-90"
                      title="Share Article"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </motion.div>

              <div className="space-y-8 text-lg leading-relaxed text-muted font-sans">
                {selectedEntry.content.map((p, i) => (
                  <motion.p 
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-15% 0px" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="pt-24 space-y-12"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-foreground">Further Reading</h4>
                  <div className="flex-1 border-b border-foreground/10 ml-8"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {relatedEntries.map((entry, index) => (
                    <article 
                      key={index} 
                      onClick={() => {
                        setSelectedEntry(entry);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group cursor-pointer space-y-4"
                    >
                      <p className="text-[10px] uppercase tracking-widest text-muted">{entry.date}</p>
                      <h3 className="text-xl font-serif text-foreground group-hover:italic transition-all duration-300">{entry.title}</h3>
                      <p className="text-sm leading-relaxed text-muted line-clamp-2">
                        {entry.snippet}
                      </p>
                      <div className="pt-2">
                        <span className="text-[10px] uppercase tracking-widest text-foreground border-b border-foreground/0 group-hover:border-foreground/100 transition-all font-medium">Read Entry</span>
                      </div>
                    </article>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="pt-12 pb-24 border-t border-foreground/10"
              >
                <p className="text-xs text-muted italic">Written by the Thera Collective</p>
              </motion.div>
            </article>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
