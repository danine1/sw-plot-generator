import React, { Component } from "react";

const LoadingHOC = WrappedState => {
  return class LoadingHOC extends Component {
    render() {
      return this.props.peoplenames.length === 0 ? (
        <img className="isLoading" />
      ) : (
        <WrappedState {...this.props} />
      );
    }
  };
};

export default LoadingHOC;
