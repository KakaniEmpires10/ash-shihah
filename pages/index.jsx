import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Link from "next/link";
import Layout from "components/layout/Layout";
import { CardProfile } from "components/SideBar/profile";
import SocialIcon from "components/SocialIcon";
import { Libre_Baskerville } from "@next/font/google";
import { GiSupersonicArrow } from "react-icons/gi";
import LogoSlider from "components/Slider/logoSlider";
import UnggulanSlider from "components/Slider/unggulanSlider";
import TestimoniSlider from "components/Slider/testimoniSlider";
import GallerySlider from "components/Slider/gallerySlider";
import Carousel from "nuka-carousel/lib/carousel";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>LDF Ash-Shihah</title>
      </Head>
      <Layout>
        {/* ------------------------------------------- Header Section ----------------------------------------- */}
        <div
          id={styles.header}
          className={`${libreBaskerville.className} relative h-[120vh]`}
        >
          <div className="grid grid-cols-2 gap-8 text-white">
            <div className="flex justify-center items-center">
              <div className="text-xl space-y-5">
                <h1 className="text-7xl font-bold">LDF Ash-Shihah</h1>
                <h4 className="text-xl">(Ukhuwahnya tu disini 😍)</h4>
                <h3 className="text-5xl leading-normal">
                  Fakultas Keperwatan USK
                </h3>
                <p className="leading-normal text-lg">
                  Kami adalah organisasi fakultas yang senantiasa aktif dalam
                  berdakwah dan mengajak saudara/i sekalian kejalan syurga yang
                  diridhoi Allah SWT
                </p>
                <p className="mt-2">ikuti kami di social media</p>
                <div className="flex gap-2 text-4xl mt-5 z-10 relative">
                  <SocialIcon />
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <Image
            priority
            src="/wave.svg"
            alt="wave"
            fill
            className="object-cover object-bottom"
          />
        </div>

        {/* --------------------------------------------- About --------------------------------------------------*/}

        <div className="grid grid-cols-5 gap-8 bg-gradient-to-b from-primary-white-500 via-primary-white-350 p-16">
          <div className="col-span-3">
            <div className="flex flex-col space-y-6 justify-center">
              <h3 className="font-bold text-5xl drop-shadow-xl">About</h3>
              <hr className="border-black border-2 shadow w-1/3" />
              <blockquote>
                <p className="text-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem quos minus excepturi veritatis velit dicta
                  reprehenderit, iusto sapiente exercitationem soluta mollitia
                  ducimus, magnam cupiditate rem natus nisi architecto
                  temporibus veniam molestias. Cumque a quia asperiores eveniet
                  laboriosam, nostrum delectus sit quod vitae repellendus
                  distinctio temporibus, inventore suscipit laborum dolorum.
                  Veritatis!
                </p>
              </blockquote>
              <Link
                href="/about"
                className="py-3 px-5 border-2 justify-between border-blue-500 text-blue-500 hover:text-white hover:bg-blue-700 duration-200 rounded-full focus:ring-4 focus:ring-blue-300 flex items-center mr-auto"
              >
                More About us <GiSupersonicArrow className="ml-3" />
              </Link>
            </div>
          </div>
          <div className="col-span-2 flex items-center">
            <Image src="/blob-haikei.svg" alt="blob" width={800} height={700} />
          </div>
        </div>

        {/* ----------------------------------------- Suhu Profile --------------------------------------------- */}
        <div id={styles.blogProfile}>
          <h3 className="text-4xl font-bold text-center">
            Suhu Tahun {new Date().getFullYear()}
          </h3>
          <hr className="mt-7 mb-20 border-2 border-black rounded-xl w-1/12 m-auto" />
          <div className="flex justify-center text-black">
            <Carousel
              slidesToShow={3}
              animation="zoom"
              zoomScale={0.9}
              cellAlign="center"
              withoutControls
              slideIndex={1}
              dragging={false}
              swiping={false}
            >
              <CardProfile name="Fara Khairunnisa" departmen="Bendahara Umum" />
              <CardProfile name="Hendra" departmen="Ketua Umum" />
              <CardProfile
                name="Luthfiya Az-Zuhra"
                departmen="Sekretaris Umum"
              />
            </Carousel>
          </div>
        </div>

        {/* ----------------------------------------- Pengurus Section ------------------------------------------ */}

        <div>
          <h3 className="text-4xl font-bold text-center">
            Pengurus {new Date().getFullYear()}
          </h3>
          <hr className="mt-7 mb-20 border-2 border-black rounded-xl w-1/12 m-auto" />
        </div>

        {/* ----------------------------------------- Departemen Slider ----------------------------------------- */}

        <div id={styles.department}>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-4xl font-bold">Departemen Kami</h3>
            <hr className="mt-7 mb-20 border-2 border-black rounded-xl w-1/12 m-auto" />
          </div>
          <LogoSlider />
        </div>

        {/* ------------------------------------------ Unggulan Section ----------------------------------------- */}
        <div id={styles.unggulan}>
          <h3 className="text-4xl font-bold text-center">Unggulan Kami</h3>
          <hr className="mt-7 mb-20 border-2 border-black rounded-xl w-1/12 m-auto" />
          <UnggulanSlider />
        </div>

        {/* ----------------------------------------- Memori Bree 😥 ---------------------------------------------*/}
        <div id={styles.memori}>
          <h3 className="text-4xl font-bold text-center">
            Memori Pengurus {new Date().getFullYear() - 1}
          </h3>
          <hr className="mt-7 mb-20 border-2 border-black rounded-xl w-1/12 m-auto" />
          <div className="flex justify-center px-5">
            <video
              className="aspect-video border-slate-800/90 rounded-3xl"
              controls
            >
              <source src="/video/Dokumenter_2022.mp4" type="video/mp4" />
              Your browser does not support the video tag
            </video>
          </div>
        </div>

        {/* ---------------------------------------- Testimonial Section ---------------------------------------- */}
        <div id={styles.testimonial}>
          <h3 className="text-4xl font-bold text-center">Testimonial</h3>
          <hr className="mt-7 mb-5 border-2 border-black rounded-xl w-1/12 m-auto" />
          <TestimoniSlider />
        </div>

        {/* ------------------------------------------- Footer Section ------------------------------------------ */}
        <footer className="relative">
          <Image
            priority
            src="/wave.svg"
            alt="wave"
            fill
            className="object-cover object-bottom"
          />
          <div className="pt-36 pb-48 text-center text-white bg-gradient-radial from-primary-white-700 to-primary-white-250 space-y-6">
            <h3 className="text-5xl drop-shadow-md">
              Penasaran tentang kami ?
            </h3>
            <h5 className="text-3xl drop-shadow-md">Kunjungi kami di</h5>
            <p className="drop-shadow-md">
              Sekretariat LDF Ash-Shihah, Fakultas Keperawatan, Universitas
              Syiah Kuala
            </p>
            <div className="mt-7">
              <h5 className="text-4xl drop-shadow-md">See You All Soon</h5>
              <div className="flex gap-2 justify-center text-4xl mt-5">
                <SocialIcon />
              </div>
            </div>
          </div>
          <div className="text-center text-white py-4">
            <p className="drop-shadow-md">
              Copyright &copy; {new Date().getFullYear()} Muhammad Alim Kakani |
              Freelance for Money and Happyness
            </p>
          </div>
        </footer>
      </Layout>
    </>
  );
}
