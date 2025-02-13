interface SquareProps {
  color: string;
}

export default function Square({ color }: SquareProps) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-16 h-16 flex items-center justify-center text-white font-bold"
    ></div>
  );
}
