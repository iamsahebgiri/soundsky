export const state = () => ({
    currentSong: '',
    songs: []
})

export const mutations = {
    setCurrentSong(state, param) {
        state.currentSong = param;
    },
    setSongs(state,param) {
        state.songs.push(param)
    }
}