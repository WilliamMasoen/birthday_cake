import "../styles/BirthdayCake.css";
import React, { useEffect, useRef, useState } from "react";
import cake from "../assets/images/cake.png";

const BirthdayCake: React.FC = () => {
  const [audioLevel, setAudioLevel] = useState<number>(0);
  const [isCandleExtinguished, setIsCandleExtinguished] =
    useState<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);

  useEffect(() => {
    const startAudio = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

        const audioContext = new AudioContext();
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;

        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        dataArrayRef.current = dataArray;
        audioContextRef.current = audioContext;
        analyserRef.current = analyser;

        const updateAudioLevel = () => {
          if (analyserRef.current && dataArrayRef.current) {
            analyserRef.current.getByteTimeDomainData(dataArrayRef.current);

            let sum = 0;
            for (let i = 0; i < bufferLength; i++) {
              const value = dataArrayRef.current[i] / 128 - 1;
              sum += value * value;
            }
            const rms = Math.sqrt(sum / bufferLength);
            setAudioLevel(rms);

            if (rms * 1000 > 100 && !isCandleExtinguished) {
              setIsCandleExtinguished(true);
            }

            requestAnimationFrame(updateAudioLevel);
          }
        };

        updateAudioLevel();
      } catch (err) {
        console.error("Error accessing microphone", err);
      }
    };

    startAudio();

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [isCandleExtinguished]);

  return (
    <div className="birthday-cake-container">
      <p className="audio-level-text">
        Audio Level: {(audioLevel * 1000).toFixed(2)}
      </p>
      <div className="candle-container">
        <div className="candle-body" />
        <div
          className={`candle-flame ${
            isCandleExtinguished
              ? "candle-flame-extinguished"
              : "candle-flame-active"
          }`}
        />
      </div>
      <div className="cake-container">
        <img src={cake} alt="Birthday Cake" className="cake-image" />
      </div>
    </div>
  );
};

export default BirthdayCake;
