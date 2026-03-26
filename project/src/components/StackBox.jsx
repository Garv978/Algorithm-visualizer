export default function StackBox({ value, boxHeight }) {
  return (
    <div
      style={{ height: boxHeight }}
      className="w-28 bg-blue-500 text-white flex items-center justify-center mb-2 rounded transition-all duration-300"
    >
      {value}
    </div>
  );
}