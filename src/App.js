import React, { useState } from 'react';
import PlayingContext from './AppContext';

import SongList from './SongList';
import MusicPlayer from "./MusicPlayer";

const App = () => {
  const [state, setState] = useState({ isPlaying: false });
  return (
    <PlayingContext.Provider value={{
      state,
      setState,
    }}>
      <SongList />
      <MusicPlayer/>
    </PlayingContext.Provider>
  );
};

export default App;
