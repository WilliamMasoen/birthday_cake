import "../styles/BirthdayCake.css";
import React, { useEffect, useRef, useState } from "react";
import cake from "../assets/images/cake.png";

const BirthdayCake: React.FC = () => {
  const [audioLevel, setAudioLevel] = useState<number>(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);

  useEffect(() => {
    const startAudio = async () => {
      try {
        // Request access to the microphone
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

        // Create audio context and analyser
        const audioContext = new AudioContext();
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;

        // Connect the microphone to the analyser
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);

        // Prepare to receive audio data
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        dataArrayRef.current = dataArray;
        audioContextRef.current = audioContext;
        analyserRef.current = analyser;

        // Function to update the audio level
        const updateAudioLevel = () => {
          if (analyserRef.current && dataArrayRef.current) {
            analyserRef.current.getByteTimeDomainData(dataArrayRef.current);

            // Calculate the RMS (Root Mean Square) value of the audio signal
            let sum = 0;
            for (let i = 0; i < bufferLength; i++) {
              const value = dataArrayRef.current[i] / 128 - 1;
              sum += value * value;
            }
            const rms = Math.sqrt(sum / bufferLength);
            setAudioLevel(rms);

            // Schedule the next update
            requestAnimationFrame(updateAudioLevel);
          }
        };

        // Start updating the audio level
        updateAudioLevel();
      } catch (err) {
        console.error("Error accessing microphone", err);
      }
    };

    startAudio();

    // Cleanup function to stop the audio context
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <div className="birthday-cake-container">
      <div className="temp">
        <p className="audio-level-text">
          Audio Level: {(audioLevel * 1000).toFixed(2)}
        </p>
        <div
          style={{
            background:
              parseInt((audioLevel * 1000).toFixed(2)) > 15 ? "red" : "blue",
          }}
        >
          temp
        </div>
      </div>

      <div
        className={
          parseInt((audioLevel * 1000).toFixed(2)) > 15
            ? "candle-container-inactive"
            : "candle-container-active"
        }
      >
        temp
      </div>

      <div className="cake-container">
        <img src={cake} alt="" className="cake-image" />
      </div>
    </div>
    // <div className="audio-level-container">
    //   <div style={{ width: "100%", height: "30px", background: "#ccc" }}>
    //     <div
    //       style={{
    //         width: `${audioLevel * 100}%`,
    //         height: "100%",
    //         background: "green",
    //       }}
    //     />
    //   </div>
    //   <p className="audio-level-text">
    //     Audio Level: {(audioLevel * 100).toFixed(2)}
    //   </p>
    // </div>
  );
};

export default BirthdayCake;
