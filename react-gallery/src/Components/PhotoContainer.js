import React from "react";
import Photos from "./Photos";
import NotFound from "./NotFound";

const PhotoContainer = (props) => {
  const results = props.data;
  let photos;
  if (results.length > 0) {
    photos = results.map((photo) => {
      // console.log(photo);
      return (
        // pass props to Photos component
        <Photos
          id={photo.id}
          server={photo.server}
          secret={photo.secret}
          key={photo.id}
          title={photo.title}
        />
      );
    });
  } else {
    photos = <NotFound />;
  }

  return (
    <div className="photo-container">
      <h2>{props.query}</h2>
      <ul>{photos}</ul>
    </div>
  );
};
export default PhotoContainer;
