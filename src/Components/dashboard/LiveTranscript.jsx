const LiveTranscript = ({ messages }) => {
  return (
    <div className="flex-grow p-4 border rounded-lg bg-white mb-10 overflow-y-auto">
      <p className="text-sm text-gray-500 mb-4">Live Transcript</p>
      <div className="space-y-2 flex flex-col gap-4 justify-center">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl max-w-[75%] inline-block ${
              msg.isAgent
                ? " bg-gray-200 text-black-100 self-start rounded-tl-none"
                : " text-p4 bg-p1 self-end rounded-tr-none"
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