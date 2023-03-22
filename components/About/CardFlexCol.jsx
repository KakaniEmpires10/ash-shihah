import Image from "next/image";

export default function CardFlexCol(props) {
  return (
    <div className={`relative bg-white/70 px-10 py-10 shadow-md rounded-2xl flex items-center flex-col ${props.width ? props.width : "w-3/4"} ${props.alignLeft && "ml-auto"}`}>
      <div className="absolute -top-16">
        <Image className="rounded-full border-2 border-black" width={90} height={90} src={"/profile.png"} alt="about_img" />
      </div>
      <div className="space-y-3 text-center">
        <div>
          <h2 className="text-3xl font-bold">{props.title}</h2>
          <br />
          <hr width={props.hrWidth ? props.hrWidth : "30%"} className="border border-black mx-auto" />
        </div>
        <p className={`${props.textLeft && "text-left"} ${props.textRight && "text-right"}`}>
          {props.text}
        </p>
      </div>
    </div>
  );
}
