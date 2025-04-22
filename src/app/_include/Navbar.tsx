import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-end pt-3 lg:pt-6">
        <h1 className="text-3xl">Hamza Ali</h1>
        <ul className="space-x-4 lg:space-x-8">
          <Link href="/">Home</Link>
          <Link href="/work">Work</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
