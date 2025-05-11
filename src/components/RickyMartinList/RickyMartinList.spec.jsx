/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import RickyMartinList from "./RickyMartinList";

describe("Component", () => {
  it("should render list correctly", () => {
    const mockList = [
      {
        id: 1,
        name: "Prashant",
        status: "ALIVE",
        gender: "male",
        episode: 56,
        image: "test",
        location: {name: "bangalore"},
        origin: {name: "bangalore"},
      },
    ];
    const { asFragment } = render(<RickyMartinList list={mockList} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
