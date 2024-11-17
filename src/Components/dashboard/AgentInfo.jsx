import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

const AgentInfo = ({ name = "John Doe", blob, onTimeUpdate, isDarkMode }) => {
  const waveformRef = useRef(null);
  const waveSurferRef = useRef(null);

  useEffect(() => {
    if (blob && waveformRef.current) {
      // Initialize WaveSurfer
      waveSurferRef.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#ddd",
        progressColor: "#FF5F1F",
        cursorColor: "#FF5F1F",
        barWidth: 3,
        responsive: true,
        height: 100,
      });

      // Load audio URL
      waveSurferRef.current.load(blob);

      // Play the audio automatically when ready
      waveSurferRef.current.on("ready", () => {
        waveSurferRef.current.play();
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
  }, [blob, onTimeUpdate]);

  // Helper function to format time
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="p-6 border rounded-lg bg-white h-full flex flex-col justify-center items-center">
      {/* Agent's Name */}
      <h3 className="text-xl font-semibold mb-4 text-p1">{name}</h3>

      {/* Audio Visualizer */}
      <div ref={waveformRef} className="w-full"></div>
    </div>
  );
};

export default AgentInfo;