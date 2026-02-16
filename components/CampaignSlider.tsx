
import React, { useState, useEffect, useCallback, useRef } from 'react';

interface Slide {
  image: string;
  title: string;
  description: string;
  link: string;
}

const slides: Slide[] = [
  {
    image: 'https://picsum.photos/1470/800?random=1',
    title: 'Points de Lecture',
    description: 'Nous installons et animons des points de lecture dans les villages de Casamance pour favoriser l\'accès à la culture et à l\'éducation.',
    link: '#actions',
  },
  {
    image: 'https://picsum.photos/1470/800?random=2',
    title: 'Soutien Scolaire',
    description: 'Nos programmes de soutien scolaire aident les jeunes de Casamance à réussir leur parcours éducatif.',
    link: '#actions',
  },
  {
    image: 'https://picsum.photos/1470/800?random=3',
    title: 'Formation Numérique',
    description: 'Nous formons les jeunes aux outils numériques essentiels pour leur insertion professionnelle.',
    link: '#actions',
  },
];

export const CampaignSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef<number | undefined>(undefined);

  const showSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const startInterval = () => {
      slideIntervalRef.current = window.setInterval(nextSlide, 5000);
    };

    const stopInterval = () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
        slideIntervalRef.current = undefined;
      }
    };

    startInterval(); // Start on mount

    return () => {
      stopInterval(); // Clean up on unmount
    };
  }, [nextSlide]); // eslint-disable-line react-hooks/exhaustive-deps

  // Using refs for mouse events to avoid re-adding listeners on every render
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = sliderContainerRef.current;
    if (container) {
      const handleMouseEnter = () => {
        if (slideIntervalRef.current) {
          clearInterval(slideIntervalRef.current);
          slideIntervalRef.current = undefined;
        }
      };
      const handleMouseLeave = () => {
        if (!slideIntervalRef.current) { // Only restart if not already running
          slideIntervalRef.current = window.setInterval(nextSlide, 5000);
        }
      };

      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [nextSlide]); // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Nos Campagnes</h2>
        
        <div ref={sliderContainerRef} className="relative h-96 md:h-[500px] overflow-hidden rounded-xl shadow-lg">
          {/* Slider Items */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center bg-cover bg-center transition-opacity duration-500 ease-in-out
                ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="container mx-auto px-4 z-10 text-white max-w-4xl">
                <h3 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h3>
                <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                <a href={slide.link} className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full">
                  En savoir plus
                </a>
              </div>
            </div>
          ))}
          
          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-2 transition-all duration-300"
            aria-label="Previous slide"
          >
            <i className="fas fa-chevron-left text-xl"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-2 transition-all duration-300"
            aria-label="Next slide"
          >
            <i className="fas fa-chevron-right text-xl"></i>
          </button>
          
          {/* Slider Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => showSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300
                  ${index === currentSlide ? 'bg-white bg-opacity-70' : 'bg-white bg-opacity-30 hover:bg-opacity-50'}`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
