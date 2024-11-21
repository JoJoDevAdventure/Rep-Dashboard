import AgentInfo from "@/Components/dashboard/AgentInfo";
import CallInfo from "@/Components/dashboard/CallInfo";
import ListingInfo from "@/Components/dashboard/ListingInfo";
import LiveTranscript from "@/Components/dashboard/LiveTranscript";
import { useEffect, useState } from "react";

const LiveCall = ({ call, isActive, isDarkMode }) => {
  const [currentTimestamp, setCurrentTimestamp] = useState("00:00");
  const [audioUrl, setAudioUrl] = useState(null);

  useEffect(() => {
    if (isActive) {
      setAudioUrl(call.audio);
    } else {
      setAudioUrl(null);
    }
  }, [isActive, call.audio]);

  return (
    <div className="flex flex-row gap-4 h-full">
      <div className="w-1/2 flex flex-col gap-4 h-full">
        <div className="flex gap-4">
          <div className="w-1/2">
            <AgentInfo
              name={`${call.clientInfo.firstName} ${call.clientInfo.lastName}`}
              blob={audioUrl}
              onTimeUpdate={setCurrentTimestamp}
              isDarkMode={isDarkMode}
            />
          </div>
          <div className="w-1/2">
            <CallInfo timestamp={currentTimestamp} isDarkMode={isDarkMode} />
          </div>
        </div>
        <LiveTranscript
          messages={call.messages}
          currentTimestamp={currentTimestamp}
          isDarkMode={isDarkMode}
        />
      </div>

      <div className="w-1/2 h-full">
        <ListingInfo call={call} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default LiveCall;