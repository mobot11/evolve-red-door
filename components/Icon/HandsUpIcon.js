import React from "react";
import { HandsUp } from "../SVG";
import styles from "../../styles/Icon.module.scss";

const HandsUpIcon = () => {
  return (
    <div className={styles.hands}>
      <HandsUp />
    </div>
  );
};

export default HandsUpIcon;
