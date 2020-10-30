import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "../../styles/Link.module.scss";

const Link = ({ href, text, linkStyles }) => {
  return (
    <React.Fragment>
      <a className={clsx(styles.link, linkStyles)} href={href}>
        {text}
      </a>
    </React.Fragment>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Link;
