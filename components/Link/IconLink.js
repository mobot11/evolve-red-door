import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Link.module.scss';
import { EmailIcon, TwitterIcon, FaceBookIcon, InstagramIcon } from '../Icon';

const IconLink = ({ variant, anchorProps = {} }) => {
  let icon;
  let href;
  let alt;
  switch (variant) {
    case 'facebook':
      icon = <FaceBookIcon />;
      href = 'https://www.facebook.com/reddoorprojectpdx';
      alt = 'Red Door Project Facebook';
      break;
    case 'twitter':
      href = 'https://www.instagram.com/reddoorproject/';
      icon = <TwitterIcon />;
      alt = 'Red Door Project Twitter';
      break;
    case 'email':
      href = 'mailto:info@reddoorproject.org';
      icon = <EmailIcon />;
      alt = 'Red Door Project Email';
      break;
    case 'instagram':
      href = 'https://www.instagram.com/reddoorproject/';
      icon = <InstagramIcon />;
      alt = 'Red Door Project Instagram';
      break;
    default:
      throw new Error('invalid variant supplied to IconLink');
  }
  return (
    <div>
      <a href={href} alt={alt} className={styles['icon-link-green-background']} {...anchorProps}>
        {icon}
      </a>
    </div>
  );
};

IconLink.propTypes = {
  anchorProps: PropTypes.object,
  variant: PropTypes.oneOf(['facebook', 'twitter', 'instagram', 'email']),
};

export default IconLink;
