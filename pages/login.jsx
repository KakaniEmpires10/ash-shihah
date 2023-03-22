import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login Page</title>
        <link rel="shortcut icon" href="/LDF_Favicon.png" type="image/png" />
      </Head>
      <div className="relative">
        <Link
          className="absolute top-5 left-5 h-10 px-5 bg-white/10 hover:bg-primary-dark-150 hover:rounded-xl text-slate-300 hover:text-white text-xl flex justify-center items-center duration-500 z-30"
          href="/"
        >
          <IoHome className="text-[1.3em]" />
          <span className="hidden sm:inline-block ml-4">Go Back to HomePage</span>
        </Link>
        <Image
          className="object-cover object-center"
          fill
          src="/img/shihah/kegiatan-4.png"
          alt="background"
        />
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen">
          <div className="flex flex-col items-center py-16 px-14 bg-white/90 shadow-lg shadow-black rounded-3xl space-y-5">
            <div className="text-black text-center space-y-5">
              <h3 className="text-5xl font-bold">Login</h3>
              <p className="text-base capitalize">
                silahkan login dulu bree &#127773;
              </p>
            </div>
            <div>
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 uppercase tracking-wide font-bold text-xs text-black"
                  >
                    email
                  </label>
                  <input
                    className="w-full text-black bg-transparent border-b-2 border-black rounded-b-2xl"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 uppercase tracking-wide font-bold text-xs text-black"
                  >
                    password
                  </label>
                  <input
                    className="w-full text-black bg-transparent border-b-2 border-black rounded-b-2xl"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
                <small className="block font-semibold capitalize text-black">
                  belum punya akun? Mari Daftar disini{" "}
                  <span className="text-red-600 hover:underline duration-200 font-bold">
                    <Link href="/register">Register !</Link>
                  </span>
                </small>
                <div className="flex justify-between items-center font-bold">
                  <button
                    className="px-7 py-2 border border-black/40 text-lg bg-primary-white-700 rounded-full hover:bg-primary-dark-350 text-white duration-300"
                    type="submit"
                  >
                    Login
                  </button>
                  <Link
                    className="text-primary-white-700 hover:text-primary-dark-150 hover:drop-shadow-md duration-300"
                    href="/"
                  >
                    Forgot Password ?
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <footer className="capitalize text-white mt-10 drop-shadow-lg">
            copyright &copy; {new Date().getFullYear()} Muhammad Alim Kakani |
            made by abal-abal company
          </footer>
        </div>
      </div>
    </>
  );
}
