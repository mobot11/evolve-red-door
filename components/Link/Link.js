import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from '../../styles/Link.module.scss';

const Link = ({ href, text, propsForAnchor, linkClass = {} }) => {
  const { className: anchorClassName, ...otherAnchorProps } = propsForAnchor;
  return (
    <React.Fragment>
      <a className={clsx(styles.link, anchorClassName, linkClass)} href={href} {...otherAnchorProps}>
        <span>{text} &nbsp;</span>
        <span className={styles.srOnly}>Opens in new window</span>
        <i aria-hidden="true" className="fa fa-edit fa-external-link"></i>
      </a>
    </React.Fragment>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  propsForAnchor: PropTypes.object,
  linkClass: PropTypes.string,
};

export default Link;
