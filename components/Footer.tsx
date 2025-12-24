
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="font-serif text-3xl font-bold tracking-widest text-gold mb-6">BOUTIQUE MG45</div>
            <p className="text-white/50 max-w-sm leading-relaxed mb-8">
              A Boutique MG45 redefine a moda masculina em Luanda, trazendo o melhor do estilo executivo e casual de luxo com conveniência e exclusividade.
            </p>
          </div>
          
          <div>
            <h4 className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-8">Contactos</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="tel:+244924751136" className="hover:text-gold">+244 924 751 136</a></li>
              <li><a href="https://instagram.com/boutique_mg45" target="_blank" className="hover:text-gold">@boutique_mg45</a></li>
              <li>Luanda, Angola</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-8">Navegação</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#home" className="hover:text-gold">Início</a></li>
              <li><a href="#collections" className="hover:text-gold">Coleções</a></li>
              <li><a href="#features" className="hover:text-gold">Vantagens</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/30 font-bold gap-4">
          <p>© 2024 Boutique MG45. Todos os direitos reservados.</p>
          <p>
            Designed by <a href="https://tulu-studio.vercel.app/" target="_blank" className="text-white/60 hover:text-gold transition-colors">TULU Studio</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
