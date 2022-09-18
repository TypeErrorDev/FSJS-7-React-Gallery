import React, { Component, useState } from "react";

import axios from "axios";
import SearchForm from "./SearchForm";
import Nav from "./Nav";
import PhotoContainer from "./PhotoContainer";



const App = () => {
  const [photos, setPhotos] = useState([]);


  function componentDidMount() {
    performSearch();
    performSearch("cats");
    performSearch("cake");
    performSearch("dogs");
  }

  function performSearch(){

  }


  // function performSearch = (query ) => {
  //   axios
  //     .get(
  //       `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=37ec92b1b2e7bb234eb55808fbb5c687&tags=${query}&per_page=12&format=json&nojsoncallback=1`
  //     )
  //     .then((data) => data.data)
  //     .then((response) => {
  //
  //       // console.log( response.photos.photo);
  //       this.setState({
  //         photos: response.photos.photo,
  //         loading: false,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching and parsing data", error);
  //     });
  // };

    return (
      <div className="container">
        {/* Passing prop to SearchForm.js */}
        <SearchForm onSearch={performSearch} />
        {/*  */}
        <Nav />
        {/* Passing prop to PhotoContainer.js */}
        <PhotoContainer data={this.state.photos} />
      </div>
    );
}
export default App;