import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "../../styles/Link.module.scss";

const Link = ({ href, text, propsForAnchor = {} }) => {
  const { className: anchorClassName, ...otherAnchorProps } = propsForAnchor;
  return (
    <React.Fragment>
      <a
        className={clsx(styles.link, anchorClassName)}
        href={href}
        {...otherAnchorProps}
      >
        {text}
      </a>
    </React.Fragment>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  propsForAnchor: PropTypes.object,
};

export default Link;
