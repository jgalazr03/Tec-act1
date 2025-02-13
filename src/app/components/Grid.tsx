import Square from "./Square";

export default function Grid() {
  const gridSize = 5;
  const squares = Array.from({ length: gridSize * gridSize });
  const colors = ["red", "blue", "green", "yellow", "purple"];

  return (
    <div className="grid grid-cols-5 gap-2 p-4">
      {squares.map((_, index) => (
        <Square key={index} color={colors[index % colors.length]} />
      ))}
    </div>
  );
}
