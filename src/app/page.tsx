import Link from "next/link";
import Rectangle from "./components/Rectangle";
import Grid from "./components/Grid";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <Rectangle color="blue" />
      <p className="text-black">Page 1</p>
      <Link href="/page2"> Ir a página 2</Link>
      <Grid />
    </div>
  );
}
