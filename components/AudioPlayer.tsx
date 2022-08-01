import React, { useState, useEffect, useRef } from "react";
import { Track } from "utils/types";

type AudioPlayerProps = {
  track: Track;
};

export default function AudioPlayer({ track }: AudioPlayerProps) {
  console.log(track)
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio(track?.preview_url));
  const intervalRef = useRef<any>();
  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    if (intervalRef.current)
      intervalRef.current = setInterval(() => {
        if (audioRef.current.ended) {
          // toNextTrack();
        } else {
          setTrackProgress(audioRef.current.currentTime);
        }
      }, [1000]);
  };

  const onScrub = (value: number) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(track?.preview_url);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="audio-player">
      <div className="track-info">
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={(e) => onScrub(Number(e.target.value))}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
        />
      </div>
    </div>
  );
}
