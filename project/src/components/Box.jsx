const COLORS = {
  0: "white",
  1: "black",
  2: "green",
  3: "red",
  4: "yellow",
  5: "blue",
};

export default function Box({
  row,
  col,
  type,
  setGrid,
  tool,
  setSource,
  setDestination,
}) {
  function handleClick() {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((r) => r.slice());

      if (tool === "wall") {
        if (newGrid[row][col] === 0) newGrid[row][col] = 1;
        else if (newGrid[row][col] === 1) newGrid[row][col] = 0;
      }

      if (tool === "source") {
        setSource([row, col]);
        newGrid[row][col] = 2;
      }

      if (tool === "destination") {
        setDestination([row, col]);
        newGrid[row][col] = 3;
      }

      return newGrid;
    });
  }

  return (
    <div
      onClick={handleClick}
      style={{
        width: "25px",
        height: "25px",
        border: "1px solid #ccc",
        backgroundColor: COLORS[type],
      }}
    />
  );
}