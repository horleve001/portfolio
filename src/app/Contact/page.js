import Link from "next/link";
export default function Contact() {
  return (
    <div className=" m-15 p-5">
      <h1>Elérhetőség</h1>
      <p>Horváth Levente</p>
      <p>Telefon: +36 30 4057845</p>
      <p>Email:horleve001@gmail.com</p>
      <p>LinkedIn</p>
      <div className="bg-amber-300 hover:bg-blue-800 display: inline-block p-3 text-white">
        <Link href="https://www.linkedin.com/in/levente-horvath-horleve001/">
          <p>Ugrás a LinkedIn profilomra</p>
        </Link>
      </div>
      <p>Github</p>
      <Link
        href="https://github.com/horleve001"
        className="bg-amber-300 hover:bg-blue-800 display: inline-block p-3 text-white"
      >
        <p>Ugrás a Github profilomra</p>
      </Link>
    </div>
  );
}
