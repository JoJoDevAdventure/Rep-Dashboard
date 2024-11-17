// /src/pages/dashboard.jsx
"use client";

import { appState } from "@/appState";
import Header from "../Header";
import SideBar from "../SideBar";
import MainContent from "./MainContent";

const page = () => {

  return (
    <div className="flex h-screen">
      <SideBar/>
      <div className="flex-1 flex flex-col">
        <Header username={appState.username || "User"} />
        <MainContent />
      </div>
    </div>
  );
};

export default page;