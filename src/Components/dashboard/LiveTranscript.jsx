const LiveTranscript = ({ messages, isDarkMode }) => {
  // Dynamic classes for dark/light mode
  const bgColor = isDarkMode ? "bg-s1" : "bg-white";
  const textColor = isDarkMode ? "text-gray-100" : "text-gray-700";
  const borderColor = isDarkMode ? "border-p1" : "border-p1/10";

  return (
    <div className={`flex-grow p-4 border-2 rounded-xl mb-32 overflow-y-auto ${bgColor} ${borderColor}`}>
      <p className={`text-sm mb-4 ${textColor}`}>Live Transcript</p>
      <div className="space-y-2 flex flex-col gap-4 justify-center">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl max-w-[75%] inline-block ${
              msg.isAgent
                ? `${
                    isDarkMode
                      ? "bg-gray-700 text-gray-300"
                      : "bg-gray-200 text-gray-800"
                  } self-start rounded-tl-none`
                : `${
                    isDarkMode
                      ? "bg-orange-800 text-orange-300"
                      : "bg-p1 text-p4"
                  } self-end rounded-tr-none`
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveTranscript;