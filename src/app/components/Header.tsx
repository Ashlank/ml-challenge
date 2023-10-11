import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-yellow-500 flex items-center px-4 font-semibold sticky top-0 z-10">
      <Link href='/'>
        Merca Libre
      </Link>
    </header>
  )
}