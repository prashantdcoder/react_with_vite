import { fireEvent, render } from "@testing-library/react";
import React from "react";
import DragItem from "./DragItem";
import items from "../../data/testData/dragAndDropListData.json";

describe("DragItem Component", () => {

    const mockItem = [...items][0];
    /**
     * should render DragItem component with correct title and content
should have draggable attribute true when isDraggable is true
should have draggable attribute false when isDraggable is false
should call onDragStart when drag enters the element
should call onDragOver when drag ends the element
should render correct test ids for title and content elements
should render outlined Item variant correctly
should attach ref to the div element
should not trigger drag events when isDraggable is false
should match snapshot for consistent UI rendering
     */

    it("should render DragItem component correctly", () => {
        const onDragMock = jest.fn();
        const onDragOverMock = jest.fn();
        const { container } = render(<DragItem
            isDraggable={true}
            item={mockItem}
            position={0}
            onDragStart={onDragMock}
            onDragOver={onDragOverMock} />);
        expect(container).toBeInTheDocument();
    });

    it("should render DragItem component with correct title and content", () => {
        const onDragMock = jest.fn();
        const onDragOverMock = jest.fn();
        const { getByTestId } = render(<DragItem
            isDraggable={true}
            item={mockItem}
            position={0}
            onDragStart={onDragMock}
            onDragOver={onDragOverMock} />);
        expect(getByTestId(`drag-item-title-${mockItem.id}`)).toHaveTextContent(mockItem.heading);
        expect(getByTestId(`drag-item-content-${mockItem.id}`)).toHaveTextContent(mockItem.content);
    });

    it("should call onDragStart when drag enters the element", () => {
        const onDragStartMock = jest.fn()
        const onDragOverMock = jest.fn();
        const { getByTestId } = render(<DragItem
            isDraggable={true}
            item={mockItem}
            position={0}
            onDragStart={onDragStartMock}
            onDragOver={onDragOverMock} />);

        fireEvent.dragEnter(getByTestId(`drag-item-${mockItem.id}`));
        expect(onDragStartMock).toHaveBeenCalledTimes(1);
    });

    it("should call onDragOver when drag ends the element", () => {
        const onDragStartMock = jest.fn()
        const onDragOverMock = jest.fn();
        const { getByTestId } = render(<DragItem
            isDraggable={true}
            item={mockItem}
            position={0}
            onDragStart={onDragStartMock}
            onDragOver={onDragOverMock} />);

        fireEvent.dragEnter(getByTestId(`drag-item-${mockItem.id}`));
        fireEvent.dragEnd(getByTestId(`drag-item-${mockItem.id}`));
        expect(onDragOverMock).toHaveBeenCalledTimes(1);
    });
});