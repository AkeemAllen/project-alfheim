import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Loading = () => {
  return <Loader type="Circles" color="#51cb20" height={100} width={100} />;
};

export default Loading;
