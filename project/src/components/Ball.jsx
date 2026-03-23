export default function Ball({ value, state, x, y }) {
  let color = "bg-blue-500 border-blue-700";

  if (state === "visiting") color = "bg-yellow-400 border-yellow-600 scale-110";
  if (state === "visited") color = "bg-green-500 border-green-700";

  return (
    <div
      className={`absolute flex items-center justify-center rounded-full border-2 text-white font-bold ${color}
      w-8 h-8 text-xs
      md:w-10 md:h-10 md:text-sm
      lg:w-12 lg:h-12 lg:text-base`}
      style={{
        left: `calc(${x}px - 16px)`,
        top: `calc(${y}px - 16px)`,
        zIndex: 10,
      }}
    >
      {value}
    </div>
  );
}