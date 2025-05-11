import { render } from "@testing-library/react";
import React from "react";
import GenderIcon from "./GenderIcon";

describe("GenderIcon component", () => {

  it("renders the female gender icon correctly", () => {
    const { asFragment } = render(<GenderIcon gender="female" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the male gender icon correctly", () => {
    const { asFragment } = render(<GenderIcon gender="male" />);
    expect(asFragment()).toMatchSnapshot();
  });

});
