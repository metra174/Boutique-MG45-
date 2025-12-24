
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { setIsCartOpen, itemCount } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="font-serif text-2xl font-bold tracking-widest text-gold">BOUTIQUE MG45</span>
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-60 ml-1">Premium Menswear</span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-wider uppercase">
          <a href="#home" className="hover:text-gold transition-colors">Início</a>
          <a href="#collections" className="hover:text-gold transition-colors">Coleções</a>
          <a href="#features" className="hover:text-gold transition-colors">Vantagens</a>
        </div>

        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-white hover:text-gold transition-colors"
          >
            <ShoppingBag size={24} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold text-dark text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-dark">
                {itemCount}
              </span>
            )}
          </button>
          
          <a 
            href="https://wa.me/244924751136?text=Olá, vi o site e gostaria de conhecer as vossas peças."
            className="hidden md:block bg-gold hover:bg-gold/90 text-dark px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
