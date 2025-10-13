import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import checkboxData from "../../data/testData/checkboxData.json";
import { ICheckBoxNode } from "../../utils/types";
import NestedCheckBoxPreview from "./NestedCheckBoxPreview";
import CheckboxTree from "../CheckboxTree/CheckboxTree";

describe("NestedCheckBoxPreview Component", () => {

    /**
     *  Renders nested child checkboxes correctly               Done
        Updates parent and child checked state on click
        Handles deeply nested checkbox structures
        Calls onChangeHandler with correct arguments
        Displays correct labels for all nodes                   Done
        Unchecks all children when parent is unchecked
        Preserves checked state after multiple interactions
        Handles empty children gracefully
        Renders with custom initial checked states
     */

    it("should render nested checkboxes correctly", () => {
        const handler = jest.fn();
        const nestedData: ICheckBoxNode[] = getNestedData();
        render(<NestedCheckBoxPreview checkboxData={nestedData} onChangeHandler={handler} />);
        const elements: HTMLElement[] = screen.getAllByTestId("nested-checkbox-preview");
        expect(elements.length).toBe(4);
        for (let element of elements) {
            expect(element).toBeInTheDocument();
        }
    });

    it("should call onChangeHandler when a checkbox is clicked", () => {
        const handler = jest.fn();
        const nestedData: ICheckBoxNode[] = getNestedData();
        render(<NestedCheckBoxPreview checkboxData={nestedData} onChangeHandler={handler} />);
        const elements: HTMLElement[] = screen.getAllByTestId("nested-checkbox-preview");
        const checkbox = elements[0].querySelector('button[data-testid="checkbox-1"]') as HTMLButtonElement;
        fireEvent.click(checkbox);
        expect(handler).toHaveBeenCalledTimes(1);
        expect(checkbox).toBeChecked();
    });

    it("should display correct labels for all nodes", () => {
        const handler = jest.fn();
        const nestedData: ICheckBoxNode[] = [
            {
                id: 100, label: "Java",
                checked: false,
                children: [
                    { id: 2, label: "Spring", checked: false, children: [] },
                    { id: 3, label: "Struts", checked: false, children: [] },
                    { id: 4, label: "Hibernate", checked: false, children: [] },
                ]
            },
        ];
        render(<NestedCheckBoxPreview checkboxData={nestedData} onChangeHandler={handler} />);
        // Flatten all labels from nestedData
        const collectLabels = (nodes: ICheckBoxNode[]): string[] => {
            return nodes.reduce<any>((acc, node) => {
                acc.push({ id: node.id, label: node.label });
                if (node.children && node.children.length > 0) {
                    acc.push(...collectLabels(node.children));
                }
                return acc;
            }, []);
        }
        const allNodes: any = collectLabels(nestedData);
        allNodes.forEach(n => {
            const element = screen.getByTestId(`nested-container-${n.id}`);
            const checkbox = element.querySelector(`button[data-testid="checkbox-${n.id}"]`) as HTMLInputElement;
            expect(element).toBeInTheDocument();
            expect(checkbox).toBeInTheDocument();
            expect(checkbox).toHaveValue(n.label);
        });
    });

    it("should updates parent and child checked state on click", () => {
        let nestedData: ICheckBoxNode[] = [
            {
                id: 1,
                label: "fruits",
                checked: false,
                children: [
                    {
                        id: 44,
                        label: "apple",
                        checked: false,
                        children: []
                    },
                    {
                        id: 45,
                        label: "mango",
                        checked: false,
                        children: []
                    }
                ]
            }
        ];
        const handlerMock = jest.fn();
        let renderResult;
        const handler = (id: number, checked: boolean) => {
            handlerMock(id, checked);

            const checkAll = (node: ICheckBoxNode): ICheckBoxNode => ({
                ...node,
                checked,
                children: node.children ? node.children.map(checkAll) : []
            });
            const updateCheckedState = (nodes: ICheckBoxNode[], targetId: number, checked: boolean): ICheckBoxNode[] => {
                return nodes.map(node => {
                    if (node.id === targetId) {
                        return checkAll({ ...node, checked });
                    }
                    return {
                        ...node,
                        children: node.children ? updateCheckedState(node.children, targetId, checked) : []
                    };
                });
            };
            nestedData = updateCheckedState(nestedData, id, checked);
            renderResult.rerender(<NestedCheckBoxPreview checkboxData={nestedData} onChangeHandler={handler} />);
        };

        renderResult = render(<NestedCheckBoxPreview checkboxData={nestedData} onChangeHandler={handler} />);
        renderResult.rerender(<NestedCheckBoxPreview checkboxData={nestedData} onChangeHandler={handler} />);
        const fruitElement: HTMLElement = screen.getByTestId("nested-container-1");
        const fruitCheckbox = fruitElement.querySelector('button[data-testid="checkbox-1"]') as HTMLButtonElement;
        fireEvent.click(fruitCheckbox);
        expect(handlerMock).toHaveBeenCalledTimes(1);
        expect(fruitCheckbox).toBeChecked();


        const appleElement: HTMLElement = screen.getByTestId("nested-container-44");
        const appleCheckbox = appleElement.querySelector('button[data-testid="checkbox-44"]') as HTMLButtonElement;
        expect(appleCheckbox).toBeChecked();

        const mangoElement: HTMLElement = screen.getByTestId("nested-container-45");
        const mangoCheckbox = mangoElement.querySelector('button[data-testid="checkbox-45"]') as HTMLButtonElement;
        expect(mangoCheckbox).toBeChecked();
    });

    const getNestedData = (): ICheckBoxNode[] => {
        return JSON.parse(JSON.stringify(checkboxData)) as ICheckBoxNode[];
    };
});