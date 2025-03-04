import Link from "next/link";
export default async function Projekt_Template({ params }) {
  const { id } = await params;
  return (
    <div className="container">
      <h1 className="flex p1 White"> {id}</h1>
      <p>Welcome to the projekt page.</p>
      <p>Here you can see my projects.</p>
      <img src="../1937.png" alt="Horváth Levente" className="myself" />
      <Link href="https://www.facebook.com/">ddd</Link>
    </div>
  );
}
