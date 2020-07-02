<template>
  <div class="bottom-bar light">
    <div class="song-info-container">
      <song-info :title="title" :artist="artist" :thumb="thumb" />
    </div>
    <div class="music-player">
      <player :src="playing" />
    </div>
  </div>
</template>
<script>

import Player from "./Player.vue";
import SongInfo from "./SongInfo.vue";
export default {
  data() {
    return {
      title: "Control",
      artist: "Armaan Malik",
      playing:
        "https://p.scdn.co/mp3-preview/401a469d4961efa03c42b3c36917a317345f12ff?cid=c05fafe11fb14758be3ec875749d319",
      thumb: "https://i.scdn.co/image/ab67616d00001e0289a25c637a80550e13ca0973"
    };
  },
  components: {
    Player,
    SongInfo
  },
  mounted() {
    this.$store.watch(
      () => this.$store.state.currentSong,
      () => {
        this.artist = this.$store.state.currentSong.artists[0].name;
        this.title = this.$store.state.currentSong.name;
        if (this.$store.state.currentSong.preview_url !== null) {
          this.playing = this.$store.state.currentSong.preview_url;
        }
        // if (this.$store.state.currentSong.album.images[2].url !== null) {
        //   this.thumb = this.$store.state.currentSong.album.images[2].url;
        // }

        // console.log(this.$store.state.currentSong);
      }
    );
  }
};
</script>

<style>
.bottom-bar {
  position: fixed;
  width: 100%;
  z-index: 200;
  bottom: 0;
  height: 60px;
  padding: 6px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bottom-bar.light {
  background: rgba(51, 51, 51, 0.2);
  backdrop-filter: saturate(180%) blur(20px);
  border-top: 1px solid rgba(65, 67, 78, 0.16);
}
.bottom-bar.dark {
  background: rgba(66, 66, 66, 0.7);
  border-top: 1px solid rgba(65, 67, 78, 0.16);
  backdrop-filter: saturate(180%) blur(20px);
}
.song-info-container {
  margin-right: 10px;
}
.music-player {
  width: 100%;
}
</style>
