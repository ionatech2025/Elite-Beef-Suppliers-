"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, "Full name is required field"),
  business: z.string().min(2, "Company/Organization name required"),
  phone: z.string().min(9, "Provide a valid phone contact connection"),
  email: z.string().email("Invalid corporate email target structure"),
  productInterest: z.string().min(1, "Select primary product target type"),
  quantity: z.string().min(1, "Specify targeted recurring delivery mass"),
  message: z.string().min(10, "Please provide comprehensive profile scope specifications")
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    // Mimic secure server API interaction latency
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Verified Form Submission Data:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-brand-maroon font-bold text-sm tracking-widest uppercase">COMMERCIAL GATEWAY</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal mt-2 mb-6 tracking-tight">
                Connect with our Meat Procurement Officers Today
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Request standard commercial catalogs, setup structured framework operations, or organize automated site logistics coordination with our central dispatch.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white text-brand-maroon rounded-xl shadow-sm border border-gray-100"><Phone size={20} /></div>
                  <div>
                    <h4 className="font-bold text-gray-500 text-xs uppercase tracking-wider">Direct Hotline</h4>
                    <a href="tel:+256700000000" className="text-lg font-bold text-brand-charcoal hover:text-brand-maroon">+256 700 000 000</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white text-brand-maroon rounded-xl shadow-sm border border-gray-100"><Mail size={20} /></div>
                  <div>
                    <h4 className="font-bold text-gray-500 text-xs uppercase tracking-wider">Corporate Dispatch Email</h4>
                    <a href="mailto:supply@elitebeefsuppliers.com" className="text-lg font-bold text-brand-charcoal hover:text-brand-maroon">supply@elitebeef.com</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white text-brand-maroon rounded-xl shadow-sm border border-gray-100"><MapPin size={20} /></div>
                  <div>
                    <h4 className="font-bold text-gray-500 text-xs uppercase tracking-wider">Central Facility Location</h4>
                    <p className="text-base font-bold text-brand-charcoal">Kampala-Luweero Highway, Uganda</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white text-brand-maroon rounded-xl shadow-sm border border-gray-100"><Clock size={20} /></div>
                  <div>
                    <h4 className="font-bold text-gray-500 text-xs uppercase tracking-wider">Processing Hours</h4>
                    <p className="text-sm font-bold text-gray-700">Mon - Sat: 5:00 AM - 6:00 PM | Sunday Cleanings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
              {isSubmitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                  <CheckCircle2 className="w-16 h-16 text-brand-green mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-brand-charcoal mb-2">Quote Specification Received</h3>
                  <p className="text-gray-500 max-w-md mx-auto text-xs sm:text-sm mb-8">
                    Our dynamic procurement routing matrix has assigned your data to a regional manager. Expect a call confirmation within 2 hours.
                  </p>
                  <button onClick={() => setIsSubmitted(false)} className="text-brand-maroon font-bold text-sm underline hover:text-brand-maroonDark">Submit another request</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Your Name</label>
                      <input {...register('name')} type="text" className="w-full bg-brand-cream border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-brand-maroon transition-colors" />
                      {errors.name && <p className="text-brand-maroon text-xs mt-1 font-medium">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Business/Organization</label>
                      <input {...register('business')} type="text" className="w-full bg-brand-cream border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-brand-maroon transition-colors" />
                      {errors.business && <p className="text-brand-maroon text-xs mt-1 font-medium">{errors.business.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Phone Number</label>
                      <input {...register('phone')} type="tel" placeholder="+256..." className="w-full bg-brand-cream border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-brand-maroon transition-colors" />
                      {errors.phone && <p className="text-brand-maroon text-xs mt-1 font-medium">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Email Address</label>
                      <input {...register('email')} type="email" className="w-full bg-brand-cream border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-brand-maroon transition-colors" />
                      {errors.email && <p className="text-brand-maroon text-xs mt-1 font-medium">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Product Selection Type</label>
                      <select {...register('productInterest')} className="w-full bg-brand-cream border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-brand-maroon transition-colors">
                        <option value="">Select an option</option>
                        <option value="carcass">Whole / Half Carcass</option>
                        <option value="boneless">Premium Boneless Chunks</option>
                        <option value="steak">Premium Steak cuts</option>
                        <option value="custom">Custom Portions Spec</option>
                      </select>
                      {errors.productInterest && <p className="text-brand-maroon text-xs mt-1 font-medium">{errors.productInterest.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Estimated Weekly Supply Mass</label>
                      <select {...register('quantity')} className="w-full bg-brand-cream border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-brand-maroon transition-colors">
                        <option value="">Select expected volume</option>
                        <option value="100-500">100kg - 500kg</option>
                        <option value="500-1000">500kg - 1,000kg (1 Ton)</option>
                        <option value="1000+">Over 1 Ton / Structural Bulk</option>
                      </select>
                      {errors.quantity && <p className="text-brand-maroon text-xs mt-1 font-medium">{errors.quantity.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Delivery Requirements & Notes</label>
                    <textarea {...register('message')} rows={4} placeholder="Detail your exact specific cut instructions, target timeline parameters, or recurring schedule metrics..." className="w-full bg-brand-cream border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-brand-maroon transition-colors" />
                    {errors.message && <p className="text-brand-maroon text-xs mt-1 font-medium">{errors.message.message}</p>}
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full bg-brand-maroon hover:bg-brand-maroonDark text-white font-bold p-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 disabled:bg-gray-400">
                    {isSubmitting ? "Routing Verification Matrix..." : ( <>Transmit Operational Specifications <Send size={16} /></> )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;