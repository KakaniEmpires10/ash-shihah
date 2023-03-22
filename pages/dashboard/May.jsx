import { ButtonSubmit } from "components/Button";
import Layout from "components/layout/Layout";
import Title from "components/title";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function May() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout dashboard>
      <Head>
        <title>Muttaba&apos;ah Yaumiyyah</title>
      </Head>
      <Title title="MAY" />

      {/* ---------------------------------- Nav Button --------------------------- */}
      <div className="space-y-5">
        <div className="flex space-x-3 text-white">
          <Link
            href="#"
            className="py-2 px-4 bg-primary-dark-150 border border-blue-900 rounded-full hover:text-slate-500 duration-300 hover:bg-primary-white-700"
          >
            Shalat Berjama&apos;ah
          </Link>
          <Link
            href="#"
            className="py-2 px-4 bg-primary-dark-150 border border-blue-900 rounded-full hover:text-slate-500 duration-300 hover:bg-primary-white-700"
          >
            Shalat Rawatib
          </Link>
          <Link
            href="#"
            className="py-2 px-4 bg-primary-dark-150 border border-blue-900 rounded-full hover:text-slate-500 duration-300 hover:bg-primary-white-700"
          >
            Beristighfar
          </Link>
          <Link
            href="#"
            className="py-2 px-4 bg-primary-dark-150 border border-blue-900 rounded-full hover:text-slate-500 duration-300 hover:bg-primary-white-700"
          >
            Tilawah
          </Link>
          <Link
            href="#"
            className="py-2 px-4 bg-primary-dark-150 border border-blue-900 rounded-full hover:text-slate-500 duration-300 hover:bg-primary-white-700"
          >
            Infaq
          </Link>
          <Link
            href="#"
            className="py-2 px-4 bg-primary-dark-150 border border-blue-900 rounded-full hover:text-slate-500 duration-300 hover:bg-primary-white-700"
          >
            Riyadhah
          </Link>
        </div>

        <hr className="border-black border-2 w-1/2" />

        {/* -------------------------------------- form ---------------------------------------------- */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-5">
            <div className="">
              <div className="px-8 py-10 bg-white shadow-sm shadow-gray-500 rounded-xl flex flex-col space-y-5">
                <p className="font-bold text-2xl">Shalat Subuh</p>
                <div className="flex space-x-5">
                  <ButtonSubmit name={<AiOutlineCheck />} />
                  <ButtonSubmit
                    name={<AiOutlineClose />}
                    outline="red-500"
                    text="red-500"
                    bg="red-700"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="px-8 py-10 bg-white shadow-sm shadow-gray-500 rounded-xl flex flex-col space-y-5">
                <p className="font-bold text-2xl">Shalat Zuhur</p>
                <div className="flex space-x-5">
                  <ButtonSubmit name={<AiOutlineCheck />} />
                  <ButtonSubmit
                    name={<AiOutlineClose />}
                    outline="red-500"
                    text="red-500"
                    bg="red-700"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="px-8 py-10 bg-white shadow-sm shadow-gray-500 rounded-xl flex flex-col space-y-5">
                <p className="font-bold text-2xl">Shalat Ashar</p>
                <div className="flex space-x-5">
                  <ButtonSubmit name={<AiOutlineCheck />} />
                  <ButtonSubmit
                    name={<AiOutlineClose />}
                    outline="red-500"
                    text="red-500"
                    bg="red-700"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="px-8 py-10 bg-white shadow-sm shadow-gray-500 rounded-xl flex flex-col space-y-5">
                <p className="font-bold text-2xl">Shalat Maghrib</p>
                <div className="flex space-x-5">
                  <ButtonSubmit name={<AiOutlineCheck />} />
                  <ButtonSubmit
                    name={<AiOutlineClose />}
                    outline={"red-500"}
                    text={"red-500"}
                    bg="red-700"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="px-8 py-10 bg-white shadow-sm shadow-gray-500 rounded-xl flex flex-col space-y-5">
                <p className="font-bold text-2xl">Shalat Isya</p>
                <div className="flex space-x-5">
                  <ButtonSubmit name={<AiOutlineCheck />} />
                  <ButtonSubmit
                    name={<AiOutlineClose />}
                    outline={"red-500"}
                    text={"red-500"}
                    bg="red-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
