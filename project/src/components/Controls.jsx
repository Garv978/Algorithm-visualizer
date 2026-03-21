export default function Controls({ generateBars, startSorting, isSorting }) {
  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={startSorting}
        disabled={isSorting}
        className="bg-green-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        Start
      </button>

      <button
        onClick={generateBars}
        className="bg-red-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        Restart
      </button>
    </div>
  );
}