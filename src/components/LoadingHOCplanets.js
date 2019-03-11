import React, { Component } from "react";
import spinner from "../assets/images/lightsaber.gif";

const LoadingHOCplanets = WrappedState => {
  return class LoadingHOCplanets extends Component {
    render() {
      return this.props.planetnames.length === 0 ? (
        <img className="isLoading" src={spinner} alt="spinner" />
      ) : (
        <WrappedState {...this.props} />
      );
    }
  };
};

export default LoadingHOCplanets;
