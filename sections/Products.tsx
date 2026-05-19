"use client";
import { motion } from 'framer-motion';
import { PRODUCTS } from '@/data/content';
import { ArrowUpRight } from 'lucide-react';

const Products = () => {
  return (
    <section id="products" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-maroon font-bold text-sm tracking-widest uppercase">OUR PRODUCT SELECTION</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal mt-2 mb-4 tracking-tight">
            Premium Institutional Cuts & Bulk Beef Profiles
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Every animal category under our oversight receives strict diagnostic clearance and uniform structural portion cut alignment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100"
            >
              <div className="h-56 relative overflow-hidden bg-gray-200">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-brand-maroon text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
                  {product.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-brand-charcoal mb-2 group-hover:text-brand-maroon transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-between text-brand-maroon font-bold text-sm border-t border-gray-100 pt-4 group/btn hover:text-brand-maroonDark transition-colors"
                >
                  Request Category Quote 
                  <ArrowUpRight size={18} className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;