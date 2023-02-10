import Link from "next/link";
import style from "../styles/social.module.css";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

export default function SocialIcon() {
  return (
    <>
      <Link
        className={style.faInstagram}
        href="https://www.instagram.com/mediashihah/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </Link>
      <Link
        className={style.faYoutube}
        href="https://www.youtube.com/channel/UCWcw7Fup4FvzkyBvjOP7nIQ"
        target="_blank"
        rel="noreferrer"
      >
        <BsYoutube />
      </Link>
      <Link
        className={style.faTiktok}
        href="https://www.tiktok.com/@mediashihah?_t=8VMq2d7tGQU&_r=1"
        target="_blank"
        rel="noreferrer"
      >
        <FaTiktok />
      </Link>
    </>
  );
}
