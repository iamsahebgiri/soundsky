<script>
export default {
  props: ["src", "artist", "title", "thumb"],
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
        console.log(this.state);
      }
    },
    playingMethod() {
      console.log("playing...");
      this.isPlaying = true;
    },
    canPlayMethod() {
      const music = this.$refs.music;
      if(this.src !== "https://p.scdn.co/mp3-preview/401a469d4961efa03c42b3c36917a317345f12ff?cid=c05fafe11fb14758be3ec875749d319")
      {
        music.play();
      }
    }
  }
};
</script>
 
<template>
  <div class="player">
    <div class="song-info">
      <div class="thumb">
        <div v-if="state==3" class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <img v-else :src="thumb" height="40" width="40" />
      </div>
      <div class="current-song">
        <div class="title text-truncate">{{title}}</div>
        <div class="artist">{{artist}}</div>
      </div>
    </div>
    <div class="music-player">
      <audio
        @timeupdate="timeupdate"
        ref="music"
        preload="auto"
        @playing="playingMethod"
        @canplay="canPlayMethod"
        :src="src"
        loop="true"
      ></audio>

      <div class="play btn btn-primary" @click="playAudio">{{ isPlaying ? "Pause" : "Play"}}</div>
      <div class="currentTime">0:{{Math.floor(currentTime/10) == 0 ?`0${currentTime}`: currentTime}}</div>
      <div class="music-progress">
        <div class="music-progress-bar" :style="{ width: playhead + '%' }"></div>
      </div>
      <div class="duration">0:30</div>
    </div>
  </div>
</template>

<style scoped>
.player {
  display: flex;
  align-items: center;
  width: 100%;
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
  color: var(--text-color);
  margin-right: 10px;
}
.duration {
  color: var(--text-color);
  margin-left: 10px;
}
.song-info {
  color: var(--text-color);
  display: flex;
  align-items: center;
  margin-right: 10px;
}
.music-player {
  display: flex;
  align-items: center;
  width: 100%;
}
.thumb {
  height: 40px;
  width: 40px;
  margin-right: 10px;
  display: flex;
  align-items: center;
}
.thumb img {
  border-radius: 6px;
}
.title {
  width: 160px;
}
.artist {
  font-size: 11px;
}
</style>