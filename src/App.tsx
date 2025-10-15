import { Route, Routes } from "react-router-dom";
import "./App.css";
import CheckboxTree from "./components/CheckboxTree/CheckboxTree";
import SideNav from "./components/SideNav/SideNav";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";

import React from "react";
import CheckboxProblemPage from "./pages/CheckboxProblemPage";

const App: React.FC = () => {
  return (
    <div className="main-app">
      <SidebarProvider>
        <SidebarTrigger />
        <SideNav />
        <Routes>
          <Route path="/" element={<CheckboxProblemPage />} />
        </Routes>
      </SidebarProvider>
    </div>
  );
};

export default App;
