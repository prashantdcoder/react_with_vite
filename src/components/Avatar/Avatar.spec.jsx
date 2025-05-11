/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import "react";
import Avatar from "./Avatar";

describe("Avatar Component", () => {
  test("renders correctly", () => {
    const { asFragment } = render(<Avatar url={"test"} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
