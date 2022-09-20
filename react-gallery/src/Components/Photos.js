/* ==================================
            REACT IMPORTS
===================================== */
import React from "react";

const Photos = ({ id, secret, server, title }) => {
  /* ==================================
            RENDER PHOTOS
===================================== */
  return (
    <li>
      {/*`PULL IN THE PROP FROM PHOTOCONTAINER.JS */}
      <img
        src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`}
        alt={`${title}`}
      />
    </li>
  );
};

export default Photos;
