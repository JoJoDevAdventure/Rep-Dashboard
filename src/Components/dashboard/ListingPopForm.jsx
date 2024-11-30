import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import loadingAnimation from "../animations/loading.json"; // Path to your Lottie JSON file

const ListingPopForm = ({ isOpen, onClose, onSave }) => {
  const [notes, setNotes] = useState(""); // State to handle notes input
  const [uploadedFile, setUploadedFile] = useState(null); // State to store uploaded image
  const [imagePreview, setImagePreview] = useState(null); // State to preview uploaded images
  const [audioBlob, setAudioBlob] = useState(null); // State to store audio blob
  const [isRecording, setIsRecording] = useState(false); // State to toggle recording icon
  const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause
  const [isLoading, setIsLoading] = useState(false); // State to show/hide loading animation
  const mediaRecorderRef = useRef(null); // Ref for media recorder
  const waveformRef = useRef(null); // Ref for WaveSurfer container
  const waveSurferRef = useRef(null); // Ref for WaveSurfer instance

  // Handle file upload (image)
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      setImagePreview(URL.createObjectURL(file)); // Create preview for the image
    }
  };

  // Handle removing image
  const removeImage = () => {
    setUploadedFile(null);
    setImagePreview(null);
  };

  // Handle file upload (audio)
  const handleAudioUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAudioBlob(file);
      loadWaveform(file); // Load waveform for uploaded audio
    }
  };

  // Initialize WaveSurfer for audio preview
  const loadWaveform = (blob) => {
    if (waveSurferRef.current) {
      waveSurferRef.current.destroy(); // Destroy the existing instance
    }

    if (waveformRef.current) {
      const blobURL =
        typeof blob === "string" ? blob : URL.createObjectURL(blob);
      setIsLoading(true); // Show loading animation

      waveSurferRef.current = WaveSurfer.create({
        container: waveformRef.current, // Container for waveform
        waveColor: "#ddd", // Waveform color
        progressColor: "#FF5F1F", // Progress bar color
        cursorColor: "#FF5F1F", // Cursor color
        barWidth: 3, // Width of waveform bars
        responsive: true, // Adjusts the waveform to container size
        height: 100, // Height of the waveform
      });

      waveSurferRef.current.load(blobURL); // Load the Blob URL or string

      waveSurferRef.current.on("ready", () => {
        setIsLoading(false); // Hide loading animation
      });

      waveSurferRef.current.on("error", (error) => {
        setIsLoading(false); // Hide loading animation on error
        console.error("WaveSurfer error:", error);
      });
    }
  };

  // Start audio recording
  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    const chunks = [];

    mediaRecorderRef.current.ondataavailable = (e) => {
      chunks.push(e.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunks, { type: "audio/webm" });
      setAudioBlob(blob);
      loadWaveform(blob); // Load waveform for recorded audio
    };

    mediaRecorderRef.current.start();
    setIsRecording(true); // Show recording icon
  };

  // Stop audio recording
  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false); // Show pause icon
  };

  // Handle removing audio
  const removeAudio = () => {
    setAudioBlob(null);
    if (waveSurferRef.current) waveSurferRef.current.destroy(); // Destroy waveform
  };

  // Toggle play/pause functionality
  const togglePlayPause = () => {
    if (waveSurferRef.current) {
      if (waveSurferRef.current.isPlaying()) {
        waveSurferRef.current.pause(); // Pause the audio
        setIsPlaying(false);
      } else {
        waveSurferRef.current.play(); // Play the audio
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    if (audioBlob && waveformRef.current) {
      loadWaveform(audioBlob);
    }
  }, [audioBlob]);

  if (!isOpen) return null; // Do not render if the pop-up is not open

  return (
    <div className="fixed top-0 left-0 w-full md:w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Lottie
            animationData={loadingAnimation}
            loop={true}
            className="w-40 h-40"
          />
        </div>
      )}
      <div className="bg-white rounded-lg p-6 w-80 md:w-96 shadow-lg text-gray-500">
        <h2 className="text-lg font-bold mb-4 text-black-100">
          Add Product Listing
        </h2>

        {/* Image Upload */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium mb-2">
            Product Image
          </label>
          <div className="w-full h-32 border-2 border-dashed border-p1 rounded-lg flex flex-col items-center justify-center text-center p-4 relative">
            {imagePreview ? (
              <div className="relative flex justify-center w-full h-full">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="h-full max-h-24 object-cover rounded-lg mb-2"
                />
                {/* Trash Icon to Remove Image */}
                <button
                  onClick={removeImage}
                  className="absolute -bottom-3 right-[calc(50%-1rem)] bg-red-500 p-2 rounded-full text-white hover:bg-red-600 focus:outline-none"
                >
                  <img
                    src="https://img.icons8.com/ios-filled/24/ffffff/trash.png"
                    alt="Remove"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <label className="flex items-center gap-2 bg-p1 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-p2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/upload.png"
                    alt="Upload"
                    className="w-5 h-5"
                  />
                  Browse Images
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Audio Upload/Record */}
        <div className="mb-4">
          <label htmlFor="audio" className="block text-sm font-medium mb-2">
            Product Description Audio
          </label>
          {audioBlob ? (
            <div className="relative">
              <div ref={waveformRef} className="mb-4 h-22"></div>
              <button
                onClick={removeAudio}
                className="absolute -bottom-3 right-0 bg-red-500 p-2 rounded-full text-white hover:bg-red-600 focus:outline-none z-50"
              >
                <img
                  src="https://img.icons8.com/ios-filled/24/ffffff/trash.png"
                  alt="Remove"
                  className="w-4 h-4"
                />
              </button>

              <button
                onClick={togglePlayPause}
                className="absolute -bottom-3 right-12 bg-p1 p-2 rounded-full text-white hover:bg-red-600 focus:outline-none z-50"
              >
                <img
                  src={
                    !isPlaying
                      ? `https://img.icons8.com/ios-filled/50/ffffff/play.png`
                      : `https://img.icons8.com/ios-filled/50/ffffff/pause.png`
                  }
                  alt="Remove"
                  className="w-4 h-4"
                />
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <label className="flex items-center gap-2 bg-p1 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-p2">
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleAudioUpload}
                  className="hidden"
                />
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/upload.png"
                  alt="Upload"
                  className="w-5 h-5"
                />
                Upload Audio
              </label>
              {isRecording ? (
                <button
                  onClick={stopRecording}
                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/stop.png"
                    alt="Stop Recording"
                    className="w-5 h-5"
                  />
                  Stop Recording
                </button>
              ) : (
                <button
                  onClick={startRecording}
                  className="flex items-center gap-2 bg-p1 text-white px-4 py-2 rounded-lg hover:bg-p2"
                >
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/microphone.png"
                    alt="Record Audio"
                    className="w-5 h-5"
                  />
                  Record Audio
                </button>
              )}
            </div>
          )}
        </div>

        {/* Notes Section */}
        <div className="mt-6">
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-2"
          >
            Product Description
          </label>
          <textarea
            id="description"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-p1"
            placeholder="Add your description here..."
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-gray-500 border-2 border-gray-500 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (audioBlob && uploadedFile) {
                onSave({ notes, uploadedFile, audioBlob });
              } else {
                console.error(
                  "Both audio and image files are required to save."
                );
                // Optionally, you can display an alert or show a validation message to the user.
              }
            }}
            className={`px-4 py-2 rounded-lg  text-white ${
              audioBlob && uploadedFile
                ? "hover:bg-p2 bg-p1"
                : "bg-gray-600 hover:bg-gray-300"
            }`}
            disabled={!audioBlob && !uploadedFile}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingPopForm;
