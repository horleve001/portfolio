import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="navBar">
      <li className="link">
        <Link href="/" className="hover:bg-blue-800 p-5">
          Főoldal
        </Link>
      </li>
      <li className="link">
        <Link href="/Projekt" className="hover:bg-blue-800 p-5">
          Projektek
        </Link>
      </li>
      <li className="link">
        <Link href="/Contact" className="hover:bg-blue-800 p-5">
          Elérhetőség
        </Link>
      </li>
    </nav>
  );
};
export const Projekt_List = () => {
  return (
    <nav>
      <li className="link">
        <Link href="/Projekt/1">
          <p className="hover:bg-black p-3">Projekt 1</p>
        </Link>
      </li>
      <li className="link">
        <Link href="/Projekt/2">
          <p className="hover:bg-black p-3">Projekt 2</p>
        </Link>
      </li>
      <li className="link">
        <Link href="/Projekt/3">
          <p className="hover:bg-black p-3">Projekt 3</p>
        </Link>
      </li>
    </nav>
  );
};
