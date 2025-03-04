import Link from "next/link";
export default function Contact() {
  return (
    <div className="container">
      <h1>Elérhetőség</h1>
      <p>Horváth Levente</p>
      <p>Telefon: +36 30 4057845</p>
      <p>Email:horleve001@gmail.com</p>
      <p>LinkedIn</p>
      <div className="hover:bg-blue-500 display: inline-block p-3 text-white">
        <Link href="https://www.linkedin.com/in/levente-horvath-horleve001/">
          <p>Ugrás a LinkedIn profilomra</p>
        </Link>
      </div>
      <p>Github</p>
      <Link
        href="https://github.com/horleve001"
        className="hover:bg-blue-500 display: inline-block p-3 text-white"
      >
        <p>Ugrás a Github profilomra</p>
      </Link>
    </div>
  );
}
