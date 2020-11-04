import React from 'react';
import { Phone } from '../SVG';
import styles from '../../styles/Icon.module.scss';
import clsx from 'clsx';

const PhoneIcon = () => {
  return (
    <div className={clsx(styles.icon, styles.phone)}>
      <Phone />
    </div>
  );
};

export default PhoneIcon;
