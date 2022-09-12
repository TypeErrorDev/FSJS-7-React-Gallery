import React from "react";
import Photos from "./Photos";
import NotFound from "./NotFound";

const PhotoContainer = (props) => {
  const results = props.data;
  let photos;

  if (results.length > 0) {
    photos = results.map((photo) => {
      return (
        <Photos
          key={photo.id}
          url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        />
      );
    });
  } else {
    return (photos = <NotFound />);
  }
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>{photos}</ul>
    </div>
  );
};

export default PhotoContainer;
