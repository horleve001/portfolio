import details from "./details";

export default function Home() {
  return (
    <div className=" mt-15 p-5 m-7">
      <h1 className="p-3 text-6xl">Üdvözöllek a honlapomon!</h1>
      <p>
        <img
          className="w-4/10 h-4/10 rounded-full inline-block p-3 float-right"
          src="portre.jpg"
          alt="Horváth Levente"
        />
      </p>
      <p className="p-3 text-lg">{details.about}</p>
      <p className="p-3 text-lg">{details.recruiters}</p>
    </div>
  );
}
