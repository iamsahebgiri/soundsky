<template>
  <div class="song">
    <div class="song-container">
      <div class="bg"></div>
      <img v-bind:src="item.album.images[1].url" class="item-image" />
      <div class="overlay">
        <button class="playBtn btn" @click="playHandler">
          <span class="iconify" data-icon="ion:play" data-inline="false"></span>
        </button>
        <a class="downBtn btn" :href="item.preview_url" target="_blank" :download="item.name">
          <span class="iconify" data-icon="ion:download-outline" data-inline="false"></span>
        </a>
      </div>
    </div>
    <div class="song-name text-truncate">{{ item.name }}</div>
  </div>
</template>

<script>

export default {
  props: ["item"],
  methods: {
    playHandler() {
      this.$store.commit("setCurrentSong", this.item);
      console.log(this.item);
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
  padding: 0 0 0 3px;
}
.downBtn {
  padding: 4px 0 0 1px;
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