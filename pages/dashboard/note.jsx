import { AddCard } from "components/Card";
import Layout from "components/layout/Layout";
import Title from "components/title";
import Head from "next/head";

export default function Note() {
  return (
    <Layout dashboard>
      <Head>
        <title>Catatan</title>
      </Head>
      <Title title="Catatan" />
      <div className="space-y-4">
        <div className="flex justify-center">
          <AddCard label="Tambah Catatan" />
        </div>
      </div>
    </Layout>
  );
}
