export default function SpeedSlider({ speed, setSpeed }) {
  return (
    <div className="flex flex-col items-center">
      <label className="mb-1 font-medium text-gray-700">
        Speed
      </label>

      <input
        type="range"
        min="5"
        max="200"
        value={205 - speed}
        onChange={(e) => setSpeed(205 - Number(e.target.value))}
        className="w-48 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
      />
    </div>
  );
}