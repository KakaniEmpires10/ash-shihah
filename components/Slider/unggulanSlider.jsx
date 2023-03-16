import Link from "next/link";
import Image from "next/image";
import { GiSupersonicArrow } from "react-icons/gi";
import { UnggulanData } from "./unggulanData";
import Carousel from "nuka-carousel/lib/carousel";
import { MdArrowBackIos } from "react-icons/md"
import { MdArrowForwardIos } from "react-icons/md"

export default function UnggulanSlider() {
  return (
    <>
      <Carousel
        wrapAround
        animation="fade"
        speed={2500}
        renderCenterLeftControls={({ previousSlide }) => (
          <button className="text-5xl text-slate-300  duration-200 hover:text-black/70" onClick={previousSlide}><MdArrowBackIos className="drop-shadow-md"/></button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button className="text-5xl text-slate-300  duration-200 hover:text-black/70" onClick={nextSlide}><MdArrowForwardIos className="drop-shadow-md"/></button>
        )}
      >
        {UnggulanData.map((unggulan, index) => {
          return (
            <div key={index} className="grid grid-cols-5 gap-20 py-12 px-24">
              <div className="col-span-3 flex justify-center items-center">
                <div className="flex flex-col space-y-6 justify-center">
                  <h3 className="font-bold text-5xl drop-shadow-xl">
                    {unggulan.title}
                  </h3>
                  <hr className="border-black border-2 shadow w-1/2" />
                  <blockquote>
                    <p className="text-lg">{unggulan.description}</p>
                  </blockquote>
                  <Link
                    href="#"
                    className="py-3 px-5 border-2 justify-between border-blue-500 text-blue-500 hover:text-white hover:bg-blue-700 duration-200 rounded-full focus:ring-4 focus:ring-blue-300 flex items-center mr-auto"
                  >
                    About the event <GiSupersonicArrow className="ml-3" />
                  </Link>
                </div>
              </div>
              <div className="col-span-2 flex items-center">
                <Image
                  src={unggulan.image}
                  alt="blob"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
}
