import React from "react";
import CheckBoxNode from "./CheckBoxNode";
import { render } from "@testing-library/react";
import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("CheckBoxNode Component", () => {

    it("should render correctly", () => {
        const handler = jest.fn();
        render(<CheckBoxNode id={1}
            label="Test Node"
            checked={false}
            onChangeHandler={handler} />
        );
        const checkbox = screen.getByTestId("checkbox-1") as HTMLButtonElement;
        expect(checkbox).toBeInTheDocument();
    });

    it("should render checkbox with label", () => {
        const handler = jest.fn();
        render(<CheckBoxNode id={1}
            label="Test Node"
            checked={false}
            onChangeHandler={handler} />
        );
        const checkbox = screen.getByTestId("checkbox-1") as HTMLButtonElement;
        expect(checkbox).toHaveAttribute("value", "Test Node");
    });

    it("should render checkbox as unchecked by default", () => {
        const handler = jest.fn();
        render(<CheckBoxNode id={1}
            label="Test Node"
            checked={false}
            onChangeHandler={handler} />
        );
        const checkbox = screen.getByTestId("checkbox-1") as HTMLButtonElement;
        expect(checkbox).not.toBeChecked();
    });

    it("should render with checked prop set to true", () => {
        const handler = jest.fn();
        render(<CheckBoxNode id={1}
            label="Test Node"
            checked={true}
            onChangeHandler={handler} />
        );
        expect(screen.getByTestId("checkbox-1")).toBeChecked();
    });

    it("should render with checked prop set to false", () => {
        const handler = jest.fn();
        render(<CheckBoxNode id={1}
            label="Test Node"
            checked={false}
            onChangeHandler={handler} />
        );
        expect(screen.getByTestId("checkbox-1")).not.toBeChecked();
    });

    it("Should call onChangeHandler when the checkbox is clicked", () => {
        const handler = jest.fn();
       const { getByTestId } = render(<CheckBoxNode id={1}
            label="Test Node"
            checked={true}
            onChangeHandler={handler} />
        );
        const checkbox: HTMLButtonElement = getByTestId("checkbox-1") as HTMLButtonElement;
        fireEvent.click(checkbox);
        expect(handler).toHaveBeenCalledWith(1, false);
        expect(checkbox).toBeChecked();
    });

    it("should update checkbox state visually when clicked", () => {
        const handleChange = jest.fn();
        const { getByTestId, rerender } = render(
            <CheckBoxNode id={1} label="Test Item" checked={true} onChangeHandler={handleChange} />
        );

        const checkbox = getByTestId("checkbox-1");
        fireEvent.click(checkbox);
        expect(handleChange).toHaveBeenCalledWith(1, false);
        expect(checkbox).toBeChecked();

        rerender(<CheckBoxNode id={1} label="Test Item" checked={false} onChangeHandler={handleChange} />);
        fireEvent.click(checkbox);
        expect(handleChange).toHaveBeenCalledWith(1, true);
        expect(checkbox).not.toBeChecked();
    });
});