import React from 'react';
import useProgress from "./useProgress";

import PlayButton from "./PlayButton";

const MusicPlayer = () => {
  const { progress } = useProgress();
  return (
    <>
      <PlayButton />
      <progress value={progress} max={100} />
    </>
  );
};

export default MusicPlayer;
