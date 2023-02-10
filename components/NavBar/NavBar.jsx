import Image from "next/legacy/image";
import NavList from "./NavList";
import { Cormorant_Garamond } from "@next/font/google";
import Link from "next/link";

const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "300", "500", "600", "700"],
});

export default function NavBar() {
  return (
    <>
      <div className="relative bg-gradient-to-br from-primary-dark-200 via-primary-dark-50 to-primary-dark-150 top-0 w-full shadow-sm shadow-cyan-900 px-5 py-2">
        <div className="flex justify-between items-center">
          <Link className="cursor-pointer" href="/">
            <Image
              className="float-left"
              src={"/logo-ldf.png"}
              width={45}
              height={50}
              alt="logo"
            />
            <div
              className={`float-right text-white ${cormorant_garamond.className} ml-2 tracking-wider`}
            >
              <p className="text-xl">
                <strong>LDF Ash-shihah</strong>
              </p>
              <small>
                <em>Universitas Syiah Kuala</em>
              </small>
            </div>
          </Link>
          <NavList />
        </div>
      </div>
    </>
  );
}
