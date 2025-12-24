
import React from 'react';
import { Truck, Zap, Star } from 'lucide-react';

const Features: React.FC = () => {
  const items = [
    {
      icon: <Truck className="text-gold" size={40} />,
      title: "Entrega Gratuita",
      desc: "Entrega sem custos em qualquer ponto de Luanda para todas as encomendas."
    },
    {
      icon: <Zap className="text-gold" size={40} />,
      title: "Pronta Entrega",
      desc: "Stock real disponível em Angola. Receba as suas peças no mesmo dia."
    },
    {
      icon: <Star className="text-gold" size={40} />,
      title: "Qualidade Premium",
      desc: "Peças originais de marcas internacionais selecionadas a dedo."
    }
  ];

  return (
    <section id="features" className="py-24 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="mb-6 p-6 rounded-full bg-gold/5 border border-gold/10">
                {item.icon}
              </div>
              <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
              <p className="text-white/50 font-light leading-relaxed max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
