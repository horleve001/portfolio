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
      className="bg-amber-300 p-8 text-white m-10 rounded-lg inline-block w-1/3"
    >
      <h2 className="p-2 text-3xl">{project.name}</h2>
      <img
        src={project.img}
        alt={project.name}
        className=" p-3 justify-center inline-block"
      ></img>
      <p className="p-2">{project.description}</p>
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
    <div className="text-center m-10">
      <ul className="w-1/4 inline">{projekt_list}</ul>
    </div>
  );
};
