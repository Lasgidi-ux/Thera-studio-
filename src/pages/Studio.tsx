export default function Studio() {
  return (
    <main 
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-40 min-h-screen"
    >
      <div className="max-w-4xl mx-auto space-y-24">
        <section className="space-y-8">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal text-foreground opacity-0 animate-fade-rise" style={{ lineHeight: 0.95, letterSpacing: '-2.46px' }}>
            The <span className="italic text-muted">Studio</span>
          </h1>
          
          <p className="text-lg sm:text-2xl max-w-2xl mx-auto leading-relaxed text-muted opacity-0 animate-fade-rise-delay font-sans">
            A sanctuary for meticulous craft. We don't just build interfaces; we architect digital legacies that whisper through the noise.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left opacity-0 animate-fade-rise-delay-2">
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-foreground border-b border-foreground/10 pb-2">Philosophy</h3>
            <p className="text-sm leading-relaxed text-muted">
              Reduction is the ultimate sophistication. We strip away the unnecessary until only the essential truth remains.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-foreground border-b border-foreground/10 pb-2">Mediums</h3>
            <p className="text-sm leading-relaxed text-muted">
              From immersive web environments to complex backend systems, our medium is anything that requires profound intent.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-foreground border-b border-foreground/10 pb-2">Outcome</h3>
            <p className="text-sm leading-relaxed text-muted">
              We deliver purely functional art. Scalable, secure, and instinctively human-centric platforms built for the long term.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
