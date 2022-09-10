import React, { Component } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import Nav from "./Nav";
import PhotoContainer from "./PhotoContainer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
    };
    console.log(
      "DEBUG: App -> constructor",
      " | State: ",
      this.state.photos.photos
    );
  }

  performSearch = (query) => {
    // let apiKey = "37ec92b1b2e7bb234eb55808fbb5c687";
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=37ec92b1b2e7bb234eb55808fbb5c687&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .this((response) => {
        this.setState({ photos: response.data.photos.photo });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
    console.log(
      "DEBUG: App.js -> axios.get",
      " | response: ",
      this.state.photos
    );
  };

  render() {
    console.log("DEBUG: App -> render", " | api: ", this.state.photos);
    return (
      <div className="container">
        <SearchForm onSearch={this.performSearch} />
        <Nav />
        <PhotoContainer data={this.state.photos} />
      </div>
    );
  }
}
