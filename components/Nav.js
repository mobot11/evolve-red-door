import Link from 'next/link';

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
          <Link href="/impact">
            <a>Impact</a>
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
          <Link href="/keep-in-touch">
            <a>Keep in Touch</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
