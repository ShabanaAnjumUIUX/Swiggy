import React from "react";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import styled from "styled-components";

import Button from "react-bootstrap/Button"
import {  FaUserTie } from "react-icons/fa";
import { FaClipboardUser } from "react-icons/fa6";

function Banner() {
  const Paragraph = {
    color: "purple",
    background: "yellow",
    border: "5px dashed orange",
    padding: "25px",
    textTransform: "lowercase",
  };

  const style2 = {
    border: "10px dotted orange",
    background:"pink",
  };


  const Image=styled.img`
  width:250px;
  border:5px solid green;

  
  `
  return (
    <>

      <Button variant="info">Click to read More</Button>
    {/* <i class="fa-solid fa-house" style={{color:"red",fontSize:"45px",}}></i> */}

      <h1 style={style2}>Welcome to the banner section </h1>
      <img src={img1} style={{width:"250px"}}/>
      <img src={img2} style={{width:"250px"}}/>




    <img src={require("../assets/images/4.jpg")} className="img-fluid w-50 rounded-circle border border-primary"/>
    <Image src={require("../assets/images/5.jpg")}/>



      <img
        src="https://images.pexels.com/photos/19047806/pexels-photo-19047806.jpeg"
        style={{ width: "450px", height: "450px", borderRadius: "50%" }}
      />
      <FaUserTie /> <FaClipboardUser />
      <p style={Paragraph}>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum. Why do we use it? It is a long established fact
        that a reader will be distracted by the readable content of a page when
        looking at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using
        'Content here, content here', making it look like readable English. Many
        desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover
        many web sites still in their infancy. Various versions have evolved
        over the years, sometimes by accident, sometimes on purpose (injected
        humour and the like).What is Lorem Ipsum? Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum. Why do we use
        it? It is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
    </>
  );
}

export default Banner;
