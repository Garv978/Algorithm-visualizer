import { algorithmMap as algorithms} from "../algorithms/index";

export default function Dropdown({ algorithm, setAlgorithm }) {
  return (
    <select
      value={algorithm}
      onChange={(e) => setAlgorithm(e.target.value)}
      className="border p-2 rounded"
    >
      {Object.entries(algorithms).map(([key, algo]) => (
        <option key={key} value={key}>
          {algo.name}
        </option>
      ))}
    </select>
  );
}