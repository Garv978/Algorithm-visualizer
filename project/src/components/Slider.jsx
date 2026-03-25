export default function Slider({
  label,
  value,
  setValue,
  min,
  max,
  step = 1
}) {
  return (
    <div className="flex flex-col">
      <label className="mb-1">
        {label}: {value}
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-64"
      />
    </div>
  );
}