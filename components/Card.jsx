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
    <div className="px-5 py-5 space-y-5 shadow-sm shadow-gray-700 rounded-xl bg-rose-200">
      <h1 className="text-xl">
        <strong>{props.judul}</strong>
      </h1>
      <p>{props.isi}</p>
    </div>
  );
}

export { TrCard, LoCard };
