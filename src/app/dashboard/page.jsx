// /src/pages/dashboard.jsx
"use client";

import { appState } from "@/appState";
import Header from "./Header";
import MainContent from "./MainContent";
import SideBar from "./SideBar";

const Dashboard = () => {

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

export default Dashboard;