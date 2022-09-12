import React from "react";
import Photos from "./Photos";
// import NotFound from "./NotFound";

const PhotoContainer = (props) => {
  const results = props.data;
  let photos = results.map((photo) => (

    // pass props to Photos component
    <Photos url={results.photos} />
  ));

    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>{photos}</ul>
      </div>
    );
  }

export default PhotoContainer;
