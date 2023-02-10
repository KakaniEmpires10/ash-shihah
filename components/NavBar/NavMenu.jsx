import Link from "next/link";

export default function NavMenu(props) {
  return (
    <div>
      <Link
        href={props.link}
        className="text-white rounded-b-xl hover:border-b-2 hover:border-white px-5 py-4 transition-all duration-150 ease-in font-bold"
      >
        {props.title}
      </Link>
    </div>
  );
}
