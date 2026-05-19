"use client";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Truck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] bg-brand-charcoal overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80" 
          alt="Premium commercial fresh beef supply context" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-transparent to-brand-charcoal" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-brand-green/20 border border-brand-green text-green-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <ShieldCheck size={16} /> 100% Certified Halal Bulk Beef
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Fresh, Halal & Quality <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-maroon via-red-500 to-amber-500">
              Beef Suppliers
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Premium commercial wholesale partners across Uganda and East Africa. Delivering freshly prepared, hygienically tracked beef cuts directly to institutions, hotels, and businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact"><Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">Request Bulk Quote</Button></a>
            <a href="#products"><Button variant="outline" className="w-full sm:w-auto text-lg text-white border-white hover:bg-white hover:text-brand-charcoal px-8 py-4">View Product Cuts</Button></a>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-gray-700/50 max-w-lg">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-brand-maroon rounded-lg"><Truck className="w-5 h-5 text-white" /></div>
              <span className="text-sm font-medium text-gray-300">Unbroken Cold Chain Logistics</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-brand-green rounded-lg"><ShieldCheck className="w-5 h-5 text-white" /></div>
              <span className="text-sm font-medium text-gray-300">UNBS & Halal Standard Verified</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;