import Button from '@/components/ui/Button';

export default function ActivityForm() {
  return (
    <form>
      <div className="mb-3">
        <div className="flex items-center space-x-4">
          <div className="flex flex-col mb-4">
            <label htmlFor="new-topic-input" className="text-md font-bold">Activity description</label>
            <input type="text" name="new-topic" className="p-1.5 border border-solid border-sky-600 rounded-md focus-visible:outline-sky-700 focus-visible:outline-2" id="new-topic-input" />
          </div>
          <Button type="submit">
            {/* Nesting JSX, text, or other elements within a component's tags will pass as children props */}
            Add Activity
          </Button>
        </div>
        <div className="text-red-600 mt-1 hidden">
          Please enter a valid activity
        </div>
      </div>
    </form>
  );
}