import CustomCarousel from "./test/CustomCaraousal";
import CarouselAkash from "./akash/CarausalAkash";
import VerticalSlider from "./akash/VeticalSlider";

const CarouselsWrapper = () => {
  return (
    <div>
      <CustomCarousel
        slides={[
          {
            image: "https://via.placeholder.com/800x300?text=Slide+1",
            alt: "Slide 1",
          },
          {
            image: "https://via.placeholder.com/800x300?text=Slide+2",
            alt: "Slide 2",
          },
          {
            image: "https://via.placeholder.com/800x300?text=Slide+3",
            alt: "Slide 3",
          },
          {
            image: "https://via.placeholder.com/800x300?text=Slide+4",
            alt: "Slide 4",
          },
        ]}
      />
      <hr />
      <hr />

      <CarouselAkash />
      <hr />
      <hr />

      <VerticalSlider />
    </div>
  );
};

export default CarouselsWrapper;
