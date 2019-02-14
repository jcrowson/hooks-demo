import { useState, useEffect } from 'react';
import useAudioPlayer from "./useAudioPlayer";

const useProgress = () => {
  const { isPlaying } = useAudioPlayer();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressTimer;
    if (isPlaying) {
      progressTimer = setInterval(_ => {
        setProgress(progress + 1);
      }, 1000);
    }
    if (progressTimer) {
      return () => {
        clearInterval(progressTimer);
      }
    }
  });

  return {
    progress,
  }
};

export default useProgress;
