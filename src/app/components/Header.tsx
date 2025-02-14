// components/Header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-red-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">My Website</h1>
        <ul className="flex gap-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
