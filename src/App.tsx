import { Route, Routes } from "react-router-dom";
import "./App.css";
import CheckboxTree from "./components/CheckboxTree/CheckboxTree";
import SideNav from "./components/SideNav/SideNav";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { permissions } from "./data/appData";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="main-app">
      <SidebarProvider>
        <SidebarTrigger />
        <SideNav />
        <Routes>
          <Route path="/" element={<CheckboxTree initialData={permissions}  />} />
        </Routes>
        <div>
          
        </div>
      </SidebarProvider>
    </div>
  );
};

export default App;
