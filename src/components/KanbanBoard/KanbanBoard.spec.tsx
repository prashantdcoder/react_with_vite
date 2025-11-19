import { render } from "@testing-library/react";
import React from "react";
import KanbanBoard from "./KanbanBoard";
import KanbanProvider from "../../context/KanbanContext";

describe("KanbanBoard Component", () => {

    jest.mock('../../hooks/useKanban', () => {
        return {
            __esModule: true,
            default: jest.fn(),
        };
    });

    jest.mock('../KanbanColumn/KanbanColumn', () => (<div>kanban column</div>));

    it("should render KanbanBoard component correctly", () => {
        const {container} = render(
            <KanbanProvider title="Test Kanban Board" columns={[]}>
                <KanbanBoard />
            </KanbanProvider>
        );
        expect(container).toBeInTheDocument();
    });
})