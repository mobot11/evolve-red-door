import Link from 'next/link';
import SiteNav from './SiteNav';
import HamburgerMenu from './HamburgerMenu';
import styles from '../styles/PageHeader.module.scss';

const PageHeader = () => {
  return (
    <header className={styles['page-header']}>
      <div className={styles['page-header-inner']}>
        <a href="#main" className={styles['skip-links']}>
          Skip Links
        </a>
        <HamburgerMenu />

        <Link href="/">
          <a className={styles['site-title']}>The Evolve Experience</a>
        </Link>

        <SiteNav className={styles['desktop-nav']} />
      </div>
    </header>
  );
};

export default PageHeader;
