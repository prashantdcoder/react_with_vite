/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { BadgeStyles } from "../../utils/appUtils";

const withBadge = (WrappedComponent, status) => {
  return function BadgeComponent(props) {
    return (
      <>
        <WrappedComponent {...props} cssClassName={BadgeStyles[status]} />
      </>
    );
  };
};

export default withBadge;
