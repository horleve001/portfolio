import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="navBar">
      <ul>
        <li className="link">
          <Link href="/">Főoldal</Link>
        </li>
        <li className="link">
          <Link href="/Projekt">Projektek</Link>
        </li>
        <li className="link">
          <Link href="/Contact">Elérhetőség</Link>
        </li>
      </ul>
    </nav>
  );
};
export const Projekt_List = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/Projekt/1">Projekt 1</Link>
        </li>
        <li>
          <Link href="/Projekt/2">Projekt 2</Link>
        </li>
        <li>
          <Link href="/Projekt/3">Projekt 3</Link>
        </li>
      </ul>
    </nav>
  );
};
