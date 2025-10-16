import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideNav from "./components/SideNav/SideNav";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import React from "react";
import CheckboxProblemPage from "./pages/CheckboxProblemPage";
import ThemeChangeProblemPage from "./pages/ThemeChangeProblemPage";
import ThemeProvider from "./context/ThemeToggleContext";

const App: React.FC = () => {
  return (
    <div className="main-app">
      <ThemeProvider>
        <SidebarProvider>
          <SidebarTrigger />
          <SideNav />
          <Routes>
            <Route path="/" element={<CheckboxProblemPage />} />
            <Route path="/theme-problem" element={<ThemeChangeProblemPage />} />
          </Routes>
        </SidebarProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
