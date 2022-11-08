import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/white.svg";

import styles from "./NavBar.module.css";

const NavBar = (props) => {
  const { itemCount } = props;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let itemTotal = 0;

    itemCount.map((item) => {
      itemTotal = itemTotal + item.count;
    });

    setTotal(itemTotal);
  }, [itemCount]);

  return (
    <nav className={props.darkMode ? styles.navdark : ""}>
      <div className={styles.navbar}>
        <Link to="/">
          <img src={Logo} alt="Meckeys" className={styles.logo} />
        </Link>
        <ul>
          <Link to="/keyboard" className={styles.navlink}>
            Keyboard
          </Link>
          <Link to="/mouse" className={styles.navlink}>
            Mouse
          </Link>
          <Link to="/deskmat" className={styles.navlink}>
            Deskmat
          </Link>
          <Link to="/accessories" className={styles.navlink}>
            Accessories
          </Link>
          <Link to="/contact" className={styles.navlink}>
            Contact
          </Link>
          <Link to="/cart" className={styles.relative}>
            <FontAwesomeIcon icon={faCartShopping} className={styles.cart} />
            <span className={styles.item}>{total}</span>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
