import React from "react";

const Photos = ({id, secret, server, title}) => {
  return (
    <li>
      {/*`PULL IN THE PROP FROM PHOTOCONTAINER.JS */}
      <img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={`${title}`} />
    </li>
  );
};

export default Photos;

//https://live.staticflickr.com/{server-id}/{id}_{secret}.jpg

// const data = <your array>
//   return (
//   {data.map(element => <div>{element.name}</div>)}
//   )