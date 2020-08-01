<template>
  <div class="song">
    <div class="song-container">
      <div class="bg"></div>
      <img v-bind:src="item.images[1].url" class="item-image" />
      <div class="overlay">
        <button class="playBtn btn" @click="playHandler">
          <span class="iconify play-icon" data-icon="ion:play" data-inline="false"></span>
        </button>
        <button class="downBtn btn" @click="downloadHandler">
          <span class="iconify download-icon" data-icon="ion:download-outline" data-inline="false"></span>
        </button>
      </div>
    </div>
    <div class="song-name text-truncate">{{ item.name }}</div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import axios from "axios";

export default {
  props: ["item"],
  methods: {
    playHandler() {
      if (Cookies.get("token") === undefined) {
        const now = new Date();
        now.setTime(now.getTime() + 1 * 3600 * 1000);
        axios.get("https://soundsky.netlify.app/.netlify/functions/getAccessToken").then(res => {
          Cookies.set("token", res.data, { expires: now });
        });
      } else {
        const config = {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
          }
        };
        axios
          .get(
            `https://api.spotify.com/v1/albums/${this.item.id}/tracks`,
            config
          )
          .then(res => {
            this.$store.commit("setCurrentSong", res.data.items[0]);
            console.log(res.data)
          });
      }
    },
    downloadHandler() {
      console.log("download clicked....");
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
  background: var(--gray-1);
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

.play-icon, .download-icon {
  width: 24px; 
  height: 24px;
}
</style>