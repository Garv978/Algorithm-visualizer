export default function SearchInput({ value, setValue }) {
  return (
    <div className="flex items-center gap-2">
      <label className="font-medium">Target:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="border p-2 rounded w-24"
        placeholder="Enter value"
      />
    </div>
  );
}