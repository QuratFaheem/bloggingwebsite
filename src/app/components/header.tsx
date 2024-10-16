import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="p-4">
        <ul className="container flex gap-9 font bold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/responsive">My Blogs</Link>
          </li>
                 </ul>
      </nav>
    </header>
  );
}