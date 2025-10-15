import { render } from "@testing-library/react";
import SideNav from "./SideNav";
import React from "react";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";

xdescribe("SideNav component", () => {
  it("should render the sidebar correctly", () => {
    render(
      <SidebarProvider>
        <SidebarTrigger />
        <SideNav />
      </SidebarProvider>
    );
  });
});
