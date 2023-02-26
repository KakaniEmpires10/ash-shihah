import { Tanggal } from "components/DateTime";
import Layout from "components/layout/Layout";
import Title from "components/title";
import Head from "next/head";

export default function Event() {
  return (
    <Layout dashboard>
      <Head>
        <title>Event Reminder</title>
      </Head>
      <Title title="Event" />
      <div className="space-y-4">
        <div className="bg-white shadow-sm shadow-slate-500 rounded-xl p-8">
          <div>
            <h1 className="font-bold text-xl drop-shadow-xl">
              Kegiatan Hari ini
            </h1>
            <hr className="w-1/12 my-3 border border-zinc-800" />
            <small className="text-gray-500">
              <Tanggal />
            </small>
            <div className="mt-4 py-2">
              <ul className="list-disc list-item ml-[14px] space-y-2 font-bold">
                <li>Subuh</li>
                <li>Zuhur</li>
                <li>Ashar</li>
                <li>Maghrib</li>
                <li>Isya</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-sm shadow-slate-500 rounded-xl p-8">
          <div>
            <h1 className="font-bold text-xl drop-shadow-xl">
              Kegiatan Lainnya
            </h1>
            <hr className="w-1/12 my-3 border border-zinc-800" />
            <small className="text-gray-500">
              <strong>Any Time</strong>
            </small>
            <div className="mt-4 py-2">
              <ul className="list-disc list-item ml-[14px] space-y-2 font-bold">
                <li>Subuh</li>
                <li>Zuhur</li>
                <li>Ashar</li>
                <li>Maghrib</li>
                <li>Isya</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
