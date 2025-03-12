"use client";
import Link from "next/link";
import projects from "../projects.json";
import React from "react";
import { usePathname } from "next/navigation";

const Nav_list = () => {
  const pathname = usePathname();
  if (pathname === "/") {
    return ["#main", "#contact", "#projects"];
  }
  return ["/#main", "/#contact", "/#projects"];
};
export const Navigation = () => {
  const where = Nav_list();
  return (
    <nav className="bg-gray-900 text-white flex justify-center fixed top-0 w-full z-10">
      <Link href={where[0]} className="underline-animation p-3 text-2xl">
        Főoldal
      </Link>
      <Link
        href={where[1]}
        scroll={true}
        className="underline-animation p-3 text-2xl"
      >
        Elérhetőség
      </Link>
      <Link href={where[2]} className="underline-animation p-3 text-2xl">
        Projektek
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
      className="bg-blue-900 p-6 text-white m-5 rounded-2xl inline-block w-5/11"
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
            className="p-3 inline-block bg-blue-700 m-2 rounded-2xl border-3 text-wtite"
          >
            {technology}
          </li>
        ))}
      </div>
      <p className="p-3">
        <Link
          href={`/Projekt/${project.name}`}
          className="load-animation p-3 rounded-full border-3"
        >
          Ugrás a projekt oldalra
        </Link>
      </p>
    </div>
  ));

  return (
    <div className="text-center">
      <ul className="w-1/5 inline">{projekt_list}</ul>
    </div>
  );
};
