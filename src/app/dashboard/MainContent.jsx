import Tabs from "@/Components/dashboard/Tabs";
import { useState } from "react";
import { useTheme } from "../context/themeContext";
import CallsList from "./CallsList";
import LiveCall from "./LiveCall";

const MainContent = ({ calls }) => {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState(0); // 0 = Calls history, 1 = LIVE Call
  const [currentCall, setCurrentCall] = useState(null); // Track the currently active call

  const handleCall = (call) => {
    setCurrentCall(call); // Set the selected call as current
    setActiveTab(1); // Switch to the LIVE Call tab
  };

  return (
    <div
      className={`p-6 space-y-4 h-full ${
        isDarkMode ? "bg-s1 bg-opacity-[98%]" : "bg-white"
      }`}
    >
      {/* Tabs Section */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Render based on active tab */}
      {activeTab === 0 && (
        <CallsList calls={calls} onCall={handleCall} OnView={(call) => console.log("Viewing:", call)} isDarkMode={isDarkMode}/>
      )}

      {activeTab === 1 && (
        <LiveCall call={currentCall} isActive={activeTab === 1} isDarkMode={isDarkMode}/>
      )}
    </div>
  );
};

export default MainContent;