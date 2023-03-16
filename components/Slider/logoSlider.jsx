import Image from "next/image";
import Carousel from "nuka-carousel/lib/carousel";
import { SliderData } from "./sliderData";
import { RiArrowRightSFill } from "react-icons/ri";
import { RiArrowLeftSFill } from "react-icons/ri";

export default function LogoSlider() {
  return (
    <>
      <Carousel
        autoplay
        autoplayInterval={5000}
        wrapAround
        animation="zoom"
        zoomScale={0.6}
        slidesToShow={3}
        cellAlign={"center"}
        renderCenterLeftControls={({ previousSlide }) => (
          <button className="text-3xl hover:shadow hover:shadow-slate-800 ml-3 p-2 bg-white hover:bg-white/30 duration-300 rounded-full" onClick={previousSlide}>
            <RiArrowLeftSFill />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button className="text-3xl hover:shadow hover:shadow-slate-800 mr-3 p-2 bg-white hover:bg-white/30 duration-300 rounded-full" onClick={nextSlide}>
            <RiArrowRightSFill />
          </button>
        )}
      >
        {SliderData.map((slide, index) => {
          return (
            <div key={index} className="flex flex-col items-center">
              <Image width={252} height={302} src={slide.image} alt="logo" />
              <p className="font-bold text-xl mt-4">{slide.title}</p>
            </div>
          );
        })}
      </Carousel>
    </>
  );
}
