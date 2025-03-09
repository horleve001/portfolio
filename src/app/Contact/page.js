import Link from "next/link";
export default function Contact() {
  return (
    <div className=" mt-15 p-5 m-7 flex justify-center">
      <div className="w-4/5 text-center p-5 inline">
        <h1 className="text-5xl text-center">Elérhetőség</h1>
        <p className="p-3 text-2xl">
          Az alábbi elérhetőségeken keresztül bármikor elérhetsz, ha kérdésed
          van. Illetve a gombokra kattintva megtudod tekinetni a LinkedIn és a
          Github profilomat is.
        </p>
        <div className="p-3 inline-block text-left m-5">
          <p className="p-2 text-2xl">Horváth Levente</p>
          <p className="p-2 text-2xl">Telefon: +36 30 4057845</p>
          <p className="p-2 text-2xl">Email: horleve001@gmail.com</p>
        </div>
        <div className="p-3 inline-block text-left m-5">
          <p className="p-2 text-2xl">LinkedIn</p>
          <Link
            href="https://www.linkedin.com/in/levente-horvath-horleve001/"
            className="inline-block p-2 border-3 rounded-full hover:bg-white hover:text-blue-800"
          >
            Ugrás a LinkedIn profilomra
          </Link>
          <p className="p-2 text-2xl">Github</p>
          <Link
            href="https://github.com/horleve001"
            className="inline-block p-2 border-3 rounded-full hover:bg-white hover:text-blue-800"
          >
            Ugrás a Github profilomra
          </Link>
        </div>
      </div>
    </div>
  );
}
