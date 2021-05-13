import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={150} height={200} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ashwin">
        <a>Ashwin's Listing</a>
      </Link>
    </nav>
  );
};

export default NavBar;
