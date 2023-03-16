import Link from "next/link";
import Image from "next/image";
import { Cormorant_Garamond } from "@next/font/google";

const cormorant_garamond = Cormorant_Garamond({
    subsets: ["latin"],
    style: ["normal", "italic"],
    weight: ["400", "300", "500", "600", "700"],
  });

export default function NavBrand() {
  return (
    <>
      <Link className="cursor-pointer" href="/">
        <Image
          className="float-left"
          src={"/logo-ldf.png"}
          width={45}
          height={50}
          alt="logo"
        />
        <div
          className={`float-right text-white ${cormorant_garamond.className} ml-2 tracking-wider hidden sm:block`}
        >
          <p className="text-xl">
            <strong>LDF Ash-shihah</strong>
          </p>
          <small>
            <em>Universitas Syiah Kuala</em>
          </small>
        </div>
      </Link>
    </>
  );
}
