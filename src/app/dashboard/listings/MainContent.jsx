import { useState } from "react"; // React state management
import CallsList from "../CallsList"; // Component to display the list of calls
import LiveCall from "../LiveCall"; // Component to handle live call details

const MainContent = ({calls , isDarkMode}) => {

    const [currentCall, setCurrentCall] = useState(null); // State to track the currently active call

  return (
    <div
      className={`p-6 space-y-4 h-full ${
        isDarkMode ? "bg-s1 bg-opacity-[98%]" : "bg-white" // Dynamic background based on theme
      }`}
    >
      {/* Back Button */}
      {currentCall && (
        <button
          onClick={() => setCurrentCall(null)} // Reset current call
          className={`mb-4 px-4 py-2 rounded-lg ${
            isDarkMode
              ? "bg-gray-700 text-gray-300"
              : "bg-gray-200 text-gray-700"
          } hover:bg-gray-300`}
        >
          Back
        </button>
      )}

      {/* Conditional rendering based on the current call */}
      {!currentCall ? (
        <CallsList
          calls={calls} // Pass the list of calls
          onCall={(call) => setCurrentCall(call)} // Handle initiating a call
          OnView={(call) => console.log("Viewing:", call)} // Placeholder for viewing a call
          isDarkMode={isDarkMode} // Pass theme information
        />
      ) : (
        <LiveCall
          call={currentCall} // Pass the currently active call
          isActive={!!currentCall} // Indicates if a call is active
          isDarkMode={isDarkMode} // Pass theme information
        />
      )}
    </div>
  );
};

export default MainContent;
