<template>
  <div class="song-info">
    <div class="thumb">
      <!-- <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div> -->
      <img :src="thumb" height="40" width="40" />
    </div>
    <div class="current-song">
      <div class="title text-truncate">{{title}}</div>
      <div class="artist">{{artist}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["artist", "title", "thumb"]
};
</script>

<style scoped>
.song-info {
  display: flex;
  align-items: center;
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
.music-player {
  width: 70%;
}
.title {
  width: 160px;
}
.artist {
  font-size: 11px;
}
</style>