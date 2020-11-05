import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Link.module.scss';
import { EmailIcon, TwitterIcon, FaceBookIcon, InstagramIcon, PhoneIcon } from '../Icon';
import clsx from 'clsx';

const IconLink = ({ variant, text, anchorProps = {}, theme }) => {
  let icon;
  let href;
  let label;
  switch (variant) {
    case 'facebook':
      icon = <FaceBookIcon />;
      href = 'https://www.facebook.com/reddoorprojectpdx';
      label = `access The Red Door Project's Facebook page`;
      break;
    case 'twitter':
      href = 'https://twitter.com/reddoorproject?s=20';
      icon = <TwitterIcon />;
      label = `access The Red Door Project's Twitter page`;
      break;
    case 'email':
      href = 'mailto:info@reddoorproject.org';
      icon = <EmailIcon />;
      label = `email The Red Door Project`;
      break;
    case 'instagram':
      href = 'https://www.instagram.com/reddoorproject/';
      icon = <InstagramIcon />;
      label = `access The Red Door Project's Instagram page`;
      break;
    case 'phone':
      href = 'tel:1-503-541-0739';
      icon = <PhoneIcon />;
      label = `contact telephone number 1 503 541 07 39`;
      break;
    default:
      throw new Error('invalid variant supplied to IconLink');
  }
  return (
    <div>
      <a href={href} className={clsx(styles[`icon-${theme}`], styles.iconLink)} {...anchorProps}>
        {icon} {text && <span className={clsx(styles.iconLinkText, 'icon-text')}>{text}</span>}
        <span className="visuallyhidden">{label}</span>
      </a>
    </div>
  );
};

IconLink.propTypes = {
  anchorProps: PropTypes.object,
  variant: PropTypes.oneOf(['facebook', 'twitter', 'instagram', 'email', 'phone']),
  theme: PropTypes.oneOf(['background-deep-sea', 'background-gem-of-the-ocean']),
};

export default IconLink;
