import React from 'react';
import cleaning1 from "../../../assets/images/cleaning-1.png";
import cleaning2 from "../../../assets/images/cleaning-2.png";

const ServiceSection = () => {
  return (
    <section id="services" className="w-full py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">

        
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-slate-600 font-medium">
            Affordable cleaning solutions
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            High-Quality and Friendly <br />
            Services at Fair Prices
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-md py-5">
            We provide comprehensive cleaning services tailored to
            your needs. From residential cleaning services
          </p>
          <button className="bg-[#22C55E] hover:bg-[#1da850] text-white px-8 py-3.5 rounded-md font-bold text-lg transition-all active:scale-95 shadow-lg shadow-green-100">
            Get a quote
          </button>
        </div>

       
        <div className="w-full md:w-1/2 relative flex justify-center items-center h-[450px] md:h-[550px]">

          
          
          
          <div className="absolute top-0 right-10 w-[70%] z-10">
            <div className="relative   overflow-hidden ">
              <img
                src={cleaning1}
                alt="Cleaning service high quality"
                className="w-full h-full "
              />
            </div>
          </div>

          
          <div className="absolute bottom-8 left-5 w-[50%] z-20">
            <div className="relative   overflow-hidden ">
              <img
                src={cleaning2}
                alt="Cleaning table"
                className="w-full h-full "
              />
            </div>
          </div>



        </div>

      </div>
    </section>
  );
};

export default ServiceSection;