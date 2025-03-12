import details from "./details";
import Link from "next/link";
import { Projekt_List } from "./components/navigation";

export default function Home() {
  return (
    <div>
      <p className="p-1" id="main"></p>
      <div className=" mt-15 m-5 mb-0 p-5">
        <h1 className="p-3 text-6xl">Üdvözöllek a honlapomon!</h1>
        <p>
          <img
            className="w-4/10 h-4/10 rounded-full inline-block p-7 float-right"
            src="portre.jpg"
            alt="Horváth Levente"
          />
        </p>
        <p className="p-3 text-2xl">{details.about}</p>
        <p className="p-3 text-2xl">{details.recruiters}</p>
      </div>
      <p className="p-1" id="contact"></p>
      <div className="p-5 mt-10 m-5 mb-0">
        <h1 className="p-3 text-4xl">Elérhetőségeim:</h1>
        <div className="p-3 inline-block">
          <p className="p-2 text-2xl">Horváth Levente</p>
          <p className="p-2 text-2xl">Telefon: +36 30 4057845</p>
          <p className="p-2 text-2xl">Email: horleve001@gmail.com</p>
        </div>
        <div className="p-3 inline-block text-left">
          <p className="p-2 text-2xl">LinkedIn</p>
          <Link
            href="https://www.linkedin.com/in/levente-horvath-horleve001/"
            className="inline-block p-2 border-3 rounded-full load-animation"
          >
            Ugrás a LinkedIn profilomra
          </Link>
          <p className="p-2 text-2xl">Github</p>
          <Link
            href="https://github.com/horleve001"
            className="inline-block p-2 border-3 rounded-full load-animation"
          >
            Ugrás a Github profilomra
          </Link>
        </div>
      </div>
      <p className="p-1" id="projects"></p>
      <div className="mt-10 p-5 m-5">
        <h1 className="text-4xl p-3">Projekjeim mellyeken dolgoztam</h1>
        <p className="text-3xl p-3">
          Az alábbiakban megtudod tekinteni a projektjeimet.
        </p>

        <Projekt_List />
      </div>
    </div>
  );
}
