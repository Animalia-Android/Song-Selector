import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Waterfalls", duration: "4:15" },
    { title: "Smells like Teen Spirit", duration: "4:39" },
    { title: "No Rain", duration: "4:55" },
    { title: "Tonight", duration: "5:35" },
    { title: "No Scrubs", duration: "3:43" },
    { title: "Come Down", duration: "4:51" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
