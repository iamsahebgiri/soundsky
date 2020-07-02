<script>
export default {
  props: ["src"],
  data() {
    return {
      playing: "",
      playhead: 0,
      isPlaying: false,
      currentTime: 0,
      state: 0
    };
  },
  methods: {
    playAudio() {
      const music = this.$refs.music;
      if (music !== undefined) {
        if (music.paused) {
          music.play();
        } else {
          music.pause();
          this.isPlaying = false;
        }
      }
    },
    timeupdate() {
      const music = this.$refs.music;
      if (music !== undefined) {
        const progress = (music.currentTime / music.duration) * 100;
        this.playhead = progress;
        this.currentTime = Math.floor(music.currentTime);
        this.state = music.networkState;
      }
    },
    playingMethod() {
      console.log("playing...");
      this.isPlaying = true;
    }
  }
};
</script>
 
<template>
  <div class="player">
    <audio
      @timeupdate="timeupdate"
      ref="music"
      preload="auto"
      @playing="playingMethod"
      :src="src"
      autoplay="true"
    ></audio>

    <div class="play btn btn-primary" @click="playAudio">{{ isPlaying ? "Pause" : "Play"}}</div>
    <div class="currentTime">0:{{Math.floor(currentTime/10) == 0 ?`0${currentTime}`: currentTime}}</div>
    <div class="music-progress">
      <div class="music-progress-bar" :style="{ width: playhead + '%' }"></div>
    </div>
    <div class="duration">0:30</div>
    <div class="net-state">:{{state}}</div>
  </div>
</template>

<style scoped>
.player {
  display: flex;
  align-items: center;
}
.music-progress {
  background: var(--light-gray);
  height: 6px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  width: 100%;
}
.music-progress-bar {
  width: 0%;
  height: 4px;
  background: var(--brand-color);
  border-radius: 2px;
  margin: 0 1px;
}
.play {
  margin-right: 10px;
  height: 30px;
  width: 80px;
  border-radius: 6px;
  padding: 3px;
}
.optical-balance {
  padding: 2px 7px;
}
.currentTime {
  margin-right: 10px;
}
.duration {
  margin-left: 10px;
}
</style>