"use client";

import { appState } from "@/appState"; // Application state to access the username
import { Calls } from "@/data"; // Mock data for calls
import { useRouter } from "next/navigation"; // For client-side navigation
import { useEffect } from "react"; // React hook to handle side effects
import Header from "./Header"; // Header component
import MainContent from "./MainContent"; // Main content component
import SideBar from "./SideBar"; // Sidebar navigation component

const Dashboard = () => {
  const router = useRouter(); // Next.js router for navigation

  useEffect(() => {
    // Redirect user to the home page if no username is found in the app state
    if (!appState.username) {
      router.push("/"); // Redirects to the root ("/") if not logged in
    }
  }, [router]); // Dependency ensures this runs whenever `router` changes

  return (
    <div className="flex max-h-[100vh] overflow-hidden">
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