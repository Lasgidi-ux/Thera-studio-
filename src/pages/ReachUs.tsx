import React, { useState } from 'react';

export default function ReachUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to an API
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main 
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-40 min-h-screen"
    >
      <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl max-w-7xl font-normal text-foreground opacity-0 animate-fade-rise" style={{ lineHeight: 0.95, letterSpacing: '-2.46px' }}>
        Reach <span className="italic text-muted">Us</span>
      </h1>
      
      <p className="text-base sm:text-lg max-w-2xl mt-8 leading-relaxed text-muted opacity-0 animate-fade-rise-delay font-sans">
        Collaborate with us. We seek makers, thinkers, and fearless souls who understand that building for the eternal requires a conversation beyond the noise.
      </p>

      {isSubmitted ? (
        <div className="mt-12 p-8 rounded-2xl bg-foreground/5 backdrop-blur-sm border border-foreground/10 opacity-0 animate-fade-rise-delay-2">
          <p className="text-xl font-serif italic text-foreground">Thank you. Your message has been received.</p>
          <p className="text-muted mt-2">We'll reach back within the silence.</p>
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit}
          className="mt-12 w-full max-w-xl text-left space-y-6 opacity-0 animate-fade-rise-delay-2"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted font-medium ml-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-transparent border-b border-muted/30 py-3 px-1 focus:border-foreground transition-colors outline-none text-foreground placeholder:text-muted/30"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted font-medium ml-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-transparent border-b border-muted/30 py-3 px-1 focus:border-foreground transition-colors outline-none text-foreground placeholder:text-muted/30"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted font-medium ml-1">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="w-full bg-transparent border-b border-muted/30 py-3 px-1 focus:border-foreground transition-colors outline-none text-foreground placeholder:text-muted/30 resize-none"
            ></textarea>
          </div>

          <div className="flex justify-center pt-4">
            <button 
              type="submit"
              className="rounded-full px-14 py-5 text-base bg-foreground text-background transition-all hover:scale-[1.03] active:scale-[0.97] font-medium"
            >
              Send Message
            </button>
          </div>
        </form>
      )}
    </main>
  );
}
