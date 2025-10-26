import React from "react";
import { act, renderHook } from "@testing-library/react";
import useTheme from "../useTheme";
import ThemeProvider from "../../context/ThemeToggleContext";


const wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;

describe("useTheme hook", () => {

    it("should use useTheme hook correctly", () => {
        renderHook(() => useTheme(), { wrapper });
        expect(useTheme).toBeDefined();
    });

    it("should return default theme and toggleTheme function from context", () => {
        const { result } = renderHook(() => useTheme(), { wrapper });
        expect(result.current.theme).toBe("Light");
        expect(typeof result.current.toggleTheme).toBe("function");
    });

    it("should toggle theme correctly when toggleTheme is called", () => {
        const { result } = renderHook(() => useTheme(), { wrapper });
        act(() => {
            result.current.toggleTheme();
        })
        expect(result.current.theme).toBe("Dark");
        act(() => {
            result.current.toggleTheme();
        })
        expect(result.current.theme).toBe("Light");
    });

    it("should throw an error when hook is used outside the ThemeContext provider", () => {
        const consoleError = jest.spyOn(console, "error").mockImplementation(() => { });
        expect(() => {
            renderHook(() => useTheme());
        }).toThrow("useTheme must be used within a ThemeProvider");
        consoleError.mockRestore();
    });

});