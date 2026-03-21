export default function WorstCase({ generateWorstCase, isSorting }) {
  return (
    <button
      onClick={generateWorstCase}
      className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition"
    >
      Worst Case
    </button>
  );
}