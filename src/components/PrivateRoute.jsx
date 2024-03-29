import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const token = localStorage.getItem("token");

const PrivateRoute = ({ Component, ...rest }) => {
  if (token !== undefined || token === null) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }
  return <Redirect to="/login" />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.bool.isRequired,
  Component: PropTypes.object,
};

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
});

export default connect(mapStateToProps, {})(PrivateRoute);
