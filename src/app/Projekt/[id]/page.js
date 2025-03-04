import Link from "next/link";
import projects from "../../projects.json";

export default async function Projekt_Template({ params }) {
  const { id } = await params;
  let temp = JSON.stringify(projects);
  temp = JSON.parse(temp);

  let current = temp.projects.find((project) => project.name === id);
  return (
    <div className="container">
      <h1 className="flex p1 White"> {id}</h1>
      <p>Welcome to the projekt page.</p>
      <p>Here you can see my project.</p>
      <img
        src={`../${current.img}`}
        alt={current.name}
        className="w-96 h-96 p-3"
      />
      <Link href={current.link}>ddd</Link>
    </div>
  );
}
