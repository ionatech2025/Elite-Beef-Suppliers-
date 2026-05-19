"use client";
import { motion } from 'framer-motion';
import { CLIENT_CATEGORIES } from '@/data/content';
import * as Icons from 'lucide-react';

const WhoWeSupply = () => {
  return (
    <section id="supply" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-maroon font-bold text-sm tracking-widest uppercase">TARGET COMMERCIAL CLIENTS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal mt-2 mb-4 tracking-tight">
            Commercial Supply Frameworks Built for Continuous Logistics
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            We adapt raw volume delivery targets to perfectly match the daily inventory constraints of multiple market segments.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CLIENT_CATEGORIES.map((client, index) => {
            // Dynamically resolve icon components from lucide-react mapping safely
            const IconComponent = (Icons as any)[client.icon] || Icons.HelpCircle;
            
            return (
              <motion.div 
                key={client.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-brand-cream border border-gray-100 hover:border-brand-maroon/30 transition-all duration-300 hover:shadow-lg flex flex-col items-start"
              >
                <div className="p-4 bg-brand-maroon text-white rounded-xl mb-6 shadow-md shadow-brand-maroon/10">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-3">{client.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{client.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhoWeSupply;