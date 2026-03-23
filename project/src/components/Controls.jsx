export default function Controls({ generateObject, onStart, isRunning }) {
  return (
    <div className="flex flex-col md:flex-row gap-3 mt-4">
      <button
        onClick={onStart}
        disabled={isRunning}
        className="bg-green-500 text-white px-4 py-2 rounded disabled:bg-gray-400 w-full md:w-auto"
      >
        Start
      </button>

      <button
        onClick={generateObject}
        className="bg-red-500 text-white px-4 py-2 rounded disabled:bg-gray-400 w-full md:w-auto"
      >
        Restart
      </button>
    </div>
  );
}