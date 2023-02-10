import SideBar from "components/SideBar/SideBar";
import { useEffect, useState } from "react";
import TopBar from "components/SideBar/TopBar";
import SEO from "./seo";
import NavBar from "components/NavBar/NavBar";

export default function Layout({ children, post, dashboard }) {
  const [showNav, setShowNav] = useState(true);
  const [mobile, setMobile] = useState(false);

  function handleSize() {
    if (innerWidth <= 640) {
      setShowNav(false);
      setMobile(true);
    } else {
      setShowNav(true);
      setMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleSize);
    }
    return () => {
      removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <>
      <SEO />
      <header>
        {dashboard ? (
          <>
            <TopBar stats={showNav} />
            <SideBar />
            <main
              className={`transition-all duration-300 ${
                showNav ? "ml-[250px] px-8 pt-24 pb-10" : ""
              }`}
            >
              {children}
            </main>
          </>
        ) : post ? (
          <>
            <p>this is post page</p>
            <main className="pt-8">{children}</main>
          </>
        ) : (
          <>
            <NavBar />
            <main>{children}</main>
          </>
        )}
      </header>
      {/* <footer className="text-center py-3 text-slate-400 w-full absolute bottom-0 font-bold">
        <small>
          Copyright &copy; {new Date().getFullYear()} Muhammad Alim Kakani |
          Freelance for Money and Happyness
        </small>
      </footer> */}
    </>
  );
}
