// a list of activities to render
const activities = [
  'Activity 1',
  'Activity 2',
  'Activity 3',
];

// list item structure (NOTE: border-t should only be used on the first item)
// <li className="my-1 pl-1 border-b border-t border-sky-600"></li>

export default function ActivitiesList() {
  return (
    <>
      <h2 className="mt-2 text-xl font-bold">Activities</h2>
      <ul className="topics-list">
        {
          // Array.map() is used to create new array of components from the array of activities
          // Note, an expression containing a template literal is used to conditionally add the border-t class only to the first item
          // For this example, since eadch activity is just a string, the index is used as the key prop
          activities.map((activity, idx) =>
            <li
              key={idx}
              className={`my-1 pl-1 border-b ${idx == 0 ? 'border-t' : ''} border-sky-600`}>
              {activity}
            </li>
          )
        }
      </ul>
    </>
  );
}