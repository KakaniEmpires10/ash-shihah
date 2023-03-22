import NavList from "./NavList";
import NavBrand from "./NavBrand";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <>
      <div className={`${router.pathname === "/" ? "bg-transparent fixed" : "bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 relative shadow-sm shadow-slate-700"} top-0 w-full px-10 py-4 z-50`}>
        <div className="flex justify-between items-center">
          <NavBrand />
          <NavList />
        </div>
      </div>
    </>
  );
}
