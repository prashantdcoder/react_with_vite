import { fireEvent, screen, render } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import ThemeToggle from "./ThemeToggle";
import ThemeProvider from "../../context/ThemeToggleContext";
import useTheme from "../../hooks/useTheme";
import { ThemeMode } from "../../utils/types";

jest.mock("lucide-react", () => ({
    Sun: () => <div data-testid="sun-icon" />,
    Moon: () => <div data-testid="moon-icon" />,
}));

jest.mock("../../hooks/useTheme");

const mockedUseTheme = useTheme as jest.MockedFunction<typeof useTheme>;

beforeEach(() => {
    jest.clearAllMocks();
});

describe('ThemeToggle component', () => {

    it("should render component correctly", () => {
        mockedUseTheme.mockReturnValue({ theme: ThemeMode.LIGHT, toggleTheme: jest.fn() });
        const { container } = render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        );
        expect(container).toBeInTheDocument();
    });

    it("should display “Switch to Light theme” when the current theme is dark", () => {
        mockedUseTheme.mockReturnValue({ theme: ThemeMode.DARK, toggleTheme: jest.fn() });
        const { container } = render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        );
        const toggleButton: HTMLButtonElement = container.querySelector('button[data-testid="toggle-btn"]') as HTMLButtonElement;
        expect(toggleButton).toBeInTheDocument();
        expect(toggleButton.textContent).toContain('Switch to Light theme');
    });

    it("should display “Switch to Dark theme” when the current theme is light", () => {
        mockedUseTheme.mockReturnValue({ theme: ThemeMode.LIGHT, toggleTheme: jest.fn() });
        const { container } = render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        );
        const toggleButton: HTMLButtonElement = container.querySelector('button[data-testid="toggle-btn"]') as HTMLButtonElement;
        expect(toggleButton).toBeInTheDocument();
        expect(toggleButton.textContent).toContain('Switch to Dark theme');
    });

    it("should render sun icon when theme is dark", () => {
        mockedUseTheme.mockReturnValue({ theme: ThemeMode.DARK, toggleTheme: jest.fn() });
        const { container } = render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        );
        expect(screen.getByTestId("sun-icon")).toBeInTheDocument();
    })

    it("should render moon icon when theme is light", () => {
        mockedUseTheme.mockReturnValue({ theme: ThemeMode.LIGHT, toggleTheme: jest.fn() });
        const { container } = render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        );
        const toggleButton: HTMLButtonElement = container.querySelector('button[data-testid="toggle-btn"]') as HTMLButtonElement;
        expect(screen.getByTestId("moon-icon")).toBeInTheDocument();
    })

    it("should call toggleTheme when the button is clicked", () => {
        const mockToggleTheme = jest.fn();
        mockedUseTheme.mockReturnValue({ theme: ThemeMode.LIGHT, toggleTheme: mockToggleTheme });

        const { container } = render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        );
        const toggleButton: HTMLButtonElement = container.querySelector('button[data-testid="toggle-btn"]') as HTMLButtonElement;
        fireEvent.click(toggleButton);
        expect(mockToggleTheme).toHaveBeenCalled();
    })
});