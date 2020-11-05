import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from '../../styles/Link.module.scss';

const ImageLink = ({ href, alt, src, width, height, propsForAnchor = {}, propsForImage = {}, variant }) => {
  const { className: anchorClassName, ...otherAnchorProps } = propsForAnchor;
  const { className: imageClassName, otherImageProps } = propsForImage;
  return (
    <span className="footer-container">
      <span className={styles.linkContainer}>
        <a
          href={href}
          className={clsx(styles.imgLink, anchorClassName, variant === 'dark-background' && styles['dark-background'])}
          {...otherAnchorProps}
        >
          <img src={src} width={width} height={height} className={imageClassName} alt={alt} {...otherImageProps} />
        </a>
      </span>
    </span>
  );
};

ImageLink.propTypes = {
  href: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  imgStyles: PropTypes.string,
  linkStyles: PropTypes.string,
  propsForAnchor: PropTypes.object,
  propsForImage: PropTypes.object,
  variant: PropTypes.oneOf(['light-background', 'dark-background']),
};

export default ImageLink;
