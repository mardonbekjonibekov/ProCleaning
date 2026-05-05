import React from "react";
import aboutImg1 from "../../../assets/images/about-1.png";
import aboutImg2 from "../../../assets/images/about-2.png";

const AboutSection = () => {
  const features = [
    "Vetted professionals",
    "Affordable Prices",
    "Next day availability",
    "Best Quality",
    "Standard cleaning tasks",
    "Affordable Prices",
  ];

  return (
    <section id="pricing" className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">

        
        <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px]">
          <div className="absolute top-0 left-0 w-[80%] h-[90%] border-[6px] border-[#22C55E] rounded-[40px] overflow-hidden">
            <img
              src={aboutImg1}
              alt="Our Team"
              className="w-full h-full object-cover"
            />
          </div>

          
          <div className="absolute bottom-0 right-3 w-[55%] h-[55%] border-10 border-white rounded-[30px] shadow-2xl overflow-hidden z-10">
            <img
              src={aboutImg2}
              alt="Cleaning process"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

         <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Welcome To Our <br />
            <span className="text-slate-900">Pro-cleaning Company!</span>
          </h2>

          <p className="text-slate-500 text-lg leading-relaxed">
            We make your space shine! Professional and reliable cleaning service
            company providing top-notch solutions for homes and businesses.
            Satisfaction guaranteed!"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg">
                <div className="bg-[#22C55E] rounded-full p-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-bold text-slate-700 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>

          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#22C55E] hover:bg-[#1da850] text-white px-10 py-4 rounded-md font-bold text-lg shadow-lg shadow-green-100 transition-all active:scale-95">
              Book Now
            </button>
            <button className="border-2 border-slate-200 hover:bg-slate-50 text-slate-900 px-10 py-4 rounded-md font-bold text-lg transition-all">
              Know More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;