import Link from "next/link";

export default function SideMenu(props) {
  return (
    <Link
      href={props.link}
      className="text-white hover:bg-blue-500 hover:text-slate-300 hover:rounded-tl-xl hover:rounded-br-xl relative active:bg-blue-300 focus:bg-blue-500 focus:rounded-xl transition-all duration-200 py-5 pl-2 hover:before:border-2 hover:before:border-white hover:before:left-0 hover:before:top-[10%] hover:before:absolute hover:before:h-[80%] hover:before:transition-all hover:before:duration-200 hover:before:rounded-tl-full hover:before:rounded-bl-full focus:before:border-white focus:before:border-2 focus:before:left-0 focus:before:top-[10%] focus:before:rounded-tl-full focus:before:rounded-bl-full focus:before:absolute focus:before:h-[80%]"
    >
      <div className="flex items-center space-x-4">
        <p className="text-2xl">{props.icon}</p>
        <p>{props.menu}</p>
      </div>
    </Link>
  );
}
