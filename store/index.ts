import create from "zustand";

interface SongState {
  currentSong: string;
  songs: [];
  accessToken: string;
  setCurrentSong: (song: string) => void;
  setAccesToken: (token: string) => void;
}

const useStore = create<SongState>((set) => ({
  currentSong: "",
  accessToken: "",
  songs: [],
  setCurrentSong: (song) => set((state) => ({ currentSong: song })),
  setAccesToken: (token) => set((state) => ({ accessToken: token })),
}));

export { useStore };
