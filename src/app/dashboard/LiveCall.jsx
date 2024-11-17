import AgentInfo from "@/Components/dashboard/AgentInfo";
import CallInfo from "@/Components/dashboard/CallInfo";
import ListingInfo from "@/Components/dashboard/ListingInfo";
import LiveTranscript from "@/Components/dashboard/LiveTranscript";
import { useEffect, useState } from "react";

const LiveCall = ({ call, isActive, isDarkMode }) => {
  const [currentTimestamp, setCurrentTimestamp] = useState("00:00"); // Track the audio timestamp
  const [audioUrl, setAudioUrl] = useState(null); // URL for the audio

  // Effect to handle audio URL for LIVE Call tab
  useEffect(() => {
    if (isActive) {
      setAudioUrl(call.audio); // Set the URL for playback and visualizer from the call object
    } else {
      // Clean up when leaving the LIVE Call tab
      setAudioUrl(null);
    }
  }, [isActive, call.audio]);

  return (
    <div className="flex flex-row gap-4 h-full">
      {/* Left Column */}
      <div className="w-1/2 flex flex-col gap-4 h-full">
        <div className="flex gap-4">
          {/* Agent Info */}
          <div className="w-1/2">
            <AgentInfo
              name={`${call.clientInfo.firstName} ${call.clientInfo.lastName}`} // Combine first and last name
              blob={audioUrl} // Pass the audio URL
              onTimeUpdate={setCurrentTimestamp} // Pass the callback to track time
              isDarkMode={isDarkMode}
            />
          </div>
          {/* Call Info */}
          <div className="w-1/2">
            <CallInfo timestamp={currentTimestamp} />
          </div>
        </div>
        {/* Live Transcript */}
        <LiveTranscript messages={call.messages} />
      </div>

      {/* Right Column */}
      <div className="w-1/2 h-full">
        <ListingInfo  call={call} isDarkMode={isDarkMode}/>
      </div>
    </div>
  );
};

export default LiveCall;