"use client";
import { motion } from 'framer-motion';
import { CLIENT_CATEGORIES } from '@/data/content';
import * as Icons from 'lucide-react';

// ✅ All images confirmed from individual Unsplash page HTML
const CLIENT_IMAGES: Record<string, string> = {
  // "Children sitting on chairs inside classroom" — Doug Linstedt, Lagos Nigeria
  '1': '/school.jpeg',
  // "People dining at a restaurant with elegant decor" — Ben Iwara, Lagos Nigeria
  '2': 'https://images.unsplash.com/photo-1742134516273-03ec7c4eb0c7?auto=format&fit=crop&w=600&q=80',
  // "People working in a restaurant kitchen" — Precious Madubuike
  '3': 'https://images.unsplash.com/photo-1657853949079-2bf254bc97b4?auto=format&fit=crop&w=600&q=80',
  // "Belted Galloway Steaks on clean stainless tray — butcher shop" — Kyle Mackie
  '4': 'https://images.unsplash.com/photo-1606677661991-446cea8ee182?auto=format&fit=crop&w=600&q=80',
};

const WhoWeSupply = () => {
  return (
    <section id="supply" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-maroon font-bold text-sm tracking-widest uppercase">WHO WE SUPPLY</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal mt-2 mb-4 tracking-tight">
            Trusted by Businesses Across Uganda
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            We supply fresh halal beef to a wide range of commercial clients — on schedule, every time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CLIENT_CATEGORIES.map((client, index) => {
            const IconComponent = (Icons as any)[client.icon] || Icons.HelpCircle;
            const image = CLIENT_IMAGES[client.id];

            return (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden border border-gray-100 hover:border-brand-maroon/30 transition-all duration-300 hover:shadow-lg flex flex-col bg-brand-cream group"
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={image}
                    alt={client.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="p-3 bg-brand-maroon text-white rounded-xl mb-4 shadow-md shadow-brand-maroon/10 w-fit">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-charcoal mb-2">{client.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{client.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhoWeSupply;