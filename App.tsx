
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Features from './components/Features';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="min-h-screen selection:bg-gold/30 selection:text-gold bg-dark">
        <Navbar />
        <CartDrawer />
        
        <main>
          <Hero />
          
          {/* Detail Image Showcase */}
          <section className="py-12 bg-dark">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 gap-4 h-[300px] md:h-[500px]">
                 <div className="h-full overflow-hidden rounded-lg">
                    <img 
                      src="https://i.imgur.com/Zz0tZkl.jpg" 
                      alt="Detail 1" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                 </div>
                 <div className="h-full overflow-hidden rounded-lg">
                    <img 
                      src="https://i.imgur.com/HUroALB.jpg" 
                      alt="Detail 2" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                 </div>
              </div>
            </div>
          </section>

          <Collections />
          <Features />
          <CTASection />
        </main>

        <Footer />

        {/* Floating WhatsApp for Mobile */}
        <a 
          href="https://wa.me/244924751136"
          className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-2xl md:hidden animate-pulse"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </CartProvider>
  );
};

export default App;
