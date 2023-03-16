import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { AiOutlineLogin } from "react-icons/ai";

export default function Login() {
  return (
    <>
      <Head>
        <title>Register Page</title>
        <link rel="shortcut icon" href="/LDF_Favicon.png" type="image/png" />
      </Head>
      <div className="relative">
        <Link
          className="absolute top-5 left-5 h-10 px-5 bg-white/10 hover:bg-primary-dark-150 hover:rounded-xl text-slate-300 hover:text-white text-xl flex justify-center items-center duration-500 z-30"
          href="/"
        >
          <IoHome className="text-[1.3em]" />
          <span className="ml-4 hidden lg:inline-block">Go Back to HomePage</span>
        </Link>
        <Link
          className="absolute top-5 right-5 h-10 px-5 bg-white/10 hover:bg-primary-dark-150 hover:rounded-xl text-slate-300 hover:text-white text-xl flex justify-center items-center duration-500 z-30"
          href="/login"
        >
          <span className="mr-4 hidden lg:inline-block">Go on to LoginPage</span>
          <AiOutlineLogin className="text-[1.3em]" />
        </Link>
        <Image
          className="object-cover object-center"
          fill
          src="/img/shihah/kegiatan-3.png"
          alt="background"
        />
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen">
          <div className="flex flex-col items-center py-10 px-12 bg-black/70 shadow-lg shadow-white rounded-3xl space-y-5 lg:mt-24">
            <div className="text-white text-center space-y-5">
              <h3 className="text-5xl font-bold">Register</h3>
              <p className="text-base capitalize">
                silahkan mendaftar dulu guyss &#9996;
              </p>
            </div>
            <div>
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="namaLengkap"
                    className="block mb-2 uppercase tracking-wide font-bold text-xs text-white"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    className="w-full text-white bg-transparent border-b-2 border-white rounded-b-2xl"
                    type="text"
                    name="namaLengkap"
                    id="namaLengkap"
                  />
                </div>
                <div>
                  <label
                    htmlFor="namaPanggilan"
                    className="block mb-2 uppercase tracking-wide font-bold text-xs text-white"
                  >
                    Nama Panggilan
                  </label>
                  <input
                    className="w-full text-white bg-transparent border-b-2 border-white rounded-b-2xl"
                    type="text"
                    name="namaPanggilan"
                    id="namaPanggilan"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 uppercase tracking-wide font-bold text-xs text-white"
                  >
                    Email
                  </label>
                  <input
                    className="w-full text-white bg-transparent border-b-2 border-white rounded-b-2xl"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 uppercase tracking-wide font-bold text-xs text-white"
                  >
                    Password
                  </label>
                  <input
                    className="w-full text-white bg-transparent border-b-2 border-white rounded-b-2xl"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmPass"
                    className="block mb-2 uppercase tracking-wide font-bold text-xs text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="w-full text-white bg-transparent border-b-2 border-white rounded-b-2xl"
                    type="password"
                    name="confirmPass"
                    id="confirmPass"
                  />
                </div>
                <small className="block font-semibold capitalize text-white">
                  sudah punya akun? Mari lanjut ke sini{" "}
                  <span className="text-primary-dark-50 hover:underline duration-200 font-bold">
                    <Link href="/login">Login !</Link>
                  </span>
                </small>
                <div className="flex justify-center items-center font-bold">
                  <button
                    className="px-7 py-2 text-lg bg-primary-white-700 rounded-full hover:bg-primary-dark-350 text-white duration-300"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
          <footer className="capitalize text-white my-10 drop-shadow-lg">
            copyright &copy; {new Date().getFullYear()} Muhammad Alim Kakani |
            made by abal-abal company
          </footer>
        </div>
      </div>
    </>
  );
}
