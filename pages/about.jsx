import CardFlex from "components/About/CardFlex";
import CardFlexCol from "components/About/CardFlexCol";
import Footer from "components/Footer";
import Layout from "components/layout/Layout";
import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Tentang Kami</title>
      </Head>
      <div className="relative flex justify-center items-center h-[45vh] shadow-2xl">
        <Image src={"/img/shihah/LDF-2022-3_sketch.png"} fill alt="top_about_img" className="object-cover object-center -z-10"/>
        <h1 className="text-6xl font-bold text-white drop-shadow-2xl">--- Tentang kami ----</h1>
      </div>
      <div className="mx-60 py-16 space-y-24">

      {/* -------------------------------- Tentang Kami ----------------------------------------- */}
        <CardFlex title="Tentang Kami" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quis asperiores obcaecati qui placeat, provident reiciendis assumenda facilis itaque sequi deserunt impedit maxime ea ipsum quo pariatur optio nemo odit autem. Obcaecati suscipit nisi voluptas, id delectus odio quibusdam reprehenderit repellat dolore minus natus! Repudiandae quas culpa distinctio quo laudantium a aliquid, nesciunt autem veniam vel numquam molestias dolores cupiditate similique fugiat molestiae cumque quae incidunt, sint dicta in quos recusandae ipsam ea. Fugiat praesentium incidunt ratione illo unde facere atque deserunt iusto eveniet ut autem voluptatum consequuntur expedita facilis ea dolor est, labore harum molestias necessitatibus tenetur. Officia, quisquam?" />

      {/* -------------------------------- Visi -------------------------------------------------- */}
        <CardFlexCol textLeft title="Visi Kami" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quis asperiores obcaecati qui placeat, provident reiciendis assumenda facilis itaque sequi deserunt impedit maxime ea ipsum quo pariatur optio nemo odit autem. Obcaecati suscipit nisi voluptas, id delectus odio quibusdam reprehenderit repellat dolore minus natus! Repudiandae quas culpa distinctio quo laudantium a aliquid, nesciunt autem veniam vel numquam molestias dolores cupiditate similique fugiat molestiae cumque quae incidunt, sint dicta in quos recusandae ipsam ea. Fugiat praesentium incidunt ratione illo unde facere atque deserunt iusto eveniet ut autem voluptatum consequuntur expedita facilis ea dolor est, labore harum molestias necessitatibus tenetur. Officia, quisquam?" />

      {/* -------------------------------- Misi -------------------------------------------------- */}
      <CardFlexCol alignLeft textRight title="Misi Kami" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quis asperiores obcaecati qui placeat, provident reiciendis assumenda facilis itaque sequi  deserunt impedit maxime ea ipsum quo pariatur optio nemo odit autem. Obcaecati suscipit nisi voluptas, id delectus odio quibusdam reprehenderit repellat dolore minus natus! Repudiandae quas culpa distinctio quo laudantium a aliquid, nesciunt autem veniam vel numquam molestias dolores cupiditate similique fugiat molestiae cumque quae incidunt, sint dicta in quos recusandae ipsam ea. Fugiat praesentium incidunt ratione illo unde facere atque deserunt iusto eveniet ut autem voluptatum consequuntur expedita facilis ea dolor est, labore harum molestias necessitatibus tenetur. Officia, quisquam?" />

      {/* -------------------------------- Conclusi -------------------------------------------------- */}
      <CardFlexCol hrWidth="40%" width="w-full" title="Intinya Kami Ini" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quis asperiores obcaecati qui placeat, provident reiciendis assumenda facilis itaque sequi deserunt impedit maxime ea ipsum quo pariatur optio nemo odit autem. Obcaecati suscipit nisi voluptas, id delectus odio quibusdam reprehenderit repellat dolore minus natus! Repudiandae quas culpa distinctio quo laudantium a aliquid, nesciunt autem veniam vel numquam molestias dolores cupiditate similique fugiat molestiae cumque quae incidunt, sint dicta in quos recusandae ipsam ea. Fugiat praesentium incidunt ratione illo unde facere atque deserunt iusto eveniet ut autem voluptatum consequuntur expedita facilis ea dolor est, labore harum molestias necessitatibus tenetur. Officia, quisquam?" />
      
      </div>
      <Footer />
    </Layout>
  );
}
