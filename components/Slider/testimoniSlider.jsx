import Image from "next/image";
import Carousel from "nuka-carousel/lib/carousel";
import { TestimonialData } from "./testimonialData";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";

export default function TestimoniSlider() {
  return (
    <>
      <Carousel
        wrapAround
        autoplay
        autoplayInterval={3000}
        animation="zoom"
        zoomScale={0.4}
        speed={800}
        renderCenterLeftControls=
        {({ previousSlide }) => (
          <button className="text-xl ml-3 p-3 rounded-full text-white bg-black/30 hover:shadow-md hover:shadow-slate-600 hover:text-black hover:bg-white/70 duration-300" onClick={previousSlide}>
            <TiArrowBack />
          </button>
        )}
        renderCenterRightControls=
        {({ nextSlide }) => (
          <button className="text-xl mr-3 p-3 rounded-full text-white bg-black/30 hover:shadow-md hover:shadow-slate-600 hover:text-black hover:bg-white/70 duration-300" onClick={nextSlide}>
            <TiArrowForward />
          </button>
        )}
      >
        {TestimonialData.map((testimoni, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center space-y-5 rounded-xl py-20 my-5 px-16 text-white drop-shadow-lg"
              style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              <Image
                width={90}
                height={90}
                src={testimoni.image}
                alt="testimoni_profile"
                className="rounded-full"
              />
              <div className="text-center">
                <h4 className="font-bold text-lg">{testimoni.name}</h4>
                <h5>
                  <em>{testimoni.status}</em>
                </h5>
              </div>
              <svg
                aria-hidden="true"
                className="w-10 h-10 text-gray-400 dark:text-slate-300/70"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-xl text-center">
                <em>&quot;{testimoni.comment}&quot;</em>
              </p>
            </div>
          );
        })}
      </Carousel>
    </>
  );
}
