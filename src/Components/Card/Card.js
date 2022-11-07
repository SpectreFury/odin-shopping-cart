import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import styles from "./Card.module.css";

const removeSpaces = (link) => {
  return link.toLowerCase().replaceAll(" ", "-");
};

const Card = (props) => {
  return (
    <Link
      className={styles.default}
      to={`/keyboard/${removeSpaces(props.name)}`}
    >
      <div className={styles.flex}>
        <img src={props.image} className={styles.image} />
        <div className={styles.text}>{props.name}</div>
        <ul className={styles.ul}>
          <li>
            <FontAwesomeIcon icon={faStar} className={styles.star} />
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} className={styles.star} />
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} className={styles.star} />
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} className={styles.star} />
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} className={styles.star} />
          </li>
        </ul>
        <div className={styles.price}>₹{props.price}</div>
      </div>
    </Link>
  );
};

export default Card;
