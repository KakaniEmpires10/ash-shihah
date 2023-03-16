import Image from "next/image";
import Link from "next/link";
import style from "../styles/social.module.css";

export default function SocialIcon() {
  return (
    <>
      <Link
        href="https://www.instagram.com/mediashihah/" target="_blank"
      >
        <Image className="drop-shadow-md hover:bg-white/70 rounded-full duration-500 p-3" width={80} height={80} src="/Instagram_flower.png" alt="instagram" />
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCWcw7Fup4FvzkyBvjOP7nIQ" target="_blank"
      >
        <Image className="drop-shadow-md hover:bg-white/70 rounded-full duration-500 p-3" width={80} height={80} src="/Youtube_flower.png" alt="youtube" />
      </Link>
      <Link
        href="https://www.tiktok.com/@mediashihah?_t=8VMq2d7tGQU&_r=1" target="_blank"
      >
        <Image className="drop-shadow-md hover:bg-white/70 rounded-full duration-500 p-3" width={80} height={80} src="/Tiktok_flower.png" alt="tiktok" />
      </Link>
    </>
  );
}
