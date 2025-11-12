import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import DragContainer from "./DragContainer";
import dragAndDropList from "../../data/testData/dragAndDropListData.json";
import DragItem from "../DragItem/DragItem";

jest.mock("../DragItem/DragItem", () => jest.fn(() => <div data-testid="drag-item">Mock Item</div>));

describe("DragContainer Component", () => {

    const mockItems = [...dragAndDropList];

    beforeEach(() => {
        jest.clearAllMocks();
    });
    /**
    

should update latestPostionRef when dragging starts
should call onDragStart with correct item and position
should prevent default behavior during onDragOver
should reorder items correctly when dragged over another item
should update state with new item order after drag over
should render DragItem components with correct props
should maintain item keys correctly during reordering
should not reorder items if dragged over the same position
should match snapshot before and after drag reorder
should support toggling draggable behavior via isDraggable prop
     */

    it("should render DragContainer component", () => {
        const { container } = render(<DragContainer isDraggable={true} items={[]} />);
        expect(container).toBeInTheDocument();
    });

    it("should initialize state with items from props", () => {
        const { getAllByTestId } = render(<DragContainer isDraggable={true} items={mockItems} />);
        const allItems = getAllByTestId("drag-item");
        expect(allItems.length).toEqual(mockItems.length);
        for (let item of allItems) {
            expect(item).toBeInTheDocument();
        }
    })

    it("should call onDragStart and onDragOver with correct item and position", () => {
        render(<DragContainer isDraggable={true} items={mockItems} />);
        const dragItemCalls = (DragItem as jest.Mock).mock.calls;
        const firstItem = mockItems[0];
        const firstItemProps = dragItemCalls[0][0];
        const mockEvent = { dataTransfer: { setData: jest.fn() } } as any;

        act(() => {
            firstItemProps.onDragStart(mockEvent, firstItem, 1);
            firstItemProps.onDragOver(mockEvent, firstItem, 0);
        })
        expect(typeof firstItemProps.onDragStart).toBe("function");
        expect(firstItemProps.item).toEqual(firstItem);
        expect(firstItemProps.position).toBe(0);

        const thirdItem = mockItems[2];
        const thirdItemProps = dragItemCalls[2][0];
        act(() => {
            firstItemProps.onDragStart(mockEvent, thirdItem, 1);
            firstItemProps.onDragOver(mockEvent, thirdItem, 2);
        })
        expect(typeof firstItemProps.onDragStart).toBe("function");
        expect(thirdItemProps.item).toEqual(thirdItem);
        expect(thirdItemProps.position).toBe(2);
    });
});