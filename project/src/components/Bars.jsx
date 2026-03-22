export default function Bars({ bars }) {
  return (
    <div className="flex items-end justify-center h-80 border mt-6">
      {bars.map((bar, index) => (
        <div
          key={index}
          className="mx-1"
          style={{
            height: `${bar.value}px`,
            width: `${500 / bars.length}px`,
            backgroundColor: bar.color,
          }}
        ></div>
      ))}

    </div>
  );
}