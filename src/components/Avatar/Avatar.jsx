/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const Avatar = ({ url }) => {
  return (
    <div className="avatar-container">
      <img loading="lazy" src={url} alt="avatar_img" />;
    </div>
  );
};

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Avatar;
