/* ==================================
            REACT IMPORTS
===================================== */
import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import axios from "axios";

/* ==================================
         COMPONENTS IMPORTS
===================================== */
import apiKey from "../config";
import SearchForm from "./SearchForm";
import Nav from "./Nav";
import PhotoContainer from "./PhotoContainer";
import NotFound from "./NotFound";

class App extends Component {
  constructor() {
    super();
    // Set initial state
    this.state = {
      cats: [],
      dogs: [],
      airplanes: [],
      photos: [],
      loading: false,
      query: "",
    };
  }

  /* ==================================
          LIFECYCLE METHODS
===================================== */
  componentDidMount() {
    this.performSearch("cats");
    this.performSearch("airplanes");
    this.performSearch("dogs");
    this.performSearch();
  }


componentDidUpdate(prevProps, prevState, snapshot) {

    // This function checks the URL to see if its changed, if it has, then it will split the query from the URL 
  const checkURL = (newQuery) => {
    if(newQuery.includes("search")){
      this.performSearch(newQuery.split("/search/"));
    }
  }
    const newQuery = this.props.location.pathname;
    const oldQuery = prevProps.location.pathname;
    if (newQuery !== oldQuery) {
      checkURL(newQuery);
    }
  }

  checkURL = (newQuery) => {
    if(newQuery.includes("search")){
      this.performSearch(newQuery.split("/search/"));
    }
  }


  //In app.js I added a conditional within componentDidUpdate if the new search query was === the previous search query, if not I re-called the performSearch function accordingly.

  /* ==================================
            API FETCH
===================================== */
  performSearch = (query) => {
    this.setState({ loading: true });
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
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

  /* ==================================
            RENDER METHOD
===================================== */
  render() {
    return (

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

    );
  }
}

export default withRouter(App);
