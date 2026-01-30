export default function PageHeader({ tagline }) {
  console.log(tagline);
  return (
    <>
      <h1 className="text-2xl font-bold">Lesson 05 - React Components</h1>
      {/* conditional render using AND */}
      {tagline && <p className="text-xs">{tagline}</p>}
      <hr className="border-2 border-sky-600 mt-2 mb-4" />
    </>
  );
}