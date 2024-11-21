import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

const AgentInfo = ({ name = "John Doe", blob, onTimeUpdate, isDarkMode }) => {
  const waveformRef = useRef(null);
  const waveSurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (blob && waveformRef.current) {
      waveSurferRef.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: isDarkMode ? "#666" : "#ddd",
        progressColor: "#FF5F1F",
        cursorColor: "#FF5F1F",
        barWidth: 3,
        responsive: true,
        height: 100,
      });

      waveSurferRef.current.load(blob);

      waveSurferRef.current.on("ready", () => {
        setIsPlaying(false);
      });

      waveSurferRef.current.on("audioprocess", () => {
        if (waveSurferRef.current.isPlaying()) {
          const currentTime = waveSurferRef.current.getCurrentTime();
          onTimeUpdate(formatTime(currentTime));
        }
      });

      return () => {
        if (waveSurferRef.current) {
          waveSurferRef.current.destroy();
        }
      };
    }
  }, [blob, onTimeUpdate, isDarkMode]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

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

  const bgColor = isDarkMode ? "bg-s1" : "bg-white";
  const textColor = isDarkMode ? "text-gray-300" : "text-p1";
  const borderColor = isDarkMode ? "border-p1" : "border-p1/10";

  return (
    <div
      className={`p-6 border-2 rounded-xl h-full flex flex-col justify-center items-center ${bgColor} ${borderColor}`}
    >
      <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>{name}</h3>
      <div ref={waveformRef} className="w-full mb-4"></div>
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