import { RiAddFill } from "react-icons/ri";

function TrCard(props) {
  const deskripsi = props.isi;
  const hasil = deskripsi.substring(0, 80) + "...";

  return (
    <div className="px-4 py-4 space-y-5 shadow-sm shadow-gray-700 rounded-xl bg-lime-100">
      <h1>
        <strong>{props.judul}</strong>
      </h1>
      <p>{hasil}</p>
      <button className="py-2 px-5 bg-blue-500 text-white hover:bg-blue-700 duration-200 rounded-full focus:ring-4 focus:ring-blue-300">
        {props.tombol}
      </button>
    </div>
  );
}

function LoCard(props) {
  return (
    <div className="p-5 space-y-5 shadow-sm shadow-gray-700 rounded-xl bg-rose-200">
      <h1 className="text-xl">
        <strong>{props.judul}</strong>
      </h1>
      <p>{props.isi}</p>
    </div>
  );
}

function AddCard(props) {
  return (
    <div className="py-10 px-14 bg-white rounded-xl shadow-md">
      <form action="#">
        <div className="space-y-5 flex flex-col">
          <label htmlFor="catatan">{props.label}</label>
          <input id="catatan" type="text" placeholder="Ketikkan Sesuatu..." />
        </div>
        <button
          className="p-2 rounded-full bg-primary-white-550 text-white hover:bg-primary-dark-150 focus:ring-2 focus:ring-blue-500"
          type="submit"
          value="submit"
        >
          <RiAddFill />
        </button>
      </form>
    </div>
  );
}

export { TrCard, LoCard, AddCard };
