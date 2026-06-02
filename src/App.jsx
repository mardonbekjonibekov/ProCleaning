
// import './App.css'

// import HeroSection from './layouts/HomePages/sections/HeroSection.jsx'
// import ServicesSection from './layouts/HomePages/sections/ServicesSection.jsx'
// import AboutSection from './layouts/HomePages/sections/AboutSection.jsx'
// import StatsSection from './layouts/HomePages/sections/StatsSection.jsx'
// import PricingSection from './layouts/HomePages/sections/PricingSection.jsx'
// import ContactSection from './layouts/HomePages/sections/ContactSection.jsx'
// import FooterSection from './layouts/HomePages/sections/FooterSection.jsx'
// import NotFoundPage from './layouts/HomePages/sections/NotFoundPage.jsx'

// function App() {
//   return (
//     <>

//       <main className="page">
//         <HeroSection />
//         <ServicesSection />
//         <PricingSection />
//         <AboutSection />
//         <StatsSection />
//         <ContactSection />
//         <FooterSection />
//          {/* <NotFoundPage /> */}

//       </main>
//     </>
//   )
// }

// export default App

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';

// // Sahifalarni import qilish
// import HeroSection from './layouts/HomePages/sections/HeroSection.jsx';
// import ServicesSection from './layouts/HomePages/sections/ServicesSection.jsx';
// import AboutSection from './layouts/HomePages/sections/AboutSection.jsx';
// import StatsSection from './layouts/HomePages/sections/StatsSection.jsx';
// import PricingSection from './layouts/HomePages/sections/PricingSection.jsx';
// import ContactSection from './layouts/HomePages/sections/ContactSection.jsx';
// import FooterSection from './layouts/HomePages/sections/FooterSection.jsx';
// import NotFoundPage from './layouts/HomePages/sections/NotFoundPage.jsx';

// // Loading komponenti (o'zingiz yaratgan fayl)
// import LoadingPage from './layouts/HomePages/sections/LoadingPage.jsx'; 

// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   // Loading tugagandan keyin kontentni ko'rsatish
//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 3500); // 3.5 soniya yuklanish
//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return <LoadingPage />;
//   }

//   return (
//     <Router>
//       <main className="page">
//         <Routes>
//           {/* Asosiy sahifa - barcha bo'limlar */}
//           <Route path="/" element={
//             <>
//               <HeroSection />
//               <ServicesSection />
//               <PricingSection />
//               <AboutSection />
//               <StatsSection />
//               <ContactSection />
//               <FooterSection />
//             </>
//           } />

//           {/* Not Found sahifasi */}
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';

// // Importlar
// import HeroSection from './layouts/HomePages/sections/HeroSection.jsx';
// import ServicesSection from './layouts/HomePages/sections/ServicesSection.jsx';
// import AboutSection from './layouts/HomePages/sections/AboutSection.jsx';
// import StatsSection from './layouts/HomePages/sections/StatsSection.jsx';
// import PricingSection from './layouts/HomePages/sections/PricingSection.jsx';
// import ContactSection from './layouts/HomePages/sections/ContactSection.jsx';
// import FooterSection from './layouts/HomePages/sections/FooterSection.jsx';
// import NotFoundPage from './layouts/HomePages/sections/NotFoundPage.jsx';

// import LoadingPage from './layouts/HomePages/sections/LoadingPage.jsx'; // Faylni yaratgan joyingizdan import qiling


// function App() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   // Agar hali yuklanmagan bo'lsa, LoadingPage ni ko'rsat
//   if (!isLoaded) {
//     return <LoadingPage onComplete={() => setIsLoaded(true)} />;
//   }

//   // Yuklanib bo'lgach, saytni ko'rsat
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={
//           <main className="page">
//             <>
//               <HeroSection />
//               <ServicesSection />
//               <PricingSection />
//               <AboutSection />
//               <StatsSection />
//               <ContactSection />
//               <FooterSection />
//             </>
//           </main>
//         } />
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Komponentlarni import qilish
import HeroSection from './layouts/HomePages/sections/HeroSection.jsx';
import ServicesSection from './layouts/HomePages/sections/ServicesSection.jsx';
import AboutSection from './layouts/HomePages/sections/AboutSection.jsx';
import StatsSection from './layouts/HomePages/sections/StatsSection.jsx';
import PricingSection from './layouts/HomePages/sections/PricingSection.jsx';
import ContactSection from './layouts/HomePages/sections/ContactSection.jsx';
import FooterSection from './layouts/HomePages/sections/FooterSection.jsx';
import NotFoundPage from './layouts/HomePages/sections/NotFoundPage.jsx';
import LoadingPage from './layouts/HomePages/sections/LoadingPage.jsx';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. Agar hali yuklanmagan bo'lsa, LoadingPage ni ko'rsat
  if (!isLoaded) {
    return <LoadingPage onComplete={() => setIsLoaded(true)} />;
  }

  // 2. Yuklanib bo'lgach, Router orqali sahifalarni boshqar
  return (
    <Router>
      <Routes>
        {/* Asosiy sahifa - barcha seksiyalar */}
        <Route path="/" element={
          <main className="page">
            <HeroSection />
            <ServicesSection />
            <PricingSection />
            <AboutSection />
            <StatsSection />
            <ContactSection />
            <FooterSection />
          </main>
        } />

        {/* Not Found sahifasi - Yuqoridagidan boshqa hamma manzil uchun */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;