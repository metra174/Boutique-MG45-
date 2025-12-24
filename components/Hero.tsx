
import React from 'react';
import { MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/HUroALB.jpg" 
          alt="Premium Men Style" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/30 rounded-full mb-6">
            <span className="text-gold text-xs font-bold uppercase tracking-widest">Luanda • Exclusividade</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            Elegância <span className="italic text-gold">Impecável</span> e Estilo Exclusivo.
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed font-light">
            De fatos de alta alfaiataria a looks casuais das melhores marcas mundiais. 
            Aproveite a <span className="text-white font-bold underline decoration-gold">Entrega Grátis</span> em toda a capital de Luanda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/244924751136?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20peças%20da%20Boutique%20MG45."
              className="flex items-center justify-center space-x-3 bg-gold hover:bg-gold/90 text-dark px-10 py-5 rounded-md font-bold text-sm uppercase tracking-[0.2em] transition-all transform hover:-translate-y-1 shadow-lg shadow-gold/20"
            >
              <MessageCircle size={20} />
              <span>Encomendar via WhatsApp</span>
            </a>
            <a 
              href="#collections"
              className="flex items-center justify-center border border-white/20 hover:bg-white/10 text-white px-10 py-5 rounded-md font-bold text-sm uppercase tracking-[0.2em] transition-all"
            >
              Ver Coleções
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-px h-12 bg-white"></div>
      </div>
    </section>
  );
};

export default Hero;
