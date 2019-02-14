import React from 'react';
import PlayButton from "./PlayButton";

const SongList = () => {
  return (
    <>
    <ul>
      <li>
        <PlayButton />
        Bohemian Rhapsody
      </li>
      <li>
        <PlayButton />
        Piano Man
      </li>
    </ul>
    </>
  );
};

export default SongList;
