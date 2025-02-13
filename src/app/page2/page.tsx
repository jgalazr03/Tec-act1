import Link from "next/link";

export default function Page2() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="w-64 h-32 bg-green-500">
        <p className="text-black">Page 2</p>
      </div>
      <Link href="/"> Regresar a la página 1</Link>
    </div>
  );
}
