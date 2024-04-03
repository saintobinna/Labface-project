// import React, { useEffect, useRef, useState } from "react";
import React from "react";
import styles from "./Works.module.css";
import Container from "../reusable/Container";
const Works = () => {
  // const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;
  //     const scrolledUp = prevScrollPos > currentScrollPos;

  //     const foodImage = document.querySelector(".food_img");

  //     if (scrolledUp) {
  //       // Scrolling up
  //       foodImage.style.transform = "translateY(-20px)";
  //     } else {
  //       // Scrolling down
  //       foodImage.style.transform = "translateY(20px)";
  //     }

  //     setPrevScrollPos(currentScrollPos);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [prevScrollPos]);
  return (
    <Container>
      <div className={styles.works_header}>
        <img src="/howWorks/shape-1.svg" alt="" className={styles["shape-1"]} />
        <h2>How It Works</h2>
        <div className={styles["how-it-works"]}>
          <div className={`${styles.circles} ${styles["div-1"]} `}>
            <div className={styles["img-1"]}>
              <h4>01</h4>
            </div>
            <p>Choose your meals and extras</p>
          </div>
          <div className={`${styles.circles} ${styles["div-2"]} `}>
            <div className={styles["img-2"]}>
              <h4>02</h4>
            </div>
            <p>We cook & deliver fresh meal</p>
          </div>
          <div className={`${styles.circles} ${styles["div-3"]} `}>
            <div className={styles["img-3"]}>
              <h4>03</h4>
            </div>
            <p>Heat & eat in minutes</p>
          </div>
          <div className={`${styles.circles} ${styles["div-4"]} `}>
            <div className={styles["img-4"]}>
              <h4>04</h4>
            </div>
            <p>Enjoy & Repeat or cancel anytime</p>
          </div>
          <img
            src="/howWorks/shape-2.svg"
            alt=""
            className={styles["shape-2"]}
          />
        </div>

        <div className={styles["howWorks-2"]}>
          <div className={styles["howWorks-2-col-1"]}>
            <h2 className={styles["howWorks-h2"]}>
              Meal Delivery for <br /> Any Lifestyle
            </h2>
            <p>
              Explore our healthy meal delivery options. You can create your
              weekly delivery <br /> to include any mix of recipes.
            </p>
            <div className={styles["meals-delivery-header"]}>
              <ul className={`${styles["meals-delivery"]} ${"meals-col-1"}`}>
                <li>~ Paleo</li>
                <li>~ Vegetarian</li>
                <li>~ Lean & Clean</li>
                <li>~ Gluten-Free</li>
                <li>~ Carb-Conscious</li>
              </ul>
              <ul
                className={`${styles["meals-delivery"]} ${styles["meals-col-2"]}`}
              >
                <li>~ Mediterranean</li>
                <li>~ Diabetes-Friendly</li>
                <li>~ Pescatarian</li>
                <li>~ Fresh & Ready</li>
              </ul>
            </div>
          </div>
          <div className={styles["howWorks-2-col-2"]}>
            <div className={styles["food_img"]}>
              <img
                src="/howWorks/shape-3.svg"
                alt="shape-3"
                className={styles["shape-3"]}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Works;
