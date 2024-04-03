import React from "react";
import styles from "./Makers.module.css";
import Container from "../reusable/Container";

const Makers = () => {
  return (
    <Container>
      <div className={styles["makers-head"]}>
        <div>
          <div className={styles["bgc-circle"]}>
            <img src="round-text.png" alt="" className={styles["round-text"]} />
            <p className={styles["span"]}>
              from <span>10 </span>years
            </p>
          </div>
          <img src="maker.jpg" alt="" className={styles["chef-img"]} />

          <div className="pat">
            <img
              src="makers-pat.svg"
              alt="makers-pat"
              className={styles["makers-pattern"]}
            />
          </div>
        </div>
        <div className={styles["makers-text"]}>
          <h5>
            Meet Our <strong>Makers</strong>
          </h5>
          <p>
            We started in 2011 with vision to provide safe and abundant food
            supply. Our mission is to deliver you delicious and healthy meals so
            you can spend your time enjoying everything else in life.
          </p>

          <div className={styles["social-icons-div"]}>
            <img src="facebook.svg" alt="" className={styles["social-icons"]} />
            <img src="insta.svg" alt="" className={styles["social-icons"]} />
            <img src="twitter.svg" alt="" className={styles["social-icons"]} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Makers;
