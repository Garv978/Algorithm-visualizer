import Box from "./Box";
export default function Grid({ grid, setGrid, tool, setSource, setDestination }) {
  return (
    <div className="inline-block bg-slate-700 p-2 rounded-lg">
      {grid.map((row, r) => (
        <div key={r} className="flex">
          {row.map((cell, c) => (
            <Box
              key={c}
              row={r}
              col={c}
              type={cell}
              setGrid={setGrid}
              tool={tool}
              setSource={setSource}
              setDestination={setDestination}
            />
          ))}
        </div>
      ))}
    </div>
  );
}