import { createContext } from "react";

const songContext = createContext({
  // This is the initial defn of this context when page reloads there is no song playing and if I want to change any song I will call the func
  currentSong: null,
  setCurrentSong: (currentSong) => {},
  soundPlayed: null,
  setSoundPlayed: () => {},
  isPaused: null,
  setIsPaused: () => {},
});

export default songContext;
