// components/Slider.jsx
export default function Slider({ value, setValue }) {
  return (
    <div className="flex flex-col">
      <label className="mb-1">Number of Bars: {value}</label>
      <input
        type="range"
        min="5"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-64"
      />
    </div>
  );
}