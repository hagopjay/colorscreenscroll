import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  {
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-700',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&auto=format&fit=crop&q=60',
    text: 'Embrace the Journey',
  },
  {
    bg: 'bg-gradient-to-br from-pink-500 to-rose-600',
    image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=600&auto=format&fit=crop&q=60',
    text: 'Create Your Story',
  },
  {
    bg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600&auto=format&fit=crop&q=60',
    text: 'Chase the Horizon',
  },
  {
    bg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    image: 'https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?w=600&auto=format&fit=crop&q=60',
    text: 'Find Your Path',
  },
  {
    bg: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&auto=format&fit=crop&q=60',
    text: 'Reach Higher',
  },
  {
    bg: 'bg-gradient-to-br from-violet-600 to-purple-700',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=60',
    text: 'Dream Bigger',
  },
  {
    bg: 'bg-gradient-to-br from-rose-500 to-red-600',
    image: 'https://images.unsplash.com/photo-1513682121497-80211f36a7d3?w=600&auto=format&fit=crop&q=60',
    text: 'Break Boundaries',
  },
  {
    bg: 'bg-gradient-to-br from-yellow-500 to-amber-600',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&auto=format&fit=crop&q=60',
    text: 'Explore More',
  },
  {
    bg: 'bg-gradient-to-br from-teal-500 to-emerald-600',
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&auto=format&fit=crop&q=60',
    text: 'Stay Curious',
  },
  {
    bg: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=600&auto=format&fit=crop&q=60',
    text: 'Never Stop',
  },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full h-full ${slide.bg} flex flex-col items-center justify-center relative`}
          >
            <img
              src={slide.image}
              alt=""
              className="w-64 h-64 object-cover rounded-2xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-white text-4xl font-light tracking-wide mb-12 font-['Helvetica Neue']">
              {slide.text}
            </h2>
            <button
              onClick={nextSlide}
              className="px-8 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white 
                       font-semibold hover:bg-white/30 transition-colors duration-300
                       shadow-lg hover:shadow-xl"
            >
              Continue
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 
                 backdrop-blur-sm text-white hover:bg-white/30 transition-colors duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 
                 backdrop-blur-sm text-white hover:bg-white/30 transition-colors duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Page Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
                      ${currentSlide === index 
                        ? 'w-8 bg-white' 
                        : 'bg-white/50 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;