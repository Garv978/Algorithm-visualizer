export default function Ball({ value, state, x, y }) {
  let color = "bg-blue-500 border-blue-700";

  if (state === "visiting") color = "bg-yellow-400 border-yellow-600 scale-110";
  if (state === "visited") color = "bg-green-500 border-green-700";

  return (
    <div
      className={`absolute flex items-center justify-center rounded-full border-2 text-white font-bold ${color}`}
      style={{
        left: x - 25,
        top: y - 25,
        width: 50,
        height: 50,
        zIndex: 10,
        position: "absolute",
      }}
    >
      {value}
    </div>
  );
}