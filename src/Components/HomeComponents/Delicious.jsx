import React from "react";
import styles from "./Delicious.module.css";
import Container from "../reusable/Container";
import Buttons from "../reusable/Buttons";

const Delicious = () => {
  return (
    <Container>
      <div className={styles["delicious-header"]}>
        <div className={styles["delicious-div-1"]}>
          <h1>Delicious, Healthy & Affordable Meals Delivered.</h1>
          <p>
            One who avoids a pain that produces no resultant pleasure that has
            no annoying consequences.
          </p>
          <Buttons>View menu</Buttons>
        </div>
        <div className={styles["delicious-div-2"]}>
          <img src="delicious.png" alt="" className={styles["delicious-img"]} />
        </div>
      </div>
    </Container>
  );
};

export default Delicious;
