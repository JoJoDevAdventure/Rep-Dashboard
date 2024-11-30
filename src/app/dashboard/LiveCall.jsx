import AgentInfo from "@/Components/dashboard/AgentInfo"; // Displays agent-related info and audio playback
import CallInfo from "@/Components/dashboard/CallInfo"; // Displays call-specific info (e.g., timestamp, phone number)
import ListingInfo from "@/Components/dashboard/ListingInfo"; // Displays property and client information
import LiveListingInfo from "@/Components/dashboard/LiveListingInfo"; // Displays real-time property info for live calls
import LiveTranscript from "@/Components/dashboard/LiveTranscript"; // Displays the real-time transcript of the call
import { useEffect, useState } from "react"; // React hooks for managing state and effects

const LiveCall = ({ call, isActive, isDarkMode }) => {
  // State to track the current timestamp of the audio playback
  const [currentTimestamp, setCurrentTimestamp] = useState("00:00");

  // State to hold the audio file URL
  const [audioUrl, setAudioUrl] = useState(null);

  // Effect to load or clear the audio URL based on the active tab
  useEffect(() => {
    if (isActive) {
      setAudioUrl(call.audio); // Load audio from the call object when active
    } else {
      setAudioUrl(null); // Clear the audio URL when inactive
    }
  }, [isActive, call.audio]);

  return (
    <div className="flex flex-col  md:flex-row gap-4 h-full">
      {/* Left Column: Agent Info, Call Info, and Live Transcript */}
      <div className="md:w-1/2 flex flex-col gap-4 md:h-full h-auto">
        {/* Agent Info and Call Info */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <AgentInfo
              name={call.isLive ?`${call.clientInfo.firstName.value} ${call.clientInfo.lastName.value}` : `${call.clientInfo.firstName} ${call.clientInfo.lastName}`} // Combine first and last name for display
              blob={audioUrl} // Pass audio file URL for playback
              onTimeUpdate={setCurrentTimestamp} // Callback to update the timestamp
              isDarkMode={isDarkMode} // Adjust styles for dark or light mode
            />
          </div>
          <div className="w-1/2">
            <CallInfo
              timestamp={currentTimestamp} // Display the current timestamp
              isDarkMode={isDarkMode} // Adjust styles for dark or light mode
            />
          </div>
        </div>

        {/* Live Transcript Section */}
        <LiveTranscript
          messages={call.messages} // Pass call transcript messages
          currentTimestamp={currentTimestamp} // Track the audio playback timestamp
          isDarkMode={isDarkMode} // Adjust styles for dark or light mode
        />
      </div>

      {/* Right Column: Listing Info or LiveListingInfo */}
      <div className="md:w-1/2 h-full">
        {call?.isLive ? (
          <LiveListingInfo
            call={call} // Pass the entire call object for live property details
            isDarkMode={isDarkMode} // Adjust styles for dark or light mode
            currentTimestamp={currentTimestamp}
          />
        ) : (
          <ListingInfo
            call={call} // Pass the entire call object to display property details
            isDarkMode={isDarkMode} // Adjust styles for dark or light mode
          />
        )}
      </div>
    </div>
  );
};

export default LiveCall;