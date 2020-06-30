<template>
  <div class="song">
    <div class="song-container">
      <div class="bg"></div>
      <img v-bind:src="item.track.album.images[1].url" class="item-image" />
      <div class="overlay">
        <button class="playBtn" @click="playHandler">Play</button>
      </div>
    </div>
    <div class="song-name text-truncate">{{ item.track.name }}</div>
  </div>
</template>

<script>
import * as SpotifyWebApi from 'spotify-web-api-js';
import axios from 'axios';
let spotify = new SpotifyWebApi();
export default {
  props: ['item'],
  methods: {
    playHandler() {
      this.$store.commit('setCurrentSong', this.item.track);
      // console.log(this.item.track);
    }
  }
}
</script>

<style>
.song {
  width: 190px;
  margin: 20px 10px;
}
.song-name {
  margin-top: 8px;
  font-weight: 500;
}
.playBtn,
.downBtn {
  background-color: rgba(255, 255, 255, 0.4);
  border: none;
  border-radius: 3px;
  padding: 5px 12px;
  color: white;
  cursor: pointer;
}
.song-container {
  position: relative;
  width: 190px;
  border-radius: 10px;
}
.song-container .item-image,
.bg {
  height: 190px;
  width: 190px;
  border-radius: 6px;
}
.bg {
  background: rgba(0, 0, 0, 0.5);
}
.overlay,
.bg {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
}
.song-container:hover .bg {
  opacity: 1;
}

.song-container:hover .overlay {
  opacity: 1;
}
</style>