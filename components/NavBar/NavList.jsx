import NavMenu from "./NavMenu";

export default function NavList() {
  return (
    <div className="flex items-center gap-2">
      <NavMenu link="/about" title="About" />
      <NavMenu link="/departemen" title="Departemen" />
      <NavMenu link="/anggota" title="Anggota" />
      <NavMenu link="/kegiatan" title="Kegiatan" />
      <NavMenu link="/unggulan" title="Unggulan" />
      <NavMenu link="/login" title="Login" />
      <NavMenu link="/dashboard" title="Dashboard" />
    </div>
  );
}
