export const state = () => ({
    currentSong: ''
})

export const mutations = {
    setCurrentSong(state, param) {
        state.currentSong = param;
    }
}