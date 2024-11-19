import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

const AgentInfo = ({ name = "John Doe", blob, onTimeUpdate, isDarkMode }) => {
  const waveformRef = useRef(null);
  const waveSurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // Track play/pause state

  useEffect(() => {
    if (blob && waveformRef.current) {
      // Initialize WaveSurfer
      waveSurferRef.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: isDarkMode ? "#666" : "#ddd", // Adjust waveform color
        progressColor: "#FF5F1F",
        cursorColor: "#FF5F1F",
        barWidth: 3,
        responsive: true,
        height: 100,
      });

      // Load audio URL
      waveSurferRef.current.load(blob);

      // Update play state when ready
      waveSurferRef.current.on("ready", () => {
        setIsPlaying(false);
      });

      // Track progress and update timestamp
      waveSurferRef.current.on("audioprocess", () => {
        if (waveSurferRef.current.isPlaying()) {
          const currentTime = waveSurferRef.current.getCurrentTime();
          onTimeUpdate(formatTime(currentTime)); // Pass formatted time
        }
      });

      // Cleanup on unmount
      return () => {
        if (waveSurferRef.current) {
          waveSurferRef.current.destroy();
        }
      };
    }
  }, [blob, onTimeUpdate, isDarkMode]);

  // Helper function to format time
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    if (waveSurferRef.current) {
      if (waveSurferRef.current.isPlaying()) {
        waveSurferRef.current.pause();
        setIsPlaying(false);
      } else {
        waveSurferRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // Dynamic classes for dark/light mode
  const bgColor = isDarkMode ? "bg-s1" : "bg-white";
  const textColor = isDarkMode ? "text-gray-300" : "text-p1";
  const borderColor = isDarkMode ? "border-p1" : "border-p1/10";

  return (
    <div
      className={`p-6 border-2 rounded-xl h-full flex flex-col justify-center items-center ${bgColor} ${borderColor}`}
    >
      {/* Agent's Name */}
      <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>{name}</h3>

      {/* Audio Visualizer */}
      <div ref={waveformRef} className="w-full mb-4"></div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className={`px-4 py-2 rounded-full font-semibold ${
          isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
        } hover:bg-gray-300`}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default AgentInfo;