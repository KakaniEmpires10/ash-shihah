import Image from "next/image";

function SideProfile(props) {
  return (
    <div className="text-center">
      <Image
        className="rounded-full border-2 border-blue-500 relative left-11 shadow-sm shadow-blue-400"
        src={"/profile.png"}
        width={60}
        height={60}
        alt="profile"
      />
      <div className="text-lg">
        <p>
          <strong>{props.name}</strong>
        </p>
        <small>
          <em>{props.departmen}</em>
        </small>
      </div>
    </div>
  );
}

function TopProfile(props) {
  return (
    <div className="flex items-center text-xs">
      <div>
        <p>
          <strong>{props.name}</strong>
        </p>
        <small>
          <em>{props.departmen}</em>
        </small>
      </div>
      <Image
        className="rounded-full ml-4 shadow shadow-gray-400"
        src={"/profile.png"}
        width={36}
        height={36}
        alt="Profile"
      />
    </div>
  );
}

function CardProfile(props) {
  return (
    <div className="shadow-sm shadow-slate-400 bg-gradient-to-br from-sky-400 via-sky-100 to-sky-300 p-7 rounded-b-3xl">
      <Image
        className="rounded-full border-4 border-sky-500 shadow-sm shadow-sky-300 relative left-4"
        src={"/profile.png"}
        width={60}
        height={60}
        alt="profile"
      />
      <div className="text-center text-lg">
        <p>
          <strong>{props.name}</strong>
        </p>
        <small>
          <em>{props.departmen}</em>
        </small>
      </div>
    </div>
  );
}

export { SideProfile, TopProfile, CardProfile };
