import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-pink-600 text-white p-4 text-center">
      <h1>Checkpoint : frontend</h1>
      <Link href="/">Countries</Link>
    </header>
  );
}
