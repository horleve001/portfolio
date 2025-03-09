import { Projekt_List } from "../components/navigation";

export default function Projekt() {
  return (
    <div className="mt-15 p-5 m-5">
      <h1 className="text-5xl p-3">Üdvözöllek a Projekt oldalon</h1>
      <p className="text-3xl p-3">
        Az alábbiakban megtudod tekinteni a projektjeimet.
      </p>

      <Projekt_List />
    </div>
  );
}
