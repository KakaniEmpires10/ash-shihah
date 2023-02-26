import { ButtonSubmit } from "components/Button";
import Layout from "components/layout/Layout";
import Title from "components/title";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function May() {
  return (
    <Layout dashboard>
      <Head>
        <title>Muttaba&apos;ah Yaumiyyah</title>
      </Head>
      <Title title="MAY" />
      <div className="space-y-5">
        <div className="flex space-x-3">
          <Link
            href="#"
            className="py-2 px-4 bg-primary-white-700 border border-blue-900 rounded-full"
          >
            Shalat Berjama&apos;ah
          </Link>
          <Link
            href="#"
            className="py-2 px-4 bg-primary-white-700 border border-blue-900 rounded-full"
          >
            Shalat Rawatib
          </Link>
          <Link
            href="#"
            className="py-2 px-4 bg-primary-white-700 border border-blue-900 rounded-full"
          >
            Beristighfar
          </Link>
          <Link
            href="#"
            className="py-2 px-4 bg-primary-white-700 border border-blue-900 rounded-full"
          >
            Tilawah
          </Link>
          <Link
            href="#"
            className="py-2 px-4 bg-primary-white-700 border border-blue-900 rounded-full"
          >
            Infaq
          </Link>
          <Link
            href="#"
            className="py-2 px-4 bg-primary-white-700 border border-blue-900 rounded-full"
          >
            Riyadhah
          </Link>
        </div>
        <form action="">
          <div className="px-8 py-10 bg-white shadow-sm shadow-gray-500 rounded-xl flex flex-col space-y-5">
            <p className="font-bold text-2xl">Shalat Berjama&apos;ah</p>
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
        </form>
      </div>
    </Layout>
  );
}
