import NavList from "./NavList";
import NavBrand from "./NavBrand";

export default function NavBar() {
  return (
    <>
      <div className="fixed bg-trasparent top-0 w-full px-10 py-4 z-50">
        <div className="flex justify-between items-center">
          <NavBrand />
          <NavList />
        </div>
      </div>
    </>
  );
}
