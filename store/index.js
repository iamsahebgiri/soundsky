export const state = () => ({
    currentSong: '',
    songs: [],
    accessToken: ''
})

export const mutations = {
    setCurrentSong(state, param) {
        state.currentSong = param;
    },
    setSongs(state,param) {
        state.songs.push(param)
    },
    setAccessToken(state,param) {
        state.accessToken = param;
    },

}