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

    it("should update latestPostionRef when dragging starts", () => {
        const mockRef = { current: null };
        jest.spyOn(React, "useRef").mockReturnValue(mockRef);
        render(<DragContainer isDraggable={true} items={mockItems} />);
        const dragItemCalls = (DragItem as jest.Mock).mock.calls;
        const firstItem = mockItems[0];
        const firstItemProps = dragItemCalls[0][0];
        const mockEvent = { dataTransfer: { setData: jest.fn() } } as any;
        act(() => {
            firstItemProps.onDragStart(mockEvent, firstItem, 1);
            expect(mockRef.current).toBe(1);
            firstItemProps.onDragOver(mockEvent, firstItem, 0);
            expect(mockRef.current).toBe(null);
        })
    })
});