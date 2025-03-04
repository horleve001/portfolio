import details from "./details";

export default function Home() {
  return (
    <div className=" mt-15 p-5 m-7">
      <h1 className="text-center">Üdvözöllek a honlapomon!</h1>
      <p>
        <img
          className="w-4/10 h-4/10 rounded-full inline-block p-3 float-right"
          src="bonobo.jpg"
          alt="Horváth Levente"
        />
      </p>
      <p className="p-3">{details.about}</p>
      <p className="p-3">{details.recruiters}</p>
    </div>
  );
}
