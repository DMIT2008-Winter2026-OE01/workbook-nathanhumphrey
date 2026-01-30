const activities = [
  'Activity 1',
  'Activity 2',
  'Activity 3',
];

// <li className="my-1 pl-1 border-b border-t border-sky-600"></li>

export default function ActivitiesList() {
  return (
    <>
      <h2 className="mt-2 text-xl font-bold">Activities</h2>
      <ul className="topics-list">
        {
          activities.map((a, idx) => <li key={idx} className={`my-1 pl-1 border-b ${idx == 0 ? 'border-t' : ''} border-sky-600`}>{a}</li>)
        }
      </ul>
    </>
  );
}