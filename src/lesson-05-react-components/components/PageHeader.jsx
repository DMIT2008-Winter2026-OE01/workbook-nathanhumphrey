// destructure tagline from props
export default function PageHeader({ tagline }) {
  return (
    // the React fragment shorthand <> </> is used to avoid adding an extra wrapper element
    <>
      <h1 className="text-2xl font-bold">Lesson 05 - React Components</h1>
      {/* conditional render using AND operator */}
      {tagline && <p className="text-xs">{tagline}</p>}
      <hr className="border-2 border-sky-600 mt-2 mb-4" />
    </>
  );
}