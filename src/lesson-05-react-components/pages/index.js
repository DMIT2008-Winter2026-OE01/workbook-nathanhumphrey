export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <h1 className="text-2xl font-bold">Lesson 05 - React Components</h1>
      <hr className="border-2 border-sky-600 mt-2 mb-4" />
      <form>
        <div className="mb-3">
          <div className="flex items-center space-x-4">
            <div className="flex flex-col mb-4">
              <label htmlFor="new-topic-input" className="text-md font-bold">Activity description</label>
              <input type="text" name="new-topic" className="p-1.5 border border-solid border-sky-600 rounded-md focus-visible:outline-sky-700 focus-visible:outline-2" id="new-topic-input" />
            </div>
            <button type="submit" className="mt-2 p-1.5 border border-sky-600 rounded-md bg-sky-600 font-bold text-white hover:bg-sky-700 active:bg-sky-900 focus-visible:outline-sky-700 focus-visible:outline-2">
              Add Actvitiy
            </button>
          </div>
          <div className="text-red-600 mt-1 hidden">
            Please enter a valid activity
          </div>
        </div>
      </form>
      <h2 className="mt-2 text-xl font-bold">Activities</h2>
      <ul className="topics-list">
        <li className="my-1 pl-1 border-b border-t border-sky-600">Actitivity 1</li>
        <li className="my-1 pl-1 border-b border-sky-600">Actitivity 2</li>
        <li className="my-1 pl-1 border-b border-sky-600">Actitivity 3</li>
      </ul>
    </div>
  );
}
