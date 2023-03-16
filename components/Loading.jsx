import style from "../styles/loading.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Loading() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setIsLoading(true);
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setIsLoading(false);
      }, 500);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    isLoading && (
      <div id={style.body}>
        <div className={style.container}>
          <div className={style.ring}></div>
          <div className={style.ring}></div>
          <div className={style.ring}></div>
          <p className="text-white dark:text-black">
            Loading
            <span className={style.dots}>.</span>
            <span className={style.dots}>.</span>
            <span className={style.dots}>.</span>
          </p>
        </div>
      </div>
    )
  );
}
