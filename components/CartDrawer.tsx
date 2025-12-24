
import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    const itemsList = cart.map(item => `- ${item.title} (x${item.quantity}) - ${item.price.toLocaleString('pt-AO')} Kz`).join('%0A');
    const totalStr = cartTotal.toLocaleString('pt-AO');
    const message = `Olá Boutique MG45! Gostaria de finalizar a encomenda dos seguintes itens:%0A%0A${itemsList}%0A%0ATotal: ${totalStr} Kz%0A%0AEntrega em Luanda.`;
    window.open(`https://wa.me/244924751136?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-darkGray shadow-2xl flex flex-col border-l border-white/10 animate-slide-in">
          <div className="px-6 py-6 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="text-gold" size={24} />
              <h2 className="font-serif text-2xl font-bold text-white">O Seu Carrinho</h2>
            </div>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              <X size={24} className="text-white/60" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                <ShoppingBag size={64} className="mb-4" />
                <p className="font-serif text-xl italic">O seu carrinho está vazio.</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 text-gold font-bold text-xs uppercase tracking-widest underline"
                >
                  Continuar a Comprar
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex space-x-4 group">
                    <div className="w-24 h-32 flex-shrink-0 overflow-hidden rounded-md bg-dark">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-serif text-lg text-white group-hover:text-gold transition-colors">{item.title}</h3>
                          <button onClick={() => removeFromCart(item.id)} className="text-white/30 hover:text-red-500">
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-gold text-sm font-bold mt-1">
                          {item.price.toLocaleString('pt-AO')} Kz
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-white/10 rounded-md overflow-hidden">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-white/5 transition-colors text-white/60"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-4 text-sm font-bold text-white">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-white/5 transition-colors text-white/60"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="text-xs text-white/40 uppercase tracking-widest font-bold">
                          Subtotal: {(item.price * item.quantity).toLocaleString('pt-AO')} Kz
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="px-6 py-8 bg-dark/50 border-t border-white/10 space-y-4">
              <div className="flex justify-between text-sm text-white/60">
                <span>Subtotal</span>
                <span>{cartTotal.toLocaleString('pt-AO')} Kz</span>
              </div>
              <div className="flex justify-between text-sm text-white/60">
                <span>Entrega</span>
                <span className="text-green-400 font-bold uppercase text-[10px] tracking-widest">Grátis (Luanda)</span>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                <span className="font-serif text-xl">Total Estimado</span>
                <span className="text-2xl font-bold text-gold">{cartTotal.toLocaleString('pt-AO')} Kz</span>
              </div>
              
              <button 
                onClick={handleCheckout}
                className="w-full bg-gold hover:bg-white text-dark py-5 rounded-md font-bold text-sm uppercase tracking-[0.2em] transition-all flex items-center justify-center space-x-3 shadow-xl"
              >
                <span>Finalizar no WhatsApp</span>
                <ShoppingBag size={18} />
              </button>
              <p className="text-[10px] text-center text-white/30 uppercase tracking-tighter">
                *O pagamento é efetuado após a confirmação no WhatsApp
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #D4AF37;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default CartDrawer;
