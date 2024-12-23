import React, { useRef, useState, useEffect } from "react";
import happyBirthdayAudio from "../assets/audio/happy-birthday.mp3";

interface SongProps {
  isActive: boolean; // Prop to control when to play the song
}

const Song: React.FC<SongProps> = ({ isActive }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Play the song automatically when the flame is extinguished
    if (isActive && audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [isActive, isPlaying]);

  // Function to handle the song reset when it ends
  const handleEnded = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to the beginning
      audioRef.current.play(); // Play again
    }
  };

  return (
    // No rendering of any UI elements, only handle playing the song
    <audio ref={audioRef} onEnded={handleEnded}>
      <source src={happyBirthdayAudio} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default Song;
