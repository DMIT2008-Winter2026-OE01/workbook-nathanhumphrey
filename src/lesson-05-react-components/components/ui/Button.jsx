// children is a special prop in React that allows you to pass
// components, elements, or text between the opening and closing tags of a component
export default function Button({ children, type }) {
  const buttonType = type || 'button';
  return (
    <button type={buttonType} className="mt-2 p-1.5 border border-sky-600 rounded-md bg-sky-600 font-bold text-white hover:bg-sky-700 active:bg-sky-900 focus-visible:outline-sky-700 focus-visible:outline-2">
      {children}
    </button>
  );
}