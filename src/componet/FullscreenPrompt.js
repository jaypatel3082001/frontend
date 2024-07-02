import React, { useEffect, useState } from "react";

const FullscreenPrompt = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [issubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreen = document.fullscreenElement !== null;
      setIsFullscreen(fullscreen);
      if (!fullscreen) {
        setShowBox(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      e.stopPropagation();

      if (e.key === "F11") {
        e.preventDefault(); // Prevent the default F11 action
        if (!isFullscreen) {
          document.documentElement.requestFullscreen();
        }
      }
      if (isFullscreen && e.key == "F11") {
        setShowBox(true);
      }
      return false;
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isFullscreen]);

  const handleStayAway = () => {
    setShowBox(false);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000); // Simulate a submit action
  };

  return isLoading ? (
    <div className="flex items-center justify-center absolute left-0 h-full top-0 w-full bg-slate-300 text-5xl font-extrabold">
      Loading ...
    </div>
  ) : issubmitted ? (
    <div className="flex items-center justify-center absolute left-0 h-full top-0 w-full bg-slate-300 text-5xl font-extrabold">
      Thank you ...
    </div>
  ) : (
    showBox && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-4 rounded shadow-lg">
          <p>What would you like to do?</p>
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleStayAway}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
            >
              Stay Away
            </button>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default FullscreenPrompt;
