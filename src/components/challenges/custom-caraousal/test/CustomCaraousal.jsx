import React, { useState, useEffect, useRef } from "react";

const CustomCarousel = ({ slides, autoplayInterval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const totalSlides = slides.length;

  // Move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Autoplay slides
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, autoplayInterval);
      return () => clearInterval(interval);
    }
  }, [isPaused, currentSlide]);

  // Swipe gestures
  const handleTouchStart = (e) => {
    carouselRef.current.startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - carouselRef.current.startX;
    if (deltaX > 50) {
      prevSlide(); // Swipe right
    } else if (deltaX < -50) {
      nextSlide(); // Swipe left
    }
  };

  return (
    <div
      className="custom-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.image} alt={slide.alt || `Slide ${index + 1}`} />
            {/* <h1>SLide {index + 1}</h1> */}
          </div>
        ))}
      </div>
      <button className="carousel-nav prev" onClick={prevSlide}>
        &#8592;
      </button>
      <button className="carousel-nav next" onClick={nextSlide}>
        &#8594;
      </button>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
