import AstronautCard from './AstronautCard';

export default function AstronautList({ astronauts }) {
  return (
    <>
      <h2 className="text-xl font-semibold text-sky-600 mb-4">Canadian Astronauts</h2>
      <ul className="list-group">
        {astronauts.map((astronaut) => (
          <AstronautCard
            key={astronaut.id}
            astronaut={astronaut}
          />
        ))}
      </ul>
    </>
  );
}