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
    })

    it("should render checkbox as unchecked by default", () => {
        const handler = jest.fn();
        render(<CheckBoxNode id={1}
            label="Test Node"
            checked={false}
            onChangeHandler={handler} />
        );
        const checkbox = screen.getByTestId("checkbox-1") as HTMLButtonElement;
        expect(checkbox).not.toBeChecked();
    })

    it("should toggle checkbox state on click", () => {
        const handler = jest.fn().mockImplementation((id: number, checked: boolean) => { });
        render(<CheckBoxNode id={1}
            label="Test Node"
            checked={false}
            onChangeHandler={handler} />
        );
        const checkbox:HTMLButtonElement = screen.getByTestId("checkbox-1") as HTMLButtonElement;
        fireEvent.click(checkbox);
        expect(handler).toHaveBeenCalledWith(1, true);
        // expect(checkbox).toBeChecked();

    });
});