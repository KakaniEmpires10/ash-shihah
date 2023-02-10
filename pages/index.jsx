import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Link from "next/link";
import Layout from "components/layout/Layout";
import { CardProfile } from "components/SideBar/profile";
import SocialIcon from "components/SocialIcon";
import { Libre_Baskerville } from "@next/font/google";
import { GiSupersonicArrow } from "react-icons/gi";

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
          <div className="grid grid-cols-2 gap-10 text-white px-14 py-16">
            <div className="text-xl leading-loose">
              <h1 className="text-[72px] font-bold">LDF Ash-Shihah</h1>
              <h4 className="text-xl">(Ukhuwahnya tu disini 😍)</h4>
              <h3 className="text-[45px]">Fakultas Keperwatan USK</h3>
              <p className="leading-snug text-lg">
                Kami adalah organisasi fakultas yang senantiasa aktif dalam
                berdakwah dan mengajak saudara/i sekalian kejalan syurga yang
                diridhoi Allah SWT
              </p>
              <p className="mt-2">ikuti kami di social media</p>
              <div className="flex gap-6 text-[40px] mt-5">
                <SocialIcon />
              </div>
            </div>
            <div></div>
          </div>
          <Image
            priority
            src="/wave.svg"
            alt="wave"
            fill
            className="object-cover object-bottom"
          />
        </div>

        {/* ----------------------------------------- Profile Box --------------------------------------------- */}
        {/* <div className="bg-white shadow-sm shadow-gray-800 p-6 absolute my-5 rounded-xl">
          <div className="">
            <div className="flex gap-12 justify-center text-black text-center">
              <CardProfile name="Seseorang" departmen="Gol 1" />
              <CardProfile name="Seseorang" departmen="Gol 2" />
              <CardProfile name="Seseorang" departmen="Gol 3" />
            </div>
          </div>
        </div> */}

        {/* --------------------------------------------- About --------------------------------------------------*/}

        <div className="grid grid-cols-5 gap-8 bg-gradient-to-b from-primary-white-500 via-primary-white-350 p-16">
          <div className="col-span-3">
            <div className="flex flex-col space-y-6 justify-center">
              <h3 className="font-bold text-[50px] drop-shadow-xl">About</h3>
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
                href="#"
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

        {/* ----------------------------------------- Departemen Slider ----------------------------------------- */}

        <div id={styles.department}>
          <div>
            <h3 className="text-[40px] font-bold">Departemen Kami</h3>
            <hr className="mt-7 mb-20 border-2 border-black rounded-xl w-1/2 m-auto" />
          </div>
          <div>
            <Image
              src="/logo-DANUS.png"
              alt="departemen"
              width={232}
              height={282}
            />
            <p className="font-bold text-2xl text-center mt-4">Dept Danus</p>
          </div>
        </div>

        {/* ------------------------------------------ Unggulan Section ----------------------------------------- */}

        {/* ---------------------------------------- Testimonial Section ---------------------------------------- */}

        {/* ------------------------------------------- Footer Section ------------------------------------------ */}
        <footer className="relative">
          <Image
            priority
            src="/wave.svg"
            alt="wave"
            fill
            className="object-cover object-bottom"
          />
          <div className="py-40 text-center text-white bg-gradient-radial from-primary-white-700 to-primary-white-250 leading-loose">
            <h3 className="text-[40px]">Penasaran tentang kami ?</h3>
            <h5 className="text-3xl">Kunjungi kami di</h5>
            <p>
              Sekretariat LDF Ash-Shihah, Fakultas Keperawatan, Universitas
              Syiah Kuala
            </p>
            <div className="mt-7">
              <h5 className="text-[38px]">See You All Soon</h5>
              <div className="flex gap-6 justify-center text-[36px] mt-5">
                <SocialIcon />
              </div>
            </div>
          </div>
          <div className="text-center text-white py-4">
            <p className="drop-shadow-sm">
              Copyright &copy; {new Date().getFullYear()} Muhammad Alim Kakani |
              Freelance for Money and Happyness
            </p>
          </div>
        </footer>
      </Layout>
    </>
  );
}
