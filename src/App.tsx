import "./App.css";
import React from "react";
import CheckboxTree from "./components/CheckboxTree/CheckboxTree";
import SideNav from "./components/SideNav/SideNav";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { permissions, printers } from "./data/appData";

const App = () => {
  return (
    <div className="main-app">
      <SidebarProvider>
        <SidebarTrigger />
        <SideNav />
        <div>
          <CheckboxTree initialData={permissions}  />
        </div>
      </SidebarProvider>
    </div>
  );
};

export default App;
