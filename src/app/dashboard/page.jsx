// /src/pages/dashboard.jsx
"use client";

import { appState } from "@/appState";
import { Calls } from "@/data";
import Header from "./Header";
import MainContent from "./MainContent";
import SideBar from "./SideBar";

const Dashboard = () => {

  return (
    <div className="flex max-h-[100vh] overflow-hidden">
      <SideBar/>
      <div className="flex-1 flex flex-col">

        <Header username={appState.username} />
        <MainContent calls={Calls}/>
      </div>
    </div>
  );
};

export default Dashboard;