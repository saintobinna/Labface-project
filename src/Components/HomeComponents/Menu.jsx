import React from "react";
import styles from "./Menu.module.css";
import Buttons from "../reusable/Buttons";
import { Link } from "react-router-dom";

import Container from "../reusable/Container";

const Menu = () => {
  return (
    <Container>
      <div>
        <div className={styles["menu-header"]}>
          <h2 className={styles["Menu-head"]}> Our Menu</h2>
          <Buttons>View menu</Buttons>
        </div>

        <div className={styles["menu-cards"]}>
          <div className={styles.card}>
            <img src="/Menu/img-1.jpg" alt="" className={styles.img} />
            <div className={styles["card-info"]}>
              <div>
                <Link className={styles["link-p"]}>
                  <p className={styles["menu-name"]}>
                    Chicken Fajitas with <br />
                    Guacamole and
                    <br /> cheddar cheese
                  </p>
                </Link>
                <Link className={styles["link"]}>Order now</Link>
              </div>
              <div className={styles["h4"]}>
                <h4>$75</h4>
              </div>
            </div>
          </div>
          <div className={styles["vertical-line"]}></div>
          <div className={styles.card}>
            <img src="/Menu/img-2.jpg" alt="" className={styles.img} />
            <div className={styles["card-info"]}>
              <div>
                <Link className={styles["link-p"]}>
                  <p className={styles["menu-name"]}>
                    Classic Chicken Salad
                    <br /> with Croutons and
                    <br /> Parmesan
                  </p>
                </Link>

                <Link className={styles["link"]}>Order now</Link>
              </div>
              <div className={styles["h4"]}>
                <h4>$99</h4>
              </div>
            </div>
          </div>
          <div className={styles["vertical-line"]}></div>

          <div className={styles.card}>
            <img src="/Menu/img-3.jpg" alt="" className={styles.img} />
            <div className={styles["card-info"]}>
              <div>
                <Link className={styles["link-p"]}>
                  <p className={styles["menu-name"]}>
                    Veggie Lentil Ziti-Style
                    <br /> Pasta Bake with
                    <br /> Roasted Veg
                  </p>
                </Link>
                <Link className={styles["link"]}>Order now</Link>
              </div>
              <div className={styles["h4"]}>
                <h4>$89</h4>
              </div>
            </div>
          </div>
          <div className={styles["vertical-line"]}></div>

          <div className={styles.card}>
            <img src="/Menu/img-4.jpg" alt="" className={styles.img} />
            <div className={styles["card-info"]}>
              <div>
                <Link className={styles["link-p"]}>
                  <p className={styles["menu-name"]}>
                    Moroccan lamb tagine
                    <br /> with eggplant and
                    <br /> raisins
                  </p>
                </Link>
                <Link className={styles["link"]}>Order now</Link>
              </div>
              <div className={styles["h4"]}>
                <h4>$69</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Menu;
