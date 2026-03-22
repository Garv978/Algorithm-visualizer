export default function Controls({ generateBars, onStart, isRunning}) {
  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={onStart}
        disabled={isRunning}
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