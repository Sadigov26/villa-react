import React from "react";
import styles from "./Header.module.scss";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <header>
        <div className={styles.containerHeader}>
          <div className={styles.containerHeaderLogo}><h1>Villa</h1></div>
          <div className={styles.containerHeaderNav}>
            <nav>
              <ul>
                <li><a href="/">home</a></li>
                <li><a href="/Bascet">bascet</a></li>
                <li><a href="/Wishlsit">wishlist</a></li>
                <li><a href="/dasboard">dasboard</a></li>
              </ul>
            </nav>
            <FaBars />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
