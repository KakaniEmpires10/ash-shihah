import SideMenu from "./SideMenu";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { MdAnnouncement } from "react-icons/md";
import { AiFillAlert } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiBookmarklet } from "react-icons/gi";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { BiLogOutCircle } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";

export default function SideList() {
  return (
    <div className="flex flex-col text-xl font-bold">
      <SideMenu link="/dashboard" icon={<MdDashboard />} menu="Beranda" />
      <SideMenu
        link="/dashboard/event"
        icon={<BsFillCalendar2EventFill />}
        menu="Event"
      />
      <SideMenu
        link="/dashboard/May"
        icon={<BsBookmarkCheckFill />}
        menu="MAY"
      />
      <SideMenu link="/dashboard/note" icon={<GiNotebook />} menu="Note" />
      <SideMenu
        link="/dashboard/Alert"
        icon={<MdAnnouncement />}
        menu="Alert"
      />
      <SideMenu
        link="/dashboard/pengumuman"
        icon={<AiFillAlert />}
        menu="Pengumuman"
      />
      <SideMenu
        link="/dashboard/anggota"
        icon={<BsFillPeopleFill />}
        menu="Anggota"
      />
      <SideMenu link="#" icon={<GiBookmarklet />} menu="Catatan Pendahulu" />
      <SideMenu
        link="/dashboard/suhu"
        icon={<IoPeopleCircleOutline />}
        menu="List Para Suhu"
      />
      <SideMenu link="#" icon={<BiLogOutCircle />} menu="Log Out" />
    </div>
  );
}
