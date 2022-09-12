import React from "react";

const Photos = (props) => {
  return (
    <li>
      {/*`PULL IN THE PROP FROM PHOTOCONTAINER.JS */}
      <img src={props.url} alt="" />
    </li>
  );
};

export default Photos;
