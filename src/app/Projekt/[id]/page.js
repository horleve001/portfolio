import Link from "next/link";
import projects from "../../projects.json";

export default async function Projekt_Template({ params }) {
  const { id } = await params;
  let temp = JSON.stringify(projects);
  temp = JSON.parse(temp);

  let current = temp.projects.find((project) => project.name === id);
  return (
    <div className="m-15 p-5">
      <h1 className="flex p1 White"> {id}</h1>
      <p>Welcome to the projekt page.</p>
      <p>Here you can see my project.</p>
      <img
        src={`../${current.img}`}
        alt={current.name}
        className="mb-6 border-cyan-950 border-10 rounded-2xl"
      />
      <Link
        href={current.link}
        className="p-3 bg-green-500 text-white inline-block float-right rounded-4xl"
      >
        Ugrás a Github repora
      </Link>
    </div>
  );
}
