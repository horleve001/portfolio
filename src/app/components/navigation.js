import Link from "next/link";
import projects from "../projects.json";
import React from "react";

export const Navigation = () => {
  return (
    <nav className="bg-gray-900 text-white flex justify-center fixed top-0 w-full">
      <Link href="/" className="hover:bg-blue-900 p-5 text-2xl">
        Főoldal
      </Link>
      <Link href="/Projekt" className="hover:bg-blue-900 p-5 text-2xl">
        Projektek
      </Link>
      <Link href="/Contact" className="hover:bg-blue-900 p-5 text-2xl">
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
      className="bg-blue-900 p-6 text-white m-5 rounded-3xl inline-block w-4/10 "
    >
      <h2 className="p-3 text-3xl">{project.name}</h2>
      <img
        src={project.img}
        alt={project.name}
        className=" justify-center inline-block p-3"
      ></img>
      <div className="p-3">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="p-3 inline-block bg-blue-700 m-2 rounded-3xl border-3 text-wtite"
          >
            {technology}
          </li>
        ))}
      </div>
      <p className="p-3">
        <Link
          href={`/Projekt/${project.name}`}
          className="p-3 hover:bg-white hover:text-blue-950 rounded-full border-3"
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
