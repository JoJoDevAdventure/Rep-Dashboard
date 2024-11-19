"use client";

import { appState } from "@/appState";
import { Calls } from "@/data";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import SideBar from "./SideBar";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if there's a logged-in user
    if (!appState.username) {
      router.push("/"); // Redirect to the home page
    }
  }, [router]);

  return (
    <div className="flex max-h-[100vh] overflow-hidden">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Header username={appState.username} />
        <MainContent calls={Calls} />
      </div>
    </div>
  );
};

export default Dashboard;