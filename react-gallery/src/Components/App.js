import React, { Component, useState } from "react";

import axios from "axios";
import apiKey from "../config";
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
    // this.performSearch("cake");
    // this.performSearch("dogs");
  }

  performSearch = (query ) => {
      axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=12&format=json&nojsoncallback=1`
      )
      .then((data) => data.data)
      .then((response) => {

        // console.log( response.photos.photo);
        this.setState({
          photos: response.photos.photo,
          loading: false,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    return (

      <div className="container">
        {/* Passing prop to SearchForm.js */}
        <SearchForm onSearch={this.performSearch} />
        {/*  */}
        <Nav />
        {/* Passing prop to PhotoContainer.js */}
        <PhotoContainer data={this.state.photos} />
      </div>
    );
  }
}
