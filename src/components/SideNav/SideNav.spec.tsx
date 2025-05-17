import { render } from "@testing-library/react";
import SideNav from "./SideNav";
import React from "react";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";

describe("SideNav", () => {
  it("renders the sidebar", () => {
    render(
      <SidebarProvider>
        <SidebarTrigger />
        <SideNav />
      </SidebarProvider>
    );
  });
});
