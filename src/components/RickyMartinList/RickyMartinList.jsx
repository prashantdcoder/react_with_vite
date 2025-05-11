/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React from "react";

import RickyMartinListItem from "../RickyMartinListItem/RickyMartinListItem";

const RickyMartinList = ({ list }) => {
  const listItems = list && list.map((item) => (
    <RickyMartinListItem key={item.id} data={item} />
  ));
  return <div className="list-container">{listItems}</div>;
};
RickyMartinList.propTypes = {
  list: PropTypes.array,
};
export default RickyMartinList;
