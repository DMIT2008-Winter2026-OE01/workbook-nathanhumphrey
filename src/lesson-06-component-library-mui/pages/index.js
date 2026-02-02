import AstronautList from '@/components/AstronautList';
import data from '@/data/astronauts.json';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="my-4 text-2xl font-bold text-sky-600">Lesson 06 - Intro to Component Libraries: MUI</h1>
      <hr className="my-4 border-sky-600 border-2" />
      <AstronautList astronauts={data.astronauts} />
    </div>
  );
}
