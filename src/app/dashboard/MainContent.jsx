import Tabs from "@/Components/dashboard/Tabs"; // Tabs component for navigation between sections
import { Calls } from "@/data"; // Mock call data
import { useState } from "react"; // React state management
import { useTheme } from "../context/themeContext"; // Theme context for dark/light mode
import CallsList from "./CallsList"; // Component to display the list of calls
import LiveCall from "./LiveCall"; // Component to handle live call details

const MainContent = ({ calls }) => {
  const { isDarkMode } = useTheme(); // Get the current theme (dark or light mode)
  const [activeTab, setActiveTab] = useState(0); // Tab state: 0 = Calls History, 1 = LIVE Call
  const [currentCall, setCurrentCall] = useState(Calls[0]); // State to track the currently active call

  // Handle switching to a call
  const handleCall = (call) => {
    setCurrentCall(call); // Update the current call
    setActiveTab(1); // Switch to the LIVE Call tab
  };

  return (
    <div
      className={`p-6 space-y-4 h-full ${
        isDarkMode ? "bg-s1 bg-opacity-[98%]" : "bg-white" // Dynamic background based on theme
      }`}
    >
      {/* Tabs Section */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Conditional rendering based on the active tab */}
      {activeTab === 0 && (
        <CallsList
          calls={calls} // Pass the list of calls
          onCall={handleCall} // Handle initiating a call
          OnView={(call) => console.log("Viewing:", call)} // Placeholder for viewing a call
          isDarkMode={isDarkMode} // Pass theme information
        />
      )}

      {activeTab === 1 && (
        <LiveCall
          call={currentCall} // Pass the currently active call
          isActive={activeTab === 1} // Indicates if the tab is active
          isDarkMode={isDarkMode} // Pass theme information
        />
      )}
    </div>
  );
};

export default MainContent;