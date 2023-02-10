import Layout from "components/layout/Layout";
import Head from "next/head";

export default function Note() {
  return (
    <Layout dashboard>
      <Head>
        <title>Catatan</title>
      </Head>
      <div>note</div>
    </Layout>
  );
}
