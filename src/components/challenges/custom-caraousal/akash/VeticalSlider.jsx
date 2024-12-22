import { useEffect, useState } from "react";

const VerticalSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervel = setInterval(nextSlide, 1000);
    return () => clearInterval(intervel);
  }, [activeIndex]);

  return (
    <div className="slider-container-vertical">
      <button className="control prev" onClick={prevSlide}>
        &#8593;
      </button>
      <div
        className="slider-track"
        style={{
          transform: `translateY(-${activeIndex * 20}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            {slide}
          </div>
        ))}
      </div>
      <button className="control next" onClick={nextSlide}>
        &#8595;
      </button>
    </div>
  );
};

export default VerticalSlider;
