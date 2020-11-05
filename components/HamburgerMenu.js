import { useState } from 'react';
import Link from 'next/link';
import SiteNav from './SiteNav';
import styles from '../styles/HamburgerMenu.module.scss';
import { useRouter } from 'next/router';
import Menu from './SVG/Menu';
import Close from './SVG/Close';

const HamburgerMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();
  const currentUrl = router.pathname;
  return (
    <div className={styles['hamburger-menu']}>
      <button className={styles['open-btn']} onClick={() => toggleMenu()} aria-expanded={isOpen}>
        <Menu />
      </button>
      <Link href="/">
        <a className={styles['mobile-site-title']}>The Evolve Experience</a>
      </Link>
      {isOpen && (
        <>
          <SiteNav className={styles['mobile-nav']}>
            <button type="button" className={styles['close-btn']} onClick={() => toggleMenu()}>
              <Close />
            </button>
            <Link href="/">
              <a className={currentUrl === '/' ? styles['active'] : ''}>The Evolve Experience</a>
            </Link>
          </SiteNav>
        </>
      )}
    </div>
  );
};
export default HamburgerMenu;
