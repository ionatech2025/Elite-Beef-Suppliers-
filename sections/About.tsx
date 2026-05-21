"use client";
import { motion } from 'framer-motion';
import { Shield, Sparkles, HeartHandshake, Award } from 'lucide-react';

const About = () => {
  const cards = [
    { icon: <Shield className="w-6 h-6 text-brand-maroon" />, title: "Medical Grade Hygiene", desc: "Rigorous daily automated cleanings and protective worker configurations ensure absolute structural contamination safety." },
    { icon: <Award className="w-6 h-6 text-brand-maroon" />, title: "Certified Halal Compliance", desc: "Monitored constantly under official religious and structural frameworks confirming pure processing practices." },
    { icon: <Sparkles className="w-6 h-6 text-brand-maroon" />, title: "Guaranteed Freshness", desc: "Direct slaughter-to-delivery logistics avoiding intermediate stale periods or processing optimization lags." },
    { icon: <HeartHandshake className="w-6 h-6 text-brand-maroon" />, title: "Unmatched Delivery Trust", desc: "Reliable institutional partnerships across Uganda providing uncompromised daily delivery scheduling commitments." }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-maroon font-bold text-sm tracking-widest uppercase">WHO WE ARE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal mt-2 mb-6 tracking-tight">
              Setting the High Standard for Commercial Beef Operations across East Africa
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Elite Beef Suppliers, we operate a refined institutional meat facility dedicated to sourcing premium regional livestock. We transform standard commercial supply chains by prioritizing transparent handling workflows, absolute cold infrastructure integrity, and client support accuracy.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether supporting fast-scaling regional restaurant networks or handling complex daily institutional meal frameworks, our professional processing facility guarantees safety parameters that protect your clients.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {cards.map((card, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-brand-cream transition-colors duration-300">
                  <div className="flex-shrink-0">{card.icon}</div>
                  <div>
                    <h4 className="font-bold text-brand-charcoal text-base mb-1">{card.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-cream">
              <img 
                src="https://images.unsplash.com/photo-1690983330536-3b0089d07cf9?auto=format&fit=crop&w=800&q=80"
                alt="Raw beef hanging in a commercial butcher facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand-maroon text-white p-6 rounded-xl hidden sm:block max-w-[240px] shadow-xl">
              <p className="text-3xl font-black mb-1">100%</p>
              <p className="text-sm font-medium text-gray-200">Tracked Temperature Regulated Infrastructure Integrity</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;