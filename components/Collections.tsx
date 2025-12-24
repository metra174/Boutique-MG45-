import React from 'react';
import { useCart } from '../context/CartContext.tsx';
import { PlusCircle } from 'lucide-react';

const collections = [
  {
    id: "exec-01",
    title: "Linha Executive",
    description: "Fatos e camisaria italiana para o homem de negócios que não abdica da distinção.",
    image: "https://i.imgur.com/Hrop8qC.jpg",
    price: 125000,
    tags: ["Fatos", "Alfaiataria", "Executivo"]
  },
  {
    id: "street-01",
    title: "Linha Street",
    description: "O casual de luxo com Jeans Levi's 501 originais e Polos Lacoste clássicas.",
    image: "https://i.imgur.com/53Mz5pw.jpg",
    price: 45000,
    tags: ["Levi's", "Lacoste", "Premium Casual"]
  },
  {
    id: "shoes-01",
    title: "Calçados & Acessórios",
    description: "Mocassins e sapatos sociais em couro legítimo para elevar qualquer visual.",
    image: "https://i.imgur.com/8Pk8DOe.jpg",
    price: 85000,
    tags: ["Mocassins", "Couro", "Luxury Shoes"]
  }
];

const Collections: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <section id="collections" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Vitrine de Coleções</h2>
            <p className="text-white/60 text-lg">Curadoria exclusiva das melhores marcas internacionais para o homem angolano moderno.</p>
          </div>
          <div className="flex items-center space-x-2 text-gold font-bold uppercase tracking-widest text-xs">
            <span>Scroll para explorar</span>
            <div className="w-12 h-px bg-gold"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {collections.map((item) => (
            <div key={item.id} className="group relative overflow-hidden bg-darkGray rounded-lg border border-white/5 flex flex-col">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-dark/80 backdrop-blur-md text-gold px-3 py-1 rounded-full text-sm font-bold shadow-lg border border-gold/20">
                    {item.price.toLocaleString('pt-AO')} Kz
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between bg-darkGray">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-gold/80 border border-gold/20 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-serif text-3xl mb-3">{item.title}</h3>
                  <p className="text-sm text-white/70 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                
                <button 
                  onClick={() => addToCart({ ...item, category: item.tags[0] })}
                  className="w-full bg-transparent border border-gold/50 hover:bg-gold text-gold hover:text-dark py-4 rounded-md font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <PlusCircle size={16} />
                  <span>Adicionar ao Carrinho</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;