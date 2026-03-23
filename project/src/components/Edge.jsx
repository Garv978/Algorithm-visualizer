export default function Edge({ x1, y1, x2, y2 }) {
  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

  return (
    <div
      style={{
        position: "absolute",
        left: x1,
        top: y1,
        width: length,
        height: 2,
        backgroundColor: "white",
        transform: `rotate(${angle}deg)`,
        transformOrigin: "0 0",
        zIndex: 1,
      }}
    />
  );
}