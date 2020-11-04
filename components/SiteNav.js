import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/SiteNav.module.scss';
const SiteNav = ({ className, children }) => {
  const router = useRouter();
  const currentUrl = router.pathname;
  const links = [
    {
      url: '/impact',
      label: 'Impact',
    },
    {
      url: '/monologues',
      label: 'The Monologues',
    },
    {
      url: '/about',
      label: 'About Us',
    },
    {
      url: '/contact',
      label: 'Keep In Touch',
    },
    {
      url: '/donate',
      label: 'Donate',
    },
  ];
  return (
    <nav aria-label="Site" className={`${styles['nav']} ${className}`}>
      {children}
      <ul className={styles['links']}>
        {links.map((link) => (
          <li>
            <Link href={link.url}>
              <a className={currentUrl === link.url ? styles['active'] : ''}>{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SiteNav;
