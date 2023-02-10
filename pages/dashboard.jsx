import Layout from "components/layout/Layout";
import { TrCard, LoCard } from "components/Card";
import Head from "next/head";

export default function Dashboard() {
  return (
    <Layout dashboard>
      <Head>
        <title>Shihah Dashboard</title>
      </Head>
      <div className="space-y-8">
        <div className="flex justify-center gap-5">
          <TrCard
            judul="Azan Reminder"
            isi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, atque!"
            tombol="Mute"
          />
          <TrCard
            judul="Self Reminder"
            isi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo illum necessitatibus nihil quod amet dignissimos vel soluta perferendis labore veritatis accusantium laborum odit, enim beatae ex tempore eum magnam molestias omnis provident. Non quas consequuntur modi laborum blanditiis enim!"
            tombol="See More !"
          />
          <TrCard
            judul="Organize Reminder"
            isi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae illum quisquam odit quis tempore a rerum commodi aspernatur, mollitia maxime placeat consequuntur eos! Facilis at nihil officiis facere iste sequi!"
            tombol="Read More !"
          />
        </div>
        <div>
          <LoCard
            judul="Reminder atasan"
            isi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio libero quas culpa, aspernatur quae dignissimos veritatis eligendi, sapiente eaque dicta! Id sapiente in veritatis tempore aperiam, nobis consequuntur, tenetur labore, accusantium sed nam. Veritatis expedita, sapiente excepturi suscipit animi labore incidunt quod magnam voluptas? Voluptate expedita vero est qui, accusamus doloribus quae suscipit beatae nam atque commodi omnis cumque ut placeat voluptatem sed minima officia enim? Vel minus iure nostrum saepe voluptatibus placeat odit corporis eaque, aspernatur eveniet molestias incidunt totam expedita quidem, qui temporibus quis quae voluptatem officiis sequi asperiores voluptate! Incidunt eaque tempora laboriosam optio velit tempore?"
          />
        </div>
      </div>
    </Layout>
  );
}
