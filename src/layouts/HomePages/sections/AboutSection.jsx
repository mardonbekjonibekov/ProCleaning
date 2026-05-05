import React, { useState } from "react";

const PricingSection = () => {
  
  const [billingCycle, setBillingCycle] = useState("monthly");

  
  const plans = {
    monthly: [
      {
        name: "BASIC PACKAGE",
        price: "59.00",
        features: [
          "Dusting of all surfaces",
          "Sweeping and mopping floors",
          "Vacuuming carpets and rugs",
          "Cleaning of kitchen surfaces",
          "Cleaning of bathroom surfaces",
          "Emptying trash bins",
        ],
        isFeatured: false,
      },
      {
        name: "ENTERPRISE PACKAGE",
        price: "69.00",
        features: [
          "All services in the Basic Plan",
          "Detailed dusting",
          "Wiping down of kitchen appt",
          "Cleaning inside the microwave",
          "Changing bed linens",
          "Spot cleaning walls and doors",
        ],
        isFeatured: true,
      },
      {
        name: "PREMIUM PACKAGE",
        price: "99.00",
        features: [
          "All services in the Clean Plan",
          "Deep cleaning of kitchen appt",
          "baseboards, door frames, & vents",
          "Organization of closets pantries",
          "Carpet, upholstery spot cleaning",
          "Detailed bathroom cleaning",
        ],
        isFeatured: false,
      },
    ],
    yearly: [
      {
        name: "ANNUAL BASIC",
        price: "590.00",
        features: [
          "All Basic Monthly features",
          "24/7 Priority Support",
          "Deep cleaning twice a year",
        ],
        isFeatured: false,
      },
      {
        name: "ANNUAL PRO",
        price: "890.00",
        features: [
          "All Enterprise Monthly features",
          "Unlimited spot cleaning",
          "Window cleaning included",
        ],
        isFeatured: true,
      },
    ],
  };

  return (
    <section id="about" className="w-full py-10 bg-[#f8fafc] relative">
      
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[#22C55E] z-0 rounded-b-[50px] md:rounded-b-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <p className="font-bold mb-4">Our Pricing</p>
        <h2 className="text-4xl md:text-5xl font-black mb-10">
          Choose From Our Lowest <br /> Plans and Prices
        </h2>

        
        <div className="flex justify-center mb-16">
          <div className="bg-white p-1.5 rounded-full flex items-center shadow-xl">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-8 py-2.5 rounded-full font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-[#22C55E] text-white"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-8 py-2.5 rounded-full font-bold transition-all ${
                billingCycle === "yearly"
                  ? "bg-[#22C55E] text-white"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

       
        <div className={`grid gap-8 items-start justify-center ${
          billingCycle === "monthly" ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
        }`}>
          {plans[billingCycle].map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] p-8 shadow-2xl text-slate-800 flex flex-col items-center border border-slate-100 transition-transform hover:scale-[1.02]"
            >
              <h3 className="font-black text-lg mb-6 tracking-wide uppercase">{plan.name}</h3>
              
              
              <div className="bg-[#22C55E] text-white w-full py-6 rounded-2xl mb-8 flex items-center justify-center gap-1">
                <span className="text-2xl font-bold">$</span>
                <span className="text-4xl font-black">{plan.price}</span>
                <span className="text-sm font-medium">/{billingCycle === 'monthly' ? 'Monthly' : 'Yearly'}</span>
              </div>

              
              <ul className="w-full space-y-4 mb-10 text-left">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-slate-600 font-medium">
                    <span className="text-[#22C55E] mt-1.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              
              <button
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                  plan.isFeatured
                    ? "bg-[#22C55E] text-white hover:bg-[#1da850] shadow-lg shadow-green-200"
                    : "border-2 border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;