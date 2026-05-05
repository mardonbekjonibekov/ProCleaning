import React, { useState } from "react";
import Image5 from "../../../assets/images/Image5.png";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "Robert Fox",
      role: "Business Man",
      image: { src: Image5, alt: "Robert Fox" }, 
      text: "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service.",
    },
    {
      id: 2,
      name: "Jane Cooper",
      role: "CEO of Tech",
      image: { src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=500&fit=crop", alt: "Jane Cooper" },
      text: "Incredible attention to detail. I've used many cleaning companies before, but ProCleaning is by far the best. My office has never looked better than today!",
    },
    {
      id: 3,
      name: "Albert Flores",
      role: "Homeowner",
      image: { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&fit=crop", alt: "Albert Flores" },
      text: "The staff was friendly and professional. They handled everything with care. Will definitely book again for next month. Five stars from me!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="stats" className="w-full py-20 bg-[#FDFEFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
         <div className="w-full lg:w-2/5 space-y-6">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Feedback About Their <br /> Experience With Us
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Read testimonials from our satisfied clients. See how our cleaning services 
            have made a difference in their lives and homes.
          </p>
          
          <div className="flex gap-4 pt-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-xl border-2 border-slate-200 flex items-center justify-center text-green-500 hover:border-green-500 transition-all active:scale-95"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-xl bg-[#22C55E] flex items-center justify-center text-white hover:bg-[#1da850] transition-all active:scale-95"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

       
        <div className="w-full lg:w-3/5">
          <div className="relative p-2 border-[6px] border-[#22C55E] rounded-[40px]">
            <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8">
              
              
              <div className="w-48 h-56 shrink-0 rounded-2xl overflow-hidden shadow-md">
                <img 
                  src={current.image.src} 
                  alt={current.image.alt} 
                  className="w-full h-full object-cover"
                />
              </div>

             
              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">{current.name}</h3>
                    <p className="text-slate-500 font-medium">{current.role}</p>
                    
                    <div className="flex text-orange-400 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <div className="hidden sm:block bg-[#22C55E] p-3 rounded-2xl">
                    <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M14.017 21L14.017 18C14.017 16.899 14.899 16 16 16H19V10H14.017V5H19C20.101 5 21 5.899 21 7V16C21 18.761 18.761 21 16 21H14.017ZM3 21L3 18C3 16.899 3.899 16 5 16H8V10H3V5H8C9.101 5 10 5.899 10 7V16C10 18.761 7.761 21 5 21H3Z" />
                    </svg>
                  </div>
                </div>

                <p className="text-slate-600 text-lg italic leading-relaxed">
                  "{current.text}"
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialCarousel;