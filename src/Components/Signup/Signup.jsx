import styles from "./Signup.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Buttons from "../reusable/Buttons";

import * as Yup from "yup";

// import { Formik, Field, Form, ErrorMessage } from "formik";

import Container from "../reusable/Container";
// import * as Yup from "yup";

const Signup = () => {
  const submitHandler = async (values) => {
    // try {
    //   await fetch("http://localhost:5000/api/v1/users/create-user", {
    //     method: "POST",
    //     body: JSON.stringify(values),
    //     headers: {
    //       "content-Type": "application/json",
    //     },
    //   });
    //   const data = await response.json();
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  //   const fallAndBounce = keyframes`
  //   0%, 100% {
  //     transform: translateY(0) rotate(0deg);
  //   }
  //   25% {
  //     transform: translateY(50vh) rotate(30deg);
  //   }
  //   50% {
  //     transform: translateY(0) rotate(0deg);
  //   }
  //   75% {
  //     transform: translateY(25vh) rotate(-15deg);
  //   }
  // `;

  //   // Styled component for the falling letter
  //   const AnimatedLetter = styled.div`
  //     position: absolute;
  //     top: 0;
  //     left: 50%;
  //     transform: translateX(-50%);
  //     font-size: 36px;
  //     animation: ${fallAndBounce} 5s ease-in-out infinite;
  //   `;

  //   const FallingLetterAnimation = () => {
  //     // State to control the visibility of the letter
  //     const [visible, setVisible] = useState(false);

  //     useEffect(() => {
  //       // Show the letter after component is mounted
  //       setVisible(true);
  //     }, []);

  return (
    <Container className={styles["  "]}>
      <div className={styles["Sign-up-Header"]}>
        <div className={styles["img-div"]}>
          {/* <div
            style={{
              position: "relative",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            {visible && <AnimatedLetter>&#x1F4CE;</AnimatedLetter>}
          </div> */}
          <img
            src="image.jpg"
            alt=""
            style={{
              width: "2vw",
              borderRadius: "50rem",
            }}
          />
        </div>
      </div>
      <div className={styles["Sign-up"]}>
        <img src="" alt="" />
        <div className={styles["flex2"]}>
          <h1>
            Sign
            <span
              style={{
                fontSize: "3rem",
                color: "rgb(150, 305, 100)",
              }}
            >
              Up
            </span>
          </h1>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={submitHandler}
          >
            <Form>
              <div className="form-controls-wrapper">
                <div
                  className="form-controls"
                  style={{
                    marginBottom: "2rem",
                  }}
                >
                  <label htmlFor="name">FullName</label>
                  <Field
                    name="name"
                    className="input-field"
                    type="text"
                    style={{
                      fontWeight: "900",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      width: "100%",
                      marginBottom: "0.5rem",
                      marginTop: "1rem",
                    }}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={styles["error"]}
                    style={{
                      color: "red",
                      fontWeight: "600",
                      fontSize: "1.2rem",
                    }}
                  />
                </div>

                <div
                  className="form-controls"
                  style={{
                    marginBottom: "2rem",
                  }}
                >
                  <label htmlFor="email">Email</label>
                  <Field
                    name="email"
                    className="input-field"
                    type="email"
                    style={{
                      fontWeight: "900",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      width: "100%",
                      marginBottom: "0.5rem",
                      marginTop: "1rem",
                    }}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                    style={{
                      color: "red",
                      fontWeight: "600",
                      fontSize: "1.2rem",
                    }}
                  />
                </div>
                <div
                  className="form-controls"
                  style={{
                    marginBottom: "2rem",
                  }}
                >
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    className="input-field"
                    type="password"
                    style={{
                      fontWeight: "900",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      width: "100%",
                      marginBottom: "0.5rem",
                      marginTop: "1rem",
                    }}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                    style={{
                      color: "red",
                      fontWeight: "600",
                      fontSize: "1.2rem",
                    }}
                  />
                </div>
                <div
                  className="form-controls"
                  style={{
                    marginBottom: "2rem",
                  }}
                >
                  <label htmlFor="confirm-password">Confirm-password</label>
                  <Field
                    name="confirmPassword"
                    className="input-field"
                    type="password"
                    style={{
                      fontWeight: "900",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      width: "100%",
                      marginTop: "1rem",

                      marginBottom: "0.5rem",
                    }}
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="error"
                    style={{
                      color: "red",
                      fontWeight: "600",
                      fontSize: "1.2rem",
                    }}
                  />
                </div>
                <Buttons className="custom-btn" type="submit">
                  Signup
                </Buttons>
              </div>
            </Form>
          </Formik>
          {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              color: "red",
            }}
          >
            <p
              style={{
                color: "red",
                fontSize: "2rem",
              }}
            >
              Already have an account?
            </p>
            <Link>Login</Link>
          </div> */}
        </div>
      </div>
    </Container>
  );
};

export default Signup;
