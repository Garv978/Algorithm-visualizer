import Box from "./Box";

export default function Grid({ grid, setGrid, tool, setSource, setDestination }) {
  return (
    <div>
      {grid.map((row, r) => (
        <div key={r} style={{ display: "flex" }}>
          {row.map((cell, c) => (
            <Box
              key={`${r}-${c}`}
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