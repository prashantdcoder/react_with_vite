import "./App.css";
import SideNav from "./components/SideNav/SideNav";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import React from "react";

const App = () => {
  return (
    <div className="main-app">
      <SidebarProvider>
        <SidebarTrigger />
        <SideNav />
      </SidebarProvider>
    </div>
  );
};

export default App;
