import { Track } from "utils/types";
import create from "zustand";

interface SongState {
  currentSong: Track | null;
  songs: Track[] | null;
  setCurrentSong: (song: Track) => void;
}

const useStore = create<SongState>((set) => ({
  currentSong: null,
  songs: null,
  setCurrentSong: (song) => set((state) => ({ currentSong: song })),
}));

export { useStore };
