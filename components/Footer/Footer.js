import React from 'react';
import ImageLink from '../Link/ImageLink';
import styles from '../../styles/Footer.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

import IconLink from '../Link/IconLink';

const Footer = ({}) => {
  return (
    <footer className={styles.footer}>
      <div className={clsx(styles['footer-content'], styles['footer-top'])}>
        <ImageLink
          src="assets/reddoorproject_logo_seafoam.png"
          alt="Red Door Project Home"
          href="https://reddoorproject.org/"
          width={270}
          variant="dark-background"
        />
        <div className={styles['social-links']}>
          <IconLink variant="facebook" />
          <IconLink variant="twitter" />
          <IconLink variant="instagram" />
          <IconLink variant="email" />
        </div>
      </div>
      <div className={styles['horizontal-rule']} />
      <div className={clsx(styles['footer-content'], styles['footer-bottom'])}>
        <p className={styles.copyright}>Copyright &copy;{new Date().getFullYear()} All Rights Reserved.</p>
        <Link href="/accessibility-statement">
          <a>Accessibility statement</a>
        </Link>
        <span className={styles['knowbility-logo']}>
          <ImageLink
            src="assets/knowbility-logo.svg"
            alt="Knowbility Home"
            href="https://knowbility.org/"
            width={180}
            height={60}
            variant="dark-background"
          />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
