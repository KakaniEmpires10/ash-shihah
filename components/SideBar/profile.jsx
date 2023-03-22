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
    <div
      className="shadow-sm shadow-slate-400 px-10 py-16 rounded-3xl flex items-center flex-col"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.2 )" }}
    >
      <div className="relative flex justify-center items-center">
        <Image
          className="mb-5"
          src={"/img/Shape/ring_2/ringBlue.png"}
          width={130}
          height={130}
          alt="profile"
        />
        <Image
          className="rounded-full shadow-sm absolute  top-8 left-[22px]"
          src={"/profile.png"}
          width={81}
          height={81}
          alt="In-profile"
        />
      </div>
      <div className="text-lg text-center">
        <p>
          <strong>{props.name}</strong>
        </p>
        <small>
          <em>{props.departmen}</em>
        </small>
        <div className="mt-4">
          <p>
            <em>
              &quot;Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Harum excepturi quo obcaecati voluptatum maxime quos quae,
              molestias eos et commodi&quot;
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}

export { SideProfile, TopProfile, CardProfile };
