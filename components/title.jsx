export default function Title(props) {
  return (
    <div className="space-y-5">
      <h1 className="text-center text-[40px] font-bold">{props.title}</h1>
      <hr className="mx-auto border border-black w-[7%]" />
      <hr className="mx-auto border border-black w-[3%]" />
      <br />
    </div>
  );
}
