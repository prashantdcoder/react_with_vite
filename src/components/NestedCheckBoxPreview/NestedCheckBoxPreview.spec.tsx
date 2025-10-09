import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import checkboxData from "../../data/testData/checkboxData.json";
import { ICheckBoxNode } from "../../utils/types";
import NestedCheckBoxPreview from "./NestedCheckBoxPreview";

describe("NestedCheckBoxPreview Component", () => {

    /**
     *  Renders nested child checkboxes correctly - Done
        Updates parent and child checked state on click
        Handles deeply nested checkbox structures
        Calls onChangeHandler with correct arguments
        Displays correct labels for all nodes
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
        const checkbox = elements[0].querySelector('button[data-testid="checkbox-fruits"]') as HTMLInputElement;
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
                acc.push({id: node.id, label: node.label});
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

    const getNestedData = (): ICheckBoxNode[] => {
        return JSON.parse(JSON.stringify(checkboxData)) as ICheckBoxNode[];
    };
});