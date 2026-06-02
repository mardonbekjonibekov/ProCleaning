import React, { useState, useEffect } from 'react';

const LoadingPage = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500); // 100% bo'lganda biroz kutib keyin o'tadi
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#ffffff]">
      {/* Matn qismi */}
      <div className="mb-4 text-2xl font-black text-slate-800">
        Pro<span className="text-green-500">Cleaning</span>
      </div>

      {/* Progress Bar Konteyneri */}
      <div className="w-64 h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
        <div 
          className="h-full bg-green-500 relative transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        >
          {/* Animatsiya effekti (yuguruvchi chiziq) */}
          <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
        </div>
      </div>
      
      <p className="mt-2 text-sm font-bold text-slate-500">{progress}%</p>
    </div>
  );
};

export default LoadingPage;