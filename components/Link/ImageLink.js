import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "../../styles/Link.module.scss";

const ImageLink = ({
  href,
  altText,
  src,
  width,
  height,
  propsForAnchor = {},
  propsForImage = {},
}) => {
  const { className: anchorClassName, ...otherAnchorProps } = propsForAnchor;
  const { className: imageClassName, otherImageProps } = propsForImage;
  return (
    <span className={styles.linkContainer}>
      <a
        href={href}
        alt={altText}
        className={clsx(styles.imgLink, anchorClassName)}
        {...otherAnchorProps}
      >
        <img
          src={src}
          width={width}
          height={height}
          className={imageClassName}
          {...otherImageProps}
        />
      </a>
    </span>
  );
};

ImageLink.propTypes = {
  href: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  imgStyles: PropTypes.string,
  linkStyles: PropTypes.string,
  propsForAnchor: PropTypes.object,
  propsForImage: PropTypes.object,
};

export default ImageLink;
