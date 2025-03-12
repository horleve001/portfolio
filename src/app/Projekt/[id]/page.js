import Link from "next/link";
import projects from "../../projects.json";

export default async function Projekt_Template({ params }) {
  const { id } = await params;
  let temp = JSON.stringify(projects);
  temp = JSON.parse(temp);
  console.log(id);
  let current = temp.projects.find((project) => encodeURI(project.name) === id);
  return (
    <div className="mt-15 p-5 m-5">
      <h1 className="p-3 text-5xl"> {current.name}</h1>
      <p className="p-2 mt-5 mb-5 text-2xl">{current.description}</p>
      <div className="p-3 text-center">
        <img
          src={`../${current.img}`}
          alt={current.name}
          className="mb-6 border-cyan-950 border-10 rounded-2xl w-2/3 h-2/3 inline-block justify-center"
        />
      </div>
      <p className="p-3 text-2xl">
        Ha érdekel a forrás kód, megtudod tekinteni a Githubon a repositoryban,
        az alábbi linken:
      </p>
      <Link
        href={current.link}
        className="p-3 inline-block float-right border-3 rounded-4xl load-animation"
      >
        Ugrás a Github repora
      </Link>
    </div>
  );
}
