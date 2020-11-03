import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/donate">
            <a>Donate</a>
          </Link>
        </li>
        <li>
          <Link href="/monologues">
            <a>Monologues</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
