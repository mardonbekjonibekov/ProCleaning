// import React, { useState, useEffect } from "react";
// import hero from "../../../assets/images/Hero-Imge.png";
// import vektor from "../../../assets/images/Vector.svg";

// const LandingPage = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//   }, [isOpen]);

//   const navLinks = [
//     { name: "Home", path: "#home" },
//     { name: "About us", path: "#about" },
//     { name: "Service", path: "#service" },
//     { name: "Blog", path: "#blog" },
//     { name: "Contact", path: "#contact" },
//   ];

//   return (
//     <div className=" bg-[#FDFEFF] font-sans text-slate-900 scroll-smooth overflow-x-hidden">

//       {/* ================= NAVBAR ================= */}
//       <nav className="fixed top-0 left-0 w-full  bg-white/90 backdrop-blur-md z-1000 border-b border-slate-100 h-20 flex items-center">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">

//           <div className="flex items-center gap-2">
//             <img src={vektor} alt="logo" className="w-8 h-8" />
//             <div>
//               <h1 className="text-xl font-black tracking-tight leading-none">
//                 <span className="text-green-500">Pro</span>Cleaning
//               </h1>
//               <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">
//                 Cleaning Services Company
//               </p>
//             </div>
//           </div>


//           <div className="hidden min-[821px]:flex items-center gap-10">
//             <div className="flex items-center gap-8">
//               {navLinks.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.path}
//                   className="font-semibold text-slate-600 hover:text-green-500 transition-all duration-300"
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//             <button className="bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-full font-bold shadow-lg shadow-green-100 active:scale-95 transition-all">
//               Get a quote
//             </button>
//           </div>


//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="min-[821px]:hidden relative z-1200 p-2 text-slate-600 focus:outline-none"
//           >
//             <div className="space-y-1.5">
//               <span className={`block w-6 h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
//               <span className={`block w-6 h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
//               <span className={`block w-6 h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
//             </div>
//           </button>
//         </div>
//       </nav>


//       {/* ================= MOBILE MENU ================= */}
//       <div
//         className={`fixed inset-0 bg-white z-1100 flex flex-col items-center justify-center gap-12 transition-all duration-500 min-[821px]:hidden ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 invisible"
//           }`}
//       >
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-6 right-6 text-3xl font-bold"
//         >
//           ✕
//         </button>
//         <div className="flex flex-col items-center gap-8">
//           {navLinks.map((item) => (
//             <a key={item.name} href={item.path} onClick={() => setIsOpen(false)} className="text-4xl font-black text-slate-900 hover:text-green-500 transition-all">
//               {item.name}
//             </a>
//           ))}
//         </div>
//         <button onClick={() => setIsOpen(false)} className="bg-green-500 text-white px-12 py-5 rounded-full font-extrabold text-xl shadow-2xl shadow-green-200">
//           Get a quote
//         </button>
//       </div>



//       <main className="pt-15">
//         {/* ================= HERO SECTION ================= */}
//         <section
//           id="home"
//           className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center bg-contain md:bg-cover bg-center no-repeat"
//           style={{
//             backgroundImage: `url(${hero})`,
//             backgroundSize: 'cover'
//           }}
//         >

//           <div className="absolute inset-0 bg-white/30 md:bg-transparent"></div>

//           <div className=" mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
//             <div className="max-w-2xl">


//               <p className="text-slate-800 font-medium mb-4 text-lg md:text-xl">
//                 Quality cleaning at a fair price.
//               </p>


//               <h1 className="text-[38px] md:text-[60px] font-black text-slate-900 leading-[1.15] mb-8">
//                 <span className="relative inline-block">
//                   Specialized, efficient,

//                 </span>
//                 <br />
//                 <span className="relative inline-block">
//                   and thorough cleaning

//                 </span>
//                 <br />
//                 <span className="relative inline-block">
//                   services

//                 </span>
//               </h1>


//               <p className="text-slate-700 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-medium">
//                 We provide Performing cleaning tasks using the least amount of time, energy, and money.
//               </p>


//               <div className="flex flex-wrap gap-5">
//                 <button className="bg-[#22C55E] hover:bg-[#1da850] text-white px-9 py-4 rounded-md font-bold text-lg transition-all active:scale-95 shadow-lg shadow-green-200">
//                   Get Start Now
//                 </button>
//                 <button className="border-2 border-slate-400 hover:bg-white/50 text-slate-900 px-9 py-4 rounded-md font-bold text-lg transition-all active:scale-95 backdrop-blur-sm">
//                   View all Services
//                 </button>
//               </div>

//             </div>
//           </div>
//         </section>
//       </main>

//     </div>
//   );
// };

// export default LandingPage;


import React, { useState, useEffect } from "react";
import hero from "../../../assets/images/Hero-Imge.png";
import vektor from "../../../assets/images/Vector.svg";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About us", path: "#about" },
    { name: "Service", path: "#service" },
    { name: "Blog", path: "#blog" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <div className="bg-[#FDFEFF] font-sans text-slate-900 scroll-smooth overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-1000 border-b border-slate-100 h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">

          <div className="flex items-center gap-2">
            <img src={vektor} alt="logo" className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-black tracking-tight leading-none">
                <span className="text-green-500">Pro</span>Cleaning
              </h1>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">
                Cleaning Services Company
              </p>
            </div>
          </div>

          <div className="hidden min-[821px]:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="font-semibold text-slate-600 hover:text-green-500 transition-all duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-full font-bold shadow-lg shadow-green-100 active:scale-95 transition-all">
              Get a quote
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="min-[821px]:hidden relative z-1200 p-2 text-slate-600 focus:outline-none"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 bg-white z-1100 flex flex-col items-center justify-center gap-12 transition-all duration-500 min-[821px]:hidden ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-3xl font-bold">✕</button>
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((item) => (
            <a key={item.name} href={item.path} onClick={() => setIsOpen(false)} className="text-4xl font-black text-slate-900 hover:text-green-500 transition-all">
              {item.name}
            </a>
          ))}
        </div>
        <button onClick={() => setIsOpen(false)} className="bg-green-500 text-white px-12 py-5 rounded-full font-extrabold text-xl shadow-2xl shadow-green-200">
          Get a quote
        </button>
      </div>

      <main className="pt-20"> {/* ✅ pt-20 — navbar 80px */}
        {/* ================= HERO SECTION ================= */}
        <section
          id="home"
          className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center"
          style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-white/30 md:bg-transparent"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10"> {/* ✅ max-w-7xl qo'shildi */}
            <div className="max-w-2xl">
              <p className="text-slate-800 font-medium mb-4 text-lg md:text-xl">
                Quality cleaning at a fair price.
              </p>
              <h1 className="text-[38px] md:text-[60px] font-black text-slate-900 leading-[1.15] mb-8">
                Specialized, efficient,<br />
                and thorough cleaning<br />
                services
              </h1>
              <p className="text-slate-700 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-medium">
                We provide performing cleaning tasks using the least amount of time, energy, and money.
              </p>
              <div className="flex flex-wrap gap-5 py-4">
                <button className="bg-[#22C55E] hover:bg-[#1da850] text-white px-9 py-3  rounded-md font-bold text-lg transition-all active:scale-95 shadow-lg shadow-green-200">
                  Get Start Now
                </button>
                <button className="border-2 border-slate-400 hover:bg-white/50 text-slate-900 px-9 py-4 rounded-md font-bold text-lg transition-all active:scale-95 backdrop-blur-sm">
                  View all Services
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default LandingPage;