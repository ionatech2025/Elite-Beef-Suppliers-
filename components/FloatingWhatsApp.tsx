import { MessageSquare } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/256700000000?text=Hello%20Elite%20Beef%20Suppliers,%20I%20would%20like%20to%20request%20a%20quotation."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Contact via WhatsApp"
    >
      <MessageSquare className="w-6 h-6 fill-current" />
      <span className="absolute right-14 bg-white text-gray-800 text-sm font-medium px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};

export default FloatingWhatsApp;