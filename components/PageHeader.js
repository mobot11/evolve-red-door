import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import SiteNav from './SiteNav';
import HamburgerMenu from './HamburgerMenu';
import styles from '../styles/PageHeader.module.scss';

const PageHeader = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <header className={`${styles['page-header']} ${sticky.isSticky ? styles['sticky'] : ''}`} ref={headerRef}>
      <div className={styles['page-header-inner']}>
        <a href="#main" className={styles['skip-links']}>
          Skip Links
        </a>
        <HamburgerMenu />

        <Link href="/">
          <a className={styles['desktop-site-title']}>The Evolve Experience</a>
        </Link>

        <SiteNav className={styles['desktop-nav']} />
      </div>
    </header>
  );
};

export default PageHeader;
