/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React from "react";

const GenderIcon = ({ gender }) => {
  return gender === "male" ? (
    <span style={{ fontSize: "20px" }}>&#128104;</span>
  ) : (
    <span style={{ fontSize: "20px" }}>&#128105;</span>
  );
};

GenderIcon.propTypes = {
  gender: PropTypes.string.isRequired,
};

export default GenderIcon;
