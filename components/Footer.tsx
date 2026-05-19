const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-black tracking-tight text-white">ELITE BEEF SUPPLIERS</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Industrial standard commercial logistics partners maximizing bulk meat channel optimization across the broader East African business zones.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-brand-green uppercase tracking-wider mb-4">Core Assertions</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>100% Halal Management</li>
              <li>Cold Traceability Systems</li>
              <li>UNBS Metric Clearances</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-brand-green uppercase tracking-wider mb-4">Quick Anchors</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">Our Standard Operations</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Portion Matrix Cuts</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Initialize Infrastructure Request</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-brand-green uppercase tracking-wider mb-4">Corporate Office</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Kampala-Luweero Road Infrastructure Hub<br />
              Central District Logistics Branch, Uganda
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Elite Beef Suppliers Ltd. All Rights Reserved. Tracked via Pure Halal Standards.
        </div>
      </div>
    </footer>
  );
};

export default Footer;