import Image from "next/image";
import Carousel from "nuka-carousel/lib/carousel";
import { GalleryData } from "./galleryData";

export default function GallerySlider() {
  return (
    <>
      <Carousel slidesToShow={3} wrapAround>
          {GalleryData.map((galeri, index) => {
            return (
              <div key={index}>
              <Image
                className="rounded-xl shadow-md"
                width={400}
                height={400}
                src={galeri.image}
                alt="gallery"
              />
              </div>
            );
          })}
      </Carousel>
    </>
  );
}
