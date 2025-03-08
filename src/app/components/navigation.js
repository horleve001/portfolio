import Link from "next/link";
import projects from "../projects.json";
import React from "react";

export const Navigation = () => {
  return (
    <nav className="bg-gray-900 text-white flex justify-center fixed top-0 w-full">
      <Link href="/" className="hover:bg-blue-800 p-5 text-2xl">
        Főoldal
      </Link>
      <Link href="/Projekt" className="hover:bg-blue-800 p-5 text-2xl">
        Projektek
      </Link>
      <Link href="/Contact" className="hover:bg-blue-800 p-5 text-2xl">
        Elérhetőség
      </Link>
    </nav>
  );
};
export const Projekt_List = () => {
  let temp = JSON.stringify(projects);
  temp = JSON.parse(temp);
  const projekt_list = temp.projects.map((project) => (
    <div
      key={project.name}
      className="bg-amber-300 p-6 text-white m-5 rounded-lg inline-block w-4/10"
    >
      <h2 className="p-2 text-3xl">{project.name}</h2>
      <img
        src={project.img}
        alt={project.name}
        className=" p-3 justify-center inline-block"
      ></img>
      {project.technologies.map((technology) => (
        <li
          key={technology}
          className="p-3 inline-block bg-amber-700 m-1 rounded-2xl"
        >
          {technology}
        </li>
      ))}
      <p>
        <Link
          href={`/Projekt/${project.name}`}
          className="hover:bg-blue-800 p-3"
        >
          Ugrás a projekt oldalra
        </Link>
      </p>
    </div>
  ));

  return (
    <div className="text-center">
      <ul className="w-1/4 inline ">{projekt_list}</ul>
    </div>
  );
};
