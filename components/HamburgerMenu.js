import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import SiteNav from './SiteNav';
import styles from '../styles/HamburgerMenu.module.scss';
import { useRouter } from 'next/router';
import Menu from './SVG/Menu';
import Close from './SVG/Close';

const KEYCODE_TAB = 9;
const KEYCODE_ESC = 27;

const HamburgerMenu = () => {
  const router = useRouter();
  const currentUrl = router.pathname;
  const elRef = useRef(null);
  const closeRef = useRef(null);
  const openRef = useRef(null);

  const [activeTrap, setActiveTrap] = useState(false);

  const mountTrap = () => {
    setActiveTrap(true);
    setTimeout(() => {
      closeRef?.current.focus();
    });
  };

  const unmountTrap = () => {
    setActiveTrap(false);
    setTimeout(() => {
      openRef?.current.focus();
    });
  };

  function handleFocus(e) {
    var focusableEls = elRef.current.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      ),
      firstFocusableEl = focusableEls[0],
      lastFocusableEl = focusableEls[focusableEls.length - 1];

    var isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

    if (e.key === 'Esc' || e.keyCode === KEYCODE_ESC) {
      unmountTrap();
      return;
    }

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      /* shift + tab */ if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        e.preventDefault();
      }
    } /* tab */ else {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        e.preventDefault();
      }
    }
  }

  useEffect(() => {
    elRef.current.addEventListener('keydown', handleFocus);
    return (_) => {
      elRef.current.removeEventListener('blur', unmountTrap);
    };
  }, []);

  return (
    <>
      <div ref={elRef}>
        {activeTrap && (
          <SiteNav className={`${styles['mobile-nav']}`}>
            <div className={styles['open-title-layout']}>
              <button
                ref={closeRef}
                aria-label="Close Menu."
                type="button"
                className={styles['close-btn']}
                onClick={unmountTrap}
              >
                <Close />
              </button>
              <Link href="/">
                <a className={currentUrl === '/' ? styles['active'] : ''}>The Evolve Experience</a>
              </Link>
            </div>
          </SiteNav>
        )}
      </div>
      <div className={styles['hamburger-menu']}>
        <button
          aria-label="Open Menu."
          type="button"
          className={styles['open-btn']}
          onClick={mountTrap}
          aria-expanded={activeTrap}
          ref={openRef}
        >
          <Menu />
        </button>
        <Link href="/">
          <a className={styles['mobile-site-title']}>The Evolve Experience</a>
        </Link>
      </div>
    </>
  );
};

export default HamburgerMenu;
