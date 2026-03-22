export default function Dropdown({
  options,
  value,
  onChange,
  labelKey = "name",
  className = "",
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`border p-2 rounded ${className}`}
    >
      {Object.entries(options).map(([key, item]) => (
        <option key={key} value={key}>
          {item[labelKey]}
        </option>
      ))}
    </select>
  );
}