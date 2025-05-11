/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RickyMartinListItem from "./RickyMartinListItem";

describe('RickyMartinListItem Component', () => {
  it('should render list item correctly', () => {
    const item =  {
        name: "John",
        status: "ALIVE",
        gender: "male",
        episode: 56,
        image: "test",
        location: {name: "bangalore"},
        origin: {name: "bangalore"},
      };
    const { asFragment } = render(<RickyMartinListItem data={item}  />);
    expect(asFragment()).toMatchSnapshot();
  });
});