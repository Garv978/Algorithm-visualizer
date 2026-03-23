import Ball from "./Ball";

export default function Balls({ balls }) {
  return (
    <>
      {balls.map((ball) => (
        <Ball
          key={ball.id}
          value={ball.value}
          state={ball.state}
          x={ball.x}
          y={ball.y}
        />
      ))}
    </>
  );
}