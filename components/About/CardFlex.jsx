import Image from "next/image";

export default function CardFlex(props) {
  return (
    <div className="relative bg-white/70 px-10 py-5 shadow-md rounded-2xl flex items-center">
      <div className="mr-16">
        <Image src={props.img} alt="about_img" />
      </div>
      <div className="space-y-3">
        <div>
          <h2 className="text-3xl font-bold">{props.title}</h2>
          <br />
          <hr width="50%" className="border border-black" />
        </div>
        <p className="text-justify">
          {props.text}
        </p>
      </div>
    </div>
  );
}
