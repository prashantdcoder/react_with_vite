/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React from "react";
import Avatar from "../Avatar/Avatar";
import GenderIcon from "../GenderIcon/GenderIcon";
import withBadge from "../hoc/withBadge";
import StatusBadge from "../StatusBadge/StatusBadge";

const RickyMartinListItem = ({ data }) => {
  const {
    name,
    status,
    gender,
    episode,
    image,
    location: { name: locationName },
    origin: { name: originName },
  } = data;
  const statusWithUpperCase = status.toUpperCase();
  const getStatus = (status) => {
    const WithStatusBadge = withBadge(StatusBadge, status);
    return <WithStatusBadge status={status} />;
  };

  return (
    <div className="ricky-martin-list-item-container">
      <div className="item-group-container d-flex justify-space-btwn">
        {getStatus(statusWithUpperCase)}
        <GenderIcon gender={gender.toLowerCase()} />
      </div>
      <div className="item-group-container d-flex justify-center">
        <Avatar url={image} />
      </div>
      <div className="item-group-container d-flex justify-center flex-col align-center profile-container">
        <h3 className="profile-item">{name}</h3>
        <span className="profile-item">{originName}</span>
        <span className="profile-item">{locationName}</span>
      </div>
      <div className="item-group-container meta-container">
        <span>Episode</span>
        <span>{episode.length}</span>
      </div>
      <div className="item-group-container footer">
        <span>View Profile</span>
      </div>
    </div>
  );
};

RickyMartinListItem.propTypes = {
  data: PropTypes.object,
  name: PropTypes.string,
  status: PropTypes.string,
  gender: PropTypes.string,
  episode: PropTypes.array,
  image: PropTypes.string,
  location: PropTypes.string,
  origin: PropTypes.string,
};

export default RickyMartinListItem;
