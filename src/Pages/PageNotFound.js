import React from "react";
import { useParams } from "react-router-dom";

function PageNotFound({prop1,prop2}) {
  let urldata = useParams();
  console.log(urldata);
  return (
    <>
      <div className="container text-center">
        <img alt=""
          className="img-fluid w-25"
          src="https://www.pickuplimes.com/static/images/errors/LIME_FALLING.c5b66eececf4.jpg"
        />
        <br />
        <span className="display-1">
          <span className="text-danger fw-bold">OOPS!</span>
        <p className="display-1 text-warning fw-bold">{urldata.id}</p>

           404 PAGE NOT FOUND
        </span>
      </div>
      <div className="container bg-danger">
      {prop1} {prop2}
      </div>
    </>
  );
}

export default PageNotFound;
