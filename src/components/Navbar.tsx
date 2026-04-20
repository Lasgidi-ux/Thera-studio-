import React from 'react';

export default function Navbar() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full backdrop-blur-sm bg-background/10">
      <a href="#" onClick={scrollToTop} className="font-serif text-3xl tracking-tight text-foreground">
        Thera<sup className="text-sm tracking-normal">&reg;</sup>
      </a>
      
      <div className="hidden md:flex gap-8 items-center text-sm font-medium">
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-muted transition-colors hover:text-foreground">Home</a>
        <a href="#studio" onClick={(e) => scrollToSection(e, 'studio')} className="text-muted transition-colors hover:text-foreground">Studio</a>
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-muted transition-colors hover:text-foreground">About</a>
        <a href="#journal" onClick={(e) => scrollToSection(e, 'journal')} className="text-muted transition-colors hover:text-foreground">Journal</a>
        <a href="#reach-us" onClick={(e) => scrollToSection(e, 'reach-us')} className="text-muted transition-colors hover:text-foreground">Reach Us</a>
      </div>

      <button 
        onClick={() => document.getElementById('studio')?.scrollIntoView({ behavior: 'smooth' })}
        className="hidden md:block rounded-full px-6 py-2.5 text-sm bg-foreground text-background transition-all hover:scale-[1.03] active:scale-[0.97] font-medium"
      >
        Begin Journey
      </button>
    </nav>
  );
}
