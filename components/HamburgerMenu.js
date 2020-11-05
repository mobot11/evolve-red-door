import { createRef, useEffect, useState } from 'react';
import Link from 'next/link';
import SiteNav from './SiteNav';
import styles from '../styles/HamburgerMenu.module.scss';
import { useRouter } from 'next/router';
import Menu from './SVG/Menu';
import Close from './SVG/Close';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeRef = createRef();
  const openRef = createRef();
  const toggleMenu = (nextEl) => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      nextEl.focus();
    });
  };
  const router = useRouter();
  const currentUrl = router.pathname;
  return (
    <div className={styles['hamburger-menu']}>
      <button
        aria-label="Open Menu"
        type="button"
        className={styles['open-btn']}
        onClick={() => {
          toggleMenu(closeRef.current);
        }}
        aria-expanded={isOpen}
        ref={openRef}
      >
        <Menu />
      </button>
      <Link href="/">
        <a className={styles['mobile-site-title']}>The Evolve Experience</a>
      </Link>
      <SiteNav className={`${styles['mobile-nav']} ${!isOpen && styles['hidden']}`}>
        <button
          aria-label="Close Menu"
          type="button"
          className={styles['close-btn']}
          onClick={() => {
            toggleMenu(openRef.current);
          }}
          ref={closeRef}
        >
          <Close />
        </button>
        <Link href="/">
          <a className={currentUrl === '/' ? styles['active'] : ''}>The Evolve Experience</a>
        </Link>
      </SiteNav>
    </div>
  );
};
export default HamburgerMenu;
