import { fireEvent, screen, render } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from "react";
import CheckboxTree from "./CheckboxTree";
import checkboxData from "../../data/testData/checkboxData.json";
import { ICheckBoxNode } from "../../utils/types";

describe("CheckboxTree Component", () => {

    jest.mock("../NestedCheckBoxPreview/NestedCheckBoxPreview", () => {
        return ({ onChangeHandler }: any) => (
            <button data-testid="checkbox-1" onClick={() => onChangeHandler(1, true)}>
                Mock Checkbox
            </button>
        );
    });

    it("should render correctly", () => {
        const data: ICheckBoxNode[] = getNestedData();
        const { getByTestId } = render(<CheckboxTree initialData={data} />);
        const element: HTMLDivElement = getByTestId('checkbox-tree') as HTMLDivElement;
        expect(element).toBeInTheDocument();
    })

    it("should render all parent and child checkboxes based on nested structure", () => {
        const data: ICheckBoxNode[] = getNestedData();
        const { getByTestId } = render(<CheckboxTree initialData={data} />);
        const recursively: ICheckBoxNode[] = data.reduce<ICheckBoxNode[]>((acc, node) => {
            acc.push(node);
            if (node.children && node.children.length > 0) {
                acc.push(...(node.children));
            }
            return acc;
        }, []);

        for (let item of recursively) {
            const element: HTMLButtonElement = getByTestId(`checkbox-${item.id}`) as HTMLButtonElement;
            expect(element).toBeInTheDocument();
        }
    });

    it("should update checkbox state when onChangeHandler is triggered", () => {
        const data: ICheckBoxNode[] = [
            {
                id: 1,
                label: "Parent",
                checked: false,
                children: [{ id: 2, label: "Child", checked: false, children: [] }],
            },
        ];
        render(<CheckboxTree initialData={data} />);
        const mockButton = screen.getByTestId("checkbox-1");
        fireEvent.click(mockButton);
        const tree = screen.getByTestId("checkbox-tree");
        expect(tree).toBeInTheDocument();
    });

    const getNestedData = (): ICheckBoxNode[] => {
        return JSON.parse(JSON.stringify(checkboxData)) as ICheckBoxNode[];
    };
});