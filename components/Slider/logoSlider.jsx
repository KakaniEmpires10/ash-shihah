import Image from "next/image";
import { useState } from "react";
import { SliderData } from "./sliderData";

export default function LogoSlider() {
  const [currentValue, setCurrentValue] = useState(0);
  const length = SliderData.length;

  return (
    <div className="relative flex justify-center items-center">
      {SliderData.map((slide, index) => {
        return (
          <div key={index} className="flex flex-col">
            <Image width={252} height={302} src={slide.image} alt="logo" />
            <p className="font-bold text-2xl text-center mt-4">{slide.title}</p>
          </div>
        );
      })}
    </div>
  );
}
