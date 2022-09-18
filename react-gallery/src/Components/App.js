import React, { Component, useState } from "react";

import axios from "axios";
import apiKey from "../config";
import SearchForm from "./SearchForm";
import Nav from "./Nav";
import PhotoContainer from "./PhotoContainer";
import {BrowserRouter} from "react-router-dom";



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
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
        .then((response)=> {
          if(query === "cats"){
            this.setState({ cats: response.data.photos.photo, loading: false });
          }else if (query === "dogs"){
            this.setState({ dogs: response.data.photos.photo, loading: false });
          }else if (query === "computers"){
            this.setState({ computers: response.data.photos.photo, loading: false });
          }else {
            this.setState({
              photos: response.data.photos.photo,
              loading: false,
              query: query,
            });
          }
        })
      // .then((data) => data.data)
      // .then((response) => {
      //
      //   // console.log( response.photos.photo);
      //   this.setState({
      //     photos: response.photos.photo,
      //     loading: false,
      //   });
      // })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    return (
  <BrowserRouter>
      <div className="container">
        {/* Passing prop to SearchForm.js */}
        <SearchForm onSearch={this.performSearch} />
        {/*  */}
        <Nav />
        {/* Passing prop to PhotoContainer.js */}
        <PhotoContainer data={this.state.photos} />
      </div>
  </BrowserRouter>
    );
  }
}
