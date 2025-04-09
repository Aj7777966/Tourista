import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const PlaneBanner = () => {
    const navigate = useNavigate();
    const audioRef = useRef(null);

    useEffect(() => {
        // Play sound when the component mounts
        if (audioRef.current) {
            audioRef.current.play().catch((e) => console.log("Autoplay blocked:", e));
        }
    }, []);

    //Loop sound on every animation cycle 
    useEffect(() => {
        const playSound = () => {
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch((e) => console.log("Autoplay blocked:", e));
          }
        };
      
        playSound(); // initial play
        const interval = setInterval(playSound, 15000); // repeat every 15s
      
        return () => clearInterval(interval); // cleanup
      }, []);

    return (
        <div className="relative w-full h-20 overflow-hidden my-10 z-10">
            <audio ref={audioRef} src="/public/sounds/plane-flyby.mp3" preload="auto" />
            <div className="flex items-center absolute animate-[flyplane_15s_linear_infinite] whitespace-nowrap">
                <div className="text-4xl mr-4 transform rotate-[10deg]">✈️</div>
                <div
                    className="bg-yellow-300 text-gray-800 px-6 py-2 rounded-r-lg font-semibold border-2 border-yellow-500 shadow-md cursor-pointer hover:bg-yellow-400 transition-all duration-300"
                    onClick={() => navigate("/serve-packages")}
                >
                    Want to serve packages to travelers?{" "}
                    <span className="underline text-blue-700 hover:text-blue-900">
                        Click here to know more
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PlaneBanner;
