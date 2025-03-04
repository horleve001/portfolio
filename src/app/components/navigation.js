import Link from "next/link";
import projects from "../projects.json";
import React from "react";

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
  let temp = JSON.stringify(projects);
  temp = JSON.parse(temp);
  const projekt_list = temp.projects.map((project) => (
    <div
      key={project.name}
      className="bg-amber-300 inline-block p-8 text-white m-5 rounded-lg"
    >
      <h2 className="p-2 text-3xl">{project.name}</h2>
      <img src={project.img} alt={project.name} className="w-96 h-96 p-3"></img>
      <p className="p-2">{project.description}</p>
      <p>
        <Link
          href={`/Projekt/${project.name}`}
          className="hover:bg-blue-800 inline-block p-3"
        >
          Ugrás a projekt oldalra
        </Link>
      </p>
    </div>
  ));

  return (
    <div className="text-center m-10">
      <ul className="inline-block">{projekt_list}</ul>
    </div>
  );
};
