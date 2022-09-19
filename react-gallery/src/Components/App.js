// imports for react, react-router-dom, and components
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

// Components
import apiKey from "../config";
import SearchForm from "./SearchForm";
import Nav from "./Nav";
import PhotoContainer from "./PhotoContainer";
import NotFound from "./NotFound";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      dogs: [],
      airplanes: [],
      photos: [],
      loading: true,
      query: "",
    };
  }

  componentDidMount() {
    this.performSearch("cats");
    this.performSearch("airplanes");
    this.performSearch("dogs");
    this.performSearch();
  }

  performSearch = (query) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        // console.log(response);
        if (query === "cats") {
          this.setState({ cats: response.data.photos.photo, loading: false });
        } else if (query === "dogs") {
          this.setState({ dogs: response.data.photos.photo, loading: false });
        } else if (query === "airplanes") {
          this.setState({
            airplanes: response.data.photos.photo,
            loading: false,
          });
        } else {
          this.setState({
            photos: response.data.photos.photo,
            loading: false,
            query: query,
          });
        }
      })
      .catch((error) => {
        console.log(
          "There was an error while fetching and parsing the data :( ",
          error
        );
      });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          {/* Passing prop to SearchForm.js */}
          <SearchForm onSearch={this.performSearch} />
          <Nav />
          {this.state.loading ? (
            <p>You are loading new data, please wait...</p>
          ) : (
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <PhotoContainer
                    data={this.state.photos}
                    title={this.state.query}
                    query={this.state.query}
                  />
                )}
              />
              <Route
                path="/search/:query"
                render={() => (
                  <PhotoContainer
                    data={this.state.photos}
                    query={this.state.query}
                  />
                )}
              />
              <Route
                exact
                path="/cats"
                render={() => (
                  <PhotoContainer
                    data={this.state.cats}
                    title="cats"
                    query="cats"
                  />
                )}
              />
              <Route
                exact
                path="/dogs"
                render={() => (
                  <PhotoContainer
                    data={this.state.dogs}
                    title="dogs"
                    query="dogs"
                  />
                )}
              />
              <Route
                exact
                path="/airplanes"
                render={() => (
                  <PhotoContainer
                    data={this.state.airplanes}
                    title="Airplanes"
                    query="Airplanes"
                  />
                )}
              />
              <Route render={() => <NotFound />} />
            </Switch>
          )}
        </div>
      </BrowserRouter>
    );
  }
}
