import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hero1 from '../../assets/hero1.jpg';
import hero2 from '../../assets/hero2.jpg';
import hero3 from '../../assets/hero3.jpg';

const Hero: React.FC = () => {
  const slides = [
    {
      id: 1,
      title: "Economic Empowerment",
      subtitle: "We believe financial empowerment begins at the grassroots level, when people pool resources, support one another, and make collective decisions for long-term growth.",
      button1: "More Detail",
      button2: "Get Started",
      bgGradient: "from-[#193480] to-[#173381]",
      image: hero1,
    },
    {
      id: 2,
      title: "Community Investment",
      subtitle: "Join thousands of members in building sustainable financial futures through collective investment and mutual support.",
      button1: "Learn More",
      button2: "Join Now",
      bgGradient: "from-[#29a6c2] to-[#29aecb]",
      image: hero2,
    },
    {
      id: 3,
      title: "Financial Freedom",
      subtitle: "Empowering individuals and communities to achieve financial independence through smart investing and resource sharing.",
      button1: "Our Strategy",
      button2: "Start Today",
      bgGradient: "from-[#173381] to-[#193480]",
      image: hero3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Carousel */}
      <div className="relative h-[600px] md:h-[700px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Base gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`} />

            {/* Multi‑layer corporate pattern overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `
                  /* Diagonal lines (very faint) */
                  repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 12px),
                  /* Horizontal lines (grid) */
                  repeating-linear-gradient(0deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 30px),
                  /* Vertical lines */
                  repeating-linear-gradient(90deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 30px),
                  /* Subtle dots */
                  radial-gradient(circle at 20px 20px, rgba(255,255,255,0.015) 1px, transparent 1px)
                `,
                backgroundSize: 'auto, 30px 30px, 30px 30px, 40px 40px',
                mixBlendMode: 'overlay',
              }}
            />

            {/* Additional subtle vignette to focus attention */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.1) 100%)',
              }}
            />

            <div className="container mx-auto px-4 h-full flex items-center relative z-10">
              {/* Two-column layout */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-12">
                {/* Left: Text content */}
                <div className="text-white max-w-2xl md:w-1/2">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 opacity-90">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-[#193480] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200">
                      {slide.button1}
                    </button>
                    <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors duration-200">
                      {slide.button2}
                    </button>
                  </div>
                </div>

                {/* Right: Image with blending overlay */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                  <div className="relative w-full max-w-md">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-auto rounded-lg shadow-2xl object-cover"
                      style={{ maxHeight: '400px' }}
                    />
                    {/* Dark gradient overlay to blend edges */}
                    <div
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, rgba(0,0,0,0.3) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)`,
                      }}
                    />
                    {/* Vignette effect */}
                    <div
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      style={{
                        boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5)',
                      }}
                    />
                    {/* Subtle pattern overlay on image to tie with background */}
                    <div
                      className="absolute inset-0 rounded-lg pointer-events-none opacity-10"
                      style={{
                        backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 1px, transparent 1px, transparent 6px)`,
                        mixBlendMode: 'overlay',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200 z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200 z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;