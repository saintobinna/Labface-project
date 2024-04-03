import React from "react";
import styles from "./Recipe.module.css";
import Container from "../reusable/Container";
import { Link } from "react-router-dom";

const Recipe = () => {
  return (
    <Container>
      <div className={styles["Recipe-heading"]}>
        <h1>Our recipe</h1>
        <div className={styles["Recipe-divs-header"]}>
          <div className={styles["Recipe-div"]}>
            <div className={styles["card-1"]}>
              <img
                src="/Recipe/recipe-1.jpg"
                alt=""
                className={styles["Recipe-img"]}
              />
              <Link className={styles["link-button"]}>Breakfast</Link>
              <Link className={styles["link-button-2"]}>
                Homemade muesli with oats, dates & <br />
                berries
              </Link>
            </div>
          </div>
          <div className={styles["Recipe-div"]}>
            <div className={styles["card-2"]}>
              <img
                src="/Recipe/recipe-2.jpg"
                alt=""
                className={styles["Recipe-img"]}
              />
              <Link className={styles["link-button"]}>Juice</Link>
              <Link className={styles["link-button-2"]}>
                Ginger Turmeric Immune-Boosting <br />
                Energy juice
              </Link>
            </div>
          </div>
          <div className={styles["Recipe-div"]}>
            <div>
              <img
                src="/Recipe/recipe-3.jpg"
                alt=""
                className={styles["Recipe-img"]}
              />
              <Link className={styles["link-button"]}>Fish</Link>

              <Link className={styles["link-button-2"]}>
                Salmon with Burst Tomato Sauce
                <br /> Recipe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Recipe;
