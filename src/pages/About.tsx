export default function About() {
  return (
    <main 
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-40 min-h-screen"
    >
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal text-foreground opacity-0 animate-fade-rise" style={{ lineHeight: 0.95, letterSpacing: '-2.46px' }}>
          Our <span className="italic text-muted">Ethos</span>
        </h1>
        
        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted opacity-0 animate-fade-rise-delay font-sans">
          <p>
            Thera was founded on a single conviction: that the digital world deserves the same permanence and tactility as the physical one. In an era of fleeting trends and disposable software, we stand for the <span className="text-foreground italic">everlasting.</span>
          </p>
          <p>
            We are a small, focused collective of polymaths. Designers who code, engineers who dream, and thinkers who build. We collaborate with those who understand that quality is not a feature, but a baseline.
          </p>
          <p>
            Our work is silent but powerful. We build the infrastructure for the next generation of makers, ensuring their vision is supported by a foundation that is as beautiful as it is robust.
          </p>
        </div>

        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-fade-rise-delay-2">
          <div className="text-center">
            <p className="text-2xl font-serif italic text-foreground">01</p>
            <p className="text-[10px] uppercase tracking-widest text-muted mt-2">Intent</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-serif italic text-foreground">02</p>
            <p className="text-[10px] uppercase tracking-widest text-muted mt-2">Rhythm</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-serif italic text-foreground">03</p>
            <p className="text-[10px] uppercase tracking-widest text-muted mt-2">Balance</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-serif italic text-foreground">04</p>
            <p className="text-[10px] uppercase tracking-widest text-muted mt-2">Eternity</p>
          </div>
        </div>
      </div>
    </main>
  );
}
