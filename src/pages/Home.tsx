export default function Home() {
  return (
    <main 
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-40 min-h-screen"
    >
      <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl max-w-5xl font-normal text-foreground opacity-0 animate-fade-rise" style={{ lineHeight: 0.88, letterSpacing: '-0.04em' }}>
        Beyond <span className="italic text-muted">silence,</span> we build <span className="italic text-muted">the eternal.</span>
      </h1>
      
      <p className="text-base sm:text-lg max-w-2xl mt-8 leading-relaxed text-muted opacity-0 animate-fade-rise-delay font-sans">
        Building platforms for brilliant minds, fearless makers, and thoughtful souls. Through the noise, we craft digital havens for deep work and pure flows.
      </p>

      <button 
        onClick={() => document.getElementById('studio')?.scrollIntoView({ behavior: 'smooth' })}
        className="rounded-full px-14 py-5 text-base mt-12 bg-foreground text-background transition-all hover:scale-[1.03] active:scale-[0.97] opacity-0 animate-fade-rise-delay-2 font-medium"
      >
        Begin Journey
      </button>
    </main>
  );
}
