// Css
// data
// events
// logic

import { useEffect, useState } from "react";

const CarouselAkash = () => {
  const slides = createArrayOfObjects(6);
  const [isPaused, setIsPaused] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
      return;
    }
    setActiveSlide(activeSlide - 1);
  };
  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
      return;
    }
    setActiveSlide(activeSlide + 1);
  };
  console.log(activeSlide, "active slide");
  console.log("isPaused", isPaused);

  useEffect(() => {
    if (!isPaused) {
      const intervel = setInterval(nextSlide, 1000);
      return () => clearInterval(intervel);
    }
  }, [activeSlide, isPaused]);

  return (
    <>
      <div
        className="carousel-container-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
        }}
      >
        <div
          className="carousel-container"
          style={{ transform: `transLateX(-${activeSlide * 100}%)` }}
        >
          {createArrayOfObjects(6).map((item) => {
            const { id, name, desc } = item;
            return (
              <div className="slide" key={id}>
                <h3>{name}</h3>
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
        <button className="carousel-nav prev" onClick={prevSlide}>
          &#8592;
        </button>
        <button className="carousel-nav next" onClick={nextSlide}>
          &#8594;
        </button>
      </div>
      <div className="carousel-footer">
        {createArrayOfObjects(6).map((_, index) => {
          return (
            <button
              className={`${activeSlide === index ? "slide-active" : ""}`}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default CarouselAkash;

function createArrayOfObjects(size) {
  return Array(size)
    .fill(null) // Create an array of the given size and fill with `null` or placeholder
    .map((_, index) => ({
      id: index + 1, // Assign an ID starting from 1
      name: `Item ${index + 1}`, // Give a name based on the index
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing lorem temp",
    }));
}
