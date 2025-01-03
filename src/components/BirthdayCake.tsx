import "../styles/BirthdayCake.css";
import React, { useEffect, useRef, useState } from "react";
import ConfettiComponent from "./Confetti";
import SongComponent from "./Song.tsx";
import cake from "../assets/images/cake.png";

const BirthdayCake: React.FC = () => {
  // State to track the current audio level
  const [audioLevel, setAudioLevel] = useState<number>(0);

  // State to track if the candle has been extinguished
  const [isCandleExtinguished, setIsCandleExtinguished] =
    useState<boolean>(false);

  // References for managing the Web Audio API context, analyser node, and audio data buffer
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);

  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  let threshold = 350;

  // Adjust the flame size based on screen width
  if (screenWidth < 540) {
    threshold = 200;
  } else if (screenWidth < 768) {
    threshold = 230;
  }

  useEffect(() => {
    // Update the screen width on resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Function to initialize audio processing
    const startAudio = async () => {
      try {
        // Request microphone access from the user
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

        // Create an audio context and analyser node for real-time audio analysis
        const audioContext = new AudioContext();
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256; // Sets the FFT size; higher values provide more frequency resolution

        // Connect the microphone input to the analyser node
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);

        // Prepare a data buffer to store audio samples
        const bufferLength = analyser.frequencyBinCount; // Half of fftSize
        const dataArray = new Uint8Array(bufferLength);
        dataArrayRef.current = dataArray;
        audioContextRef.current = audioContext;
        analyserRef.current = analyser;

        // Function to process audio and update the visual/audio state
        const updateAudioLevel = () => {
          if (analyserRef.current && dataArrayRef.current) {
            analyserRef.current.getByteTimeDomainData(dataArrayRef.current);

            // Calculate the Root Mean Square (RMS) of the audio signal
            let sum = 0;
            for (let i = 0; i < bufferLength; i++) {
              const value = dataArrayRef.current[i] / 128 - 1; // Normalizes the audio sample
              sum += value * value;
            }
            const rms = Math.sqrt(sum / bufferLength); // RMS gives the overall audio level
            setAudioLevel(rms);

            // Extinguish the candle if the RMS exceeds the threshold
            if (rms * 1000 > threshold && !isCandleExtinguished) {
              setIsCandleExtinguished(true);
            }

            // Continuously request the next animation frame for smooth updates
            requestAnimationFrame(updateAudioLevel);
          }
        };

        // Start the audio level update loop
        updateAudioLevel();
      } catch (err) {
        console.error("Error accessing microphone", err); // Handle microphone access errors
      }
    };

    startAudio();

    // Cleanup function to release audio resources when the component unmounts
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [isCandleExtinguished]); // Dependency array ensures updates when candle extinguished state changes

  // Calculate inverse scaling factor for flame size based on audio input
  const flameScale = Math.max(
    1 - Math.min((audioLevel * 1000) / threshold, 1), // Scale decreases as audio level approaches threshold
    0
  );

  // Set responsive values based on screen size (Below is for largest screen size)
  let flameWidth = 30 * flameScale;
  let flameHeight = 50 * flameScale;
  let flameTop = 40 * (1 - flameScale);

  // Adjust the flame size based on screen width
  if (screenWidth < 540) {
    // Small screen
    flameWidth *= 0.6;
    flameHeight *= 0.6;
  } else if (screenWidth < 640) {
    flameWidth *= 0.75;
    flameHeight *= 0.75;
  } else if (screenWidth < 768) {
    flameWidth *= 0.85;
    flameHeight *= 0.85;
  } else if (screenWidth < 1025) {
    flameWidth *= 0.92;
    flameHeight *= 0.92;
  } else {
    // Large screen
    flameWidth *= 1;
    flameHeight *= 1;
  }

  return (
    <div className="birthday-cake-container">
      <ConfettiComponent isActive={isCandleExtinguished} />
      <SongComponent isActive={isCandleExtinguished} />
      {/* <p className="audio-level-text">
        Audio Level: {(audioLevel * 1000).toFixed(2)}
      </p> */}
      <div className="candle-container">
        <div className="candle-body" />
        <div
          className={`candle-flame ${
            isCandleExtinguished
              ? "candle-flame-extinguished"
              : "candle-flame-active"
          }`}
          style={{
            width: `${flameWidth}px`, // Flame shrinks proportionally
            height: `${flameHeight}px`,
            top: `${flameTop}px`,
            opacity: flameScale, // Opacity decreases as the flame shrinks
          }}
        />
      </div>
      <div className="cake-container">
        <img src={cake} alt="Birthday Cake" className="cake-image" />
      </div>
    </div>
  );
};

export default BirthdayCake;
