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
      id: 'impact',
    },
    {
      url: '/monologues',
      label: 'The Monologues',
      id: 'monologues',
    },
    {
      url: '/about',
      label: 'About Us',
      id: 'about',
    },
    {
      url: '/keep-in-touch',
      label: 'Keep In Touch',
      id: 'keep-in-touch',
    },
    {
      url: '/donate',
      label: 'Donate',
      id: 'donate',
    },
  ];
  return (
    <nav aria-label="Site." className={`${styles['nav']} ${className}`}>
      {children}
      <ul className={styles['links']}>
        {links.map((link) => (
          <li key={link.id}>
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
