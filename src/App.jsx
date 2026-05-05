
import './App.css'

import HeroSection from './layouts/HomePages/sections/HeroSection.jsx'
import ServicesSection from './layouts/HomePages/sections/ServicesSection.jsx'
import AboutSection from './layouts/HomePages/sections/AboutSection.jsx'
import StatsSection from './layouts/HomePages/sections/StatsSection.jsx'
import PricingSection from './layouts/HomePages/sections/PricingSection.jsx'
import ContactSection from './layouts/HomePages/sections/ContactSection.jsx'
import FooterSection from './layouts/HomePages/sections/FooterSection.jsx'

function App() {
  return (
    <>

      <main className="page">
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <AboutSection />
        <StatsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  )
}

export default App
