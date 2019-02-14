import React from 'react';
import useAudioPlayer from "./useAudioPlayer";

const PlayButton = () => {
  const { play, pause, isPlaying } = useAudioPlayer();
  return <button onClick={ isPlaying ? pause : play}>{isPlaying ? 'pause' : 'play'}</button>
};

export default PlayButton;
