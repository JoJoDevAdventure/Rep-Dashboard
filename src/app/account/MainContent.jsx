"use client";

import { useTheme } from "@/app/context/themeContext";
import { useState } from "react";

const MainContent = () => {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState(0); // Track the active section/tab

  const sections = [
    "Profile",
    "Security",
    "Notifications",
    "Preferences",
    "Billing",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <div>Profile Settings Content</div>;
      case 1:
        return <div>Security Settings Content</div>;
      case 2:
        return <div>Notification Settings Content</div>;
      case 3:
        return <div>Preferences Settings Content</div>;
      case 4:
        return <div>Billing Information Content</div>;
      default:
        return <div>Select a section to view its content</div>;
    }
  };

  return (
    <div
      className={`flex h-full ${
        isDarkMode ? "bg-s1 text-white" : "bg-white text-black"
      }`}
    >
      {/* Left Sidebar with Tabs */}
      <div
        className={`w-1/4 border-r p-4 ${
          isDarkMode ? "border-p1/10" : "border-p1/30"
        }`}
      >
        <div className="flex flex-col space-y-4">
          {sections.map((section, index) => (
            <button
              key={section}
              className={`px-4 py-2 text-left ${
                activeTab === index
                  ? "bg-orange-500 text-white rounded-md"
                  : isDarkMode
                  ? "text-p4 hover:bg-p1/10"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {section}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
  );
};

export default MainContent;