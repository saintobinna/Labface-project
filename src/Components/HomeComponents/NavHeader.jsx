import React from "react";
import { IoMdCart } from "react-icons/io";

import { Link } from "react-router-dom";
import Container from "../reusable/Container";
import styles from "./NavHeader.module.css";

const NavHeader = () => {
  return (
    <div className={styles["nav-bg"]}>
      <Container>
        <nav>
          <div className={styles.nav_link_items}>
            <Link className={`${styles.nav_item} ${styles.nav_list}`}>
              Our Menu
            </Link>
            <Link className={`${styles.nav_item} ${styles.nav_list}`}>
              Our Story
            </Link>
            <Link className={`${styles.nav_item} ${styles.nav_list}`}>
              How it Works
            </Link>
            <Link className={`${styles.nav_item} ${styles.nav_list}`}>
              Pages
            </Link>
          </div>
          <Link to={"/"} className={styles.nav_list}>
            <h1 className={styles.logo}>
              <span className={styles.box_text}>be</span> welfed
            </h1>
          </Link>
          <div className={styles["nav-col-3"]}>
            <Link to={"/"} className={styles.nav_list}>
              <button className={styles.menu_button}>Our menu</button>
            </Link>
            <Link to={"/"} className={`${styles.cart} ${styles.nav_list}`}>
              <span className={styles["cart-icon"]}>
                <IoMdCart color="rgb(0, 75, 26)" />
              </span>
              <h2>Cart</h2>
              <div className={styles.cart_count}>
                <div className={styles.cart_count_num}>1</div>
              </div>
            </Link>
          </div>
          <div>
            <Link to={"/signup"} className={styles["signup-btn"]}>
              Sign-up
            </Link>
          </div>
        </nav>
        <div class={styles["horizontal-line"]}></div>
      </Container>
    </div>
  );
};

export default NavHeader;
