
import React from 'react';
import { MessageCircle } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-dark relative">
      <div className="container mx-auto px-6">
        <div className="bg-darkGray border border-gold/20 rounded-3xl p-12 md:p-20 text-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gold shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>
          
          <h2 className="font-serif text-4xl md:text-6xl mb-8">Pronto para elevar o seu <br/><span className="text-gold">Padrão de Estilo?</span></h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
            Atendimento personalizado via WhatsApp. Fale diretamente com os nossos consultores e receba a sua curadoria exclusiva em Luanda.
          </p>

          <a 
            href="https://wa.me/244924751136"
            className="inline-flex items-center space-x-3 bg-gold hover:bg-white text-dark px-12 py-6 rounded-full font-bold text-sm uppercase tracking-[0.3em] transition-all transform hover:scale-105"
          >
            <MessageCircle size={24} />
            <span>Falar com Consultor</span>
          </a>

          <div className="mt-12 flex justify-center space-x-8 text-white/40 text-xs font-bold uppercase tracking-widest">
            <span>+244 924 751 136</span>
            <span>@boutique_mg45</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
