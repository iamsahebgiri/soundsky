<template>
  <div class="song">
    <div class="song-container">
      <div class="bg"></div>
      <img v-bind:src="item.track.album.images[1].url" class="item-image" />
      <div class="overlay">
        <button class="playBtn btn" @click="playHandler">
          <span class="iconify play-icon" data-icon="mdi:play" data-inline="false" ></span>
        </button>
        <a class="downBtn btn" :href="item.track.preview_url" target="_blank" :download="item.track.name">
          <span class="iconify download-icon" data-icon="mdi:download" data-inline="false"></span>
        </a> 
      </div>
    </div>
    <div class="song-name text-truncate">{{ item.track.name }}</div>
  </div>
</template>

<script>

export default {
  props: ["item"],
  methods: {
    playHandler() {
      this.$store.commit("setCurrentSong", this.item.track);
      console.log(this.item.track);
    }
  }
};
</script>

<style scoped>
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
  height: 36px;
  width: 36px;
  border-radius: 18px;
  color: white;
  cursor: pointer;
}
.playBtn {
  padding: 0 0 0 1px;
}
.downBtn {
  padding: 4px 0 0 0;
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
  background: var(--gray-1);
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
.play-icon, .download-icon {
  width: 24px; 
  height: 24px;
}
</style>