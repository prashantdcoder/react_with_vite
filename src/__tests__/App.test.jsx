import { render } from "@testing-library/react";
import React from "react"; // <-- Add this if missing
import App from "../App";
import useRickyMartin from "../hooks/useRickyMartin";

jest.mock("../hooks/useRickyMartin");

describe("App component", () => {
  useRickyMartin.mockReturnValue({
    data: {},
    loading: false,
    isSuccess: false,
    fetchRickyMartinData: jest.fn(),
  });

  it("should render app", () => {
    render(<App />);
  });
});
