/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React from "react";

const StatusBadge = ({ status, cssClassName }) => {
  const capitalizeWord = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const upperCaseStatus = capitalizeWord(status);
  return (
    <span className={`status-badge-container ${cssClassName}`}>
      {upperCaseStatus}
    </span>
  );
};

StatusBadge.propTypes = {
  status: PropTypes.string.isRequired,
  cssClassName: PropTypes.string,
};

export default StatusBadge;
