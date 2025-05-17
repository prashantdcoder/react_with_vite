import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideNav from "./components/SideNav/SideNav";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import FileUploadPage from "./pages/FileUploadPage";
import React from 'react'

const App = () => {
  return (
    <div className="main-app">
      <SidebarProvider>
        <SidebarTrigger />
        <SideNav />
        <Routes>
          <Route path="/" element={<FileUploadPage />} />
        </Routes>
      </SidebarProvider>
    </div>
  );
};

export default App;
