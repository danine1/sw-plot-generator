import React, { Component } from "react";
import spinner from "../assets/images/lightsaber.gif";

const LoadingHOC = WrappedState => {
  return class LoadingHOC extends Component {
    render() {
      return this.props.peoplenames.length === 0 ? (
        <img className="isLoading" src={spinner} alt="spinner" />
      ) : (
        <WrappedState {...this.props} />
      );
    }
  };
};

export default LoadingHOC;
