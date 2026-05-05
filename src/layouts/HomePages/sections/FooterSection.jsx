import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0A1D14] text-white py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
       
        <div className="space-y-6">
          <div className="flex items-center gap-2">
           
            <div className="w-10 h-10 text-[#3DBB68]">
               <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19,15V17H5V15H19M12,2L5.5,13H18.5L12,2Z" /></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold leading-none">
                Pro<span className="text-[#3DBB68]">Cleaning</span>
              </h3>
              <p className="text-xs text-gray-400">Cleaning Services company</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Stay updated with our latest cleaning tips, service updates, and helpful articles on maintaining a spotless home.
          </p>
        </div>

       
        <div className="space-y-6">
          <h4 className="text-xl font-bold">Company</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-[#3DBB68] transition-colors cursor-pointer"><a href="/about" className="text-gray-400 hover:text-[#3DBB68]">About Us</a></li>
            <li className="hover:text-[#3DBB68] transition-colors cursor-pointer"><a href="/services" className="text-gray-400 hover:text-[#3DBB68]">Services</a></li>
            <li className="hover:text-[#3DBB68] transition-colors cursor-pointer"><a href="/pricing" className="text-gray-400 hover:text-[#3DBB68]">Pricing</a></li>
          </ul>
        </div>

        
        <div className="space-y-6">
          <h4 className="text-xl font-bold">Know More</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-[#3DBB68] transition-colors cursor-pointer"><a href="/support" className="text-gray-400 hover:text-[#3DBB68]">Support</a></li>
            <li className="hover:text-[#3DBB68] transition-colors cursor-pointer"><a href="/privacy" className="text-gray-400 hover:text-[#3DBB68]">Privacy Policy</a></li>
            <li className="hover:text-[#3DBB68] transition-colors cursor-pointer"><a href="/terms" className="text-gray-400 hover:text-[#3DBB68]">Terms & conditions</a></li>
          </ul>
        </div>

        
        <div className="space-y-6">
          <h4 className="text-xl font-bold">Newsletter</h4>
          <div className="space-y-4">
            <input 
              type="email" 
              placeholder="Email Goes here" 
              className="w-full bg-transparent border border-gray-700 rounded-lg p-3 text-sm outline-none focus:border-[#3DBB68] transition-all"
            />
            <button className="bg-[#3DBB68] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#34a35a] transition-all active:scale-95">
              Send
            </button>
          </div>
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>2024 "Procleaning" All Rights Received</p>
      </div>
    </footer>
  );
};

export default Footer;
