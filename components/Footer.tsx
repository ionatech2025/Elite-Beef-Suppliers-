const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-black tracking-tight text-white">ELITE BEEF SUPPLIERS</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Fresh, halal and quality beef supplied to businesses across Uganda and East Africa. Reliable, hygienic, and always on schedule.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-brand-green uppercase tracking-wider mb-4">Our Standards</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>100% Halal Certified</li>
              <li>Cold Chain Delivery</li>
              <li>UNBS Compliant</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-brand-green uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Our Products</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-brand-green uppercase tracking-wider mb-4">Location</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Meat Packers Along Portbell Road<br />
              Kampala, Uganda
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Elite Beef Suppliers Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;