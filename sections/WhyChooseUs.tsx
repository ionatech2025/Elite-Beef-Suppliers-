"use client";
import { motion } from 'framer-motion';
import { VALUES } from '@/data/content';
import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  const checkmarks = [
    "Traceable livestock tracking frameworks",
    "Completely sanitized cold transportation",
    "Transparent dynamic scaling price brackets",
    "Custom butcher portions match specific recipes",
    "Flexible structural supply order intervals",
    "Verified state chemical control clearance"
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-brand-charcoal text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-brand-green font-bold text-sm tracking-widest uppercase">OUR COMPETITIVE ADVANTAGE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-6 tracking-tight leading-tight">
              Why Elite Beef Rules the Wholesale Trade Channel
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              We merge automated health monitoring variables into our supply chains to eliminate cross-contamination. This ensures your commercial inventory metrics remain structurally safe and efficient.
            </p>

            <div className="space-y-6">
              {VALUES.map((val) => (
                <div key={val.id} className="border-l-2 border-brand-green pl-4">
                  <h4 className="font-bold text-white mb-1 text-base">{val.title}</h4>
                  <p className="text-gray-400 text-xs">{val.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 relative"
          >
            <h3 className="text-2xl font-bold mb-8">Structural Quality Control Guarantees</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {checkmarks.map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="p-1 bg-brand-green/20 rounded-full mt-1">
                    <Check className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="text-gray-300 text-sm leading-snug">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-brand-maroon to-brand-maroonDark flex items-center justify-between flex-col sm:flex-row gap-6">
              <div>
                <h4 className="font-bold text-lg">Need custom portions?</h4>
                <p className="text-xs text-gray-200">Speak with our food operations team right now.</p>
              </div>
              <a href="https://wa.me/256700000000" className="bg-white text-brand-maroon hover:bg-gray-100 transition-colors font-bold px-6 py-3 rounded-xl text-sm whitespace-nowrap">
                Initialize Spec Setup
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;