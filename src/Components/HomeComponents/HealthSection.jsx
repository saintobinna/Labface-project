import React from "react";
import styles from "./HealthSection.module.css";
import Buttons from "../reusable/Buttons";
import Container from "../reusable/Container";
const HealthSection = () => {
  return (
    <Container>
      <div className={styles["health-section"]}>
        <img src="/shape-1.svg" alt="" className={styles["image-leaf"]} />
        <div className={styles["col-2"]}>
          <div className={styles.header_section}>
            <div className={styles["col-1"]}>
              <div className={styles.header_text}>
                Healthy
                <br /> <strong>Eating,</strong> Made easy
              </div>
              <div className={styles.foods_types_icons}>
                <div>
                  <img src="pot.svg" alt="" className={styles["health-logo"]} />
                  <p className={styles["logo-txt"]}>
                    Healthy food cooked
                    <br /> on request
                  </p>
                </div>
                <div>
                  <img
                    src="plant.svg"
                    alt=""
                    className={styles["health-logo"]}
                  />
                  <p className={styles["logo-txt"]}>
                    Plant based food
                    <br /> no added flavor
                  </p>
                </div>
                <div>
                  <img
                    src="Food.svg"
                    alt=""
                    className={styles["health-logo"]}
                  />
                  <p className={styles["logo-txt"]}>
                    Packed with love <br /> and care
                  </p>
                </div>
              </div>
              <img src="shape-2.svg" alt="" className={styles["shape-2"]} />
              <Buttons>Order now</Buttons>
            </div>
            <div className={styles["col-3"]}>
              <img
                src="header-img.jpg"
                alt="header-img"
                className={styles.header_img}
              />
              <div className={styles.hero_img_box}>
                <p>ARTIFICIAL FLAVOUR - SUGAR - PALM OIL - PRESERVANTIVES - </p>
                <h3>No</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HealthSection;
