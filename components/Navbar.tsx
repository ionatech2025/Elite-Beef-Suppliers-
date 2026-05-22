"use client";
import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Who We Supply', href: '#supply' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg border-b-2 border-[#8B0000]'
            : 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100'
        }`}
      >
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#8B0000] via-[#B22222] to-[#8B0000]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 flex-shrink-0 group">
              <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.jpeg"
                  alt="Elite Beef Suppliers Logo"
                  fill
                  className="object-contain drop-shadow-md"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col leading-tight">
                <span
                  className="text-[1.35rem] font-black tracking-widest uppercase text-[#8B0000]"
                  style={{ fontFamily: "'Georgia', serif", letterSpacing: '0.12em' }}
                >
                  ELITE
                </span>
                <span
                  className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-gray-700"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  BEEF SUPPLIERS
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="h-px w-4 bg-[#8B0000]" />
                  <span
                    className="text-[0.6rem] font-semibold tracking-widest text-[#2D6A2D] uppercase"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    Halal Certified
                  </span>
                  <div className="h-px w-4 bg-[#8B0000]" />
                </div>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-semibold text-gray-700 uppercase tracking-wide transition-colors duration-200 hover:text-[#8B0000] group"
                  style={{ fontFamily: "'Georgia', serif", fontSize: '0.72rem', letterSpacing: '0.08em' }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#8B0000] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/256763123194"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#20BA5A] transition-all duration-200 shadow-sm hover:shadow-md"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
              <a
                href="tel:+256763123194"
                className="flex items-center gap-2 px-4 py-2 bg-[#8B0000] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#6B0000] transition-all duration-200 shadow-sm hover:shadow-md"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                <Phone size={14} />
                Call Us
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white border-t-2 border-[#8B0000] px-4 pt-4 pb-6 shadow-xl">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-3.5 rounded-lg text-sm font-semibold uppercase tracking-wider text-gray-700 hover:bg-red-50 hover:text-[#8B0000] transition-colors duration-150 border-b border-gray-100 last:border-0"
                style={{ fontFamily: "'Georgia', serif", fontSize: '0.72rem', letterSpacing: '0.1em' }}
              >
                <span className="w-5 h-0.5 bg-[#8B0000] inline-block" />
                {link.name}
              </a>
            ))}
            <div className="mt-4 flex gap-3">
              <a
                href="https://wa.me/256763123194"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-full"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a
                href="tel:+256763123194"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#8B0000] text-white text-xs font-bold uppercase tracking-wider rounded-full"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                <Phone size={14} /> Call Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/256763123194"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </>
  );
};

export default Navbar;