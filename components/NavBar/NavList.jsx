import NavMenu from "./NavMenu";

export default function NavList() {
  return (
    <div className="flex items-center gap-2">
      <NavMenu link="#" title="About" />
      <NavMenu link="#" title="Departemen" />
      <NavMenu link="#" title="Anggota" />
      <NavMenu link="#" title="Kegiatan" />
      <NavMenu link="#" title="Unggulan" />
      <NavMenu link="/login" title="Login" />
      <NavMenu link="/dashboard" title="Dashboard" />
    </div>
  );
}
