import { Projekt_List } from "../components/navigation";

export default function Projekt() {
  return (
    <div className="mt-15 p-5 m-5">
      <h1>Welcome to the projekt page.</h1>
      <p>Here you can see my projects.</p>

      <Projekt_List />
    </div>
  );
}
