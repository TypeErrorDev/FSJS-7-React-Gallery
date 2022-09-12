import React, { Component } from "react";

import axios from "axios";
import SearchForm from "./SearchForm";
import Nav from "./Nav";
import PhotoContainer from "./PhotoContainer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      dogs: [],
      computers: [],
      photos: [],
      loading: true,
    };
  }
  componentDidMount() {
    this.performSearch();
    this.performSearch("cats");
    this.performSearch("cake");
    this.performSearch("dogs");
  }

  performSearch = (query) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=37ec92b1b2e7bb234eb55808fbb5c687&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((data) => data.data)
      .then((response) => {
        console.log(response);
        if (query === "cats") {
          this.setState({ cats: response.data.photos.photo });
        } else if (query === "cake") {
          this.setState({ cake: response.data.photos.photo });
        } else if (query === "dogs") {
          this.setState({ dogs: response.data.photos.photo });
        } else {
          this.setState({ photos: response.data.photos.photo });
        }
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    return (
      <div className="container">
        <SearchForm onSearch={this.performSearch} />
        <Nav />
        {/* <PhotoContainer photos={this.state.photos} /> */}
      </div>
    );
  }
}
