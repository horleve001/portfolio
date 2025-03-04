import Link from "next/link";
export default function Contact() {
  return (
    <div className="container">
      <h1>Elérhetőség</h1>
      <p>Horváth Levente</p>
      <p>Telefon: +36 30 4057845</p>
      <p>Email:horleve001@gmail.com</p>
      <p>LinkedIn</p>
      <Link href="https://www.linkedin.com/in/levente-horvath-horleve001/">
        Ugrás a LinkedIn profilomra
      </Link>
      <p>Github</p>
      <Link href="https://github.com/horleve001">
        Ugrás a Github profilomra
      </Link>
    </div>
  );
}
