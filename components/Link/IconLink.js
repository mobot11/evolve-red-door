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
  linkStyles,
  imgStyles,
}) => {
  return (
    <span className={styles.linkContainer}>
      <a
        className={styles.link}
        href={href}
        alt={altText}
        className={clsx(styles.link, linkStyles)}
      >
        <img src={src} width={width} height={height} className={imgStyles} />
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
};

export default ImageLink;
