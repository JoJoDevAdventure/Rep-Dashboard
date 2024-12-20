"use client";

import { useTheme } from "@/app/context/themeContext"; // Theme context for dark/light mode
import { appState } from "@/appState"; // Application state to access the username
import Humphry from "@/Components/Humphry";
import { Calls } from "@/data"; // Mock data for calls
import Head from "next/head";
import Header from "../../../Components/dashboard/Header"; // Header component
import SideBar from "../../../Components/dashboard/SideBar"; // Sidebar navigation component
import MainContent from "./MainContent"; // Main content component

const page = () => {
  const { isDarkMode } = useTheme(); // Get the current theme (dark or light mode)

  return (
    <div className="flex md:max-h-[100vh] pb-12 md:pb-0 md:overflow-y-scroll">
      <Head>
        <title>ReplicAIDE Demo</title>
        <meta name="description" content="A brief description of the page" />
      </Head>
      <Humphry />

      {/* Sidebar Navigation */}
      <SideBar />

      {/* Main Dashboard Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header username={appState.username} />

        {/* Main Content Section */}
        <MainContent calls={Calls} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default page;
