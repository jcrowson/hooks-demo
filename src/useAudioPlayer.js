import { useContext } from 'react';
import AppContext from './AppContext';

const useAudioPlayer = () => {
  const { state, setState } = useContext(AppContext);

  const play = () => {
    setState({ ...state, isPlaying: true });
  };

  const pause = () => {
    setState({ ...state, isPlaying: false });
  };

  return {
    isPlaying: state.isPlaying,
    play,
    pause,
  }
};

export default useAudioPlayer;
