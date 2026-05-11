import React, { Component } from "react";
import "../CSS/style.css";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <>
        <div className="container">
          <ul className="navbar  p-lg-2">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <NavLink to="/service">Service</NavLink>
            </li>
          </ul>
        </div>
        {/* <Banner />

        <a>Home</a>

        <h1>Welcome to the components concept</h1>


        <p
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "1em",
            fontFamily: "Poppins,sans-serif",
            lineHeight: "45px",
            fontWeight: "bold",
            width: "350px",
            border:"2px solid blue"
          }}
        >
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>

          <h6 className={styles.paragraph2}>us versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).</h6>

          <h5 className={styles.paragraph}>ncy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).</h5> */}
      </>
    );
  }
}

export default Navbar;
