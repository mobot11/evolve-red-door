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

  function isIE() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf('MSIE');

    // If IE, return version number.
    if (Idx > 0) return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf('.', Idx)));
    // If IE 11 then look for Updated user agent string.
    else if (!!navigator.userAgent.match(/Trident\/7\./)) return 11;
    else return 0; //It is not IE
  }

  // handle hash for skiplinks (IE11)
  function handleHashChange() {
    var element = document.getElementById(location.hash.substring(1));

    if (element) {
      if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
        element.tabIndex = -1;
      }

      element.focus();
    }
  }

  // add/remove scroll event listener and hashchange for skiplinks (IE11)
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    isIE() && window.addEventListener('hashchange', handleHashChange, false);
    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
      isIE() && window.addEventListener('hashchange', handleHashChange);
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
