import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative h-52">
      <Image
        priority
        src="/wave.svg"
        alt="wave"
        fill
        className="object-cover object-bottom"
      />
      <div className="text-center text-white py-4 mt-auto">
        <p className="drop-shadow-md">
          Copyright &copy; {new Date().getFullYear()} Muhammad Alim Kakani |
          Freelance for Money and Happyness
        </p>
      </div>
    </footer>
  );
}
