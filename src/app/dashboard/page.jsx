"use client";

import { appState } from "@/appState"; // Application state to access the username
import { Calls } from "@/data"; // Mock data for calls
import Header from "../../Components/dashboard/Header"; // Header component
import SideBar from "../../Components/dashboard/SideBar"; // Sidebar navigation component
import MainContent from "./MainContent"; // Main content component

const Dashboard = () => {

  return (
    <div className="flex md:max-h-[100vh] md:overflow-hidden pb-12">
      {/* Sidebar Navigation */}
      <SideBar />
      
      {/* Main Dashboard Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header username={appState.username} />
        
        {/* Main Content Section */}
        <MainContent calls={Calls} />
      </div>
    </div>
  );
};

export default Dashboard;