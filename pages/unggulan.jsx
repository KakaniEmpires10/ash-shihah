import Layout from "components/layout/Layout";
import Head from "next/head";
import Image from "next/image";

export default function Unggulan() {
  return (
    <Layout>
      <Head>
        <title>Kegiatan Unggulan</title>
      </Head>
      <div className="relative flex justify-center items-center h-[45vh] shadow-2xl">
        <Image src={"/img/shihah/LDF-2022-3_sketch.png"} fill alt="top_about_img" className="object-cover object-center -z-10"/>
        <h1 className="text-6xl font-bold text-white drop-shadow-2xl">--- Kegiatan Unggulan kami ----</h1>
      </div>
    </Layout>
  );
}
