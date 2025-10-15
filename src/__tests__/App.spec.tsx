import React from 'react';
import { render } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from "react-router-dom";

describe("App component", () => {
  it("should render app", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
