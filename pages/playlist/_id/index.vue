<template>
  <div>
    <div class="topbox light pb-3 pt-3">
      <TopBar />
      <Shortcuts></Shortcuts>
    </div>
    <div class="playlistInfo text-center" >
      <div class="playlistImg">
        <img v-if="!isLoading" v-bind:src="playlistThumbnail" height="200px" width="200px" />
      </div>
      <br />
      <div class="playlistText">
        <h3 class="heading">{{ playlistName }}</h3>
        <p>{{ playlistDescription }}</p>
        <br />
      </div>
    </div>
    <hr />
    <div v-if="isLoading" class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="content d-flex flex-wrap">
      <div v-for="item in playlistTracks" :key="item.id">
        <SongPlaylist v-if="(item.track.preview_url) !== null" v-bind:item="item" />
      </div>
    </div>
    <div class="spacer end"></div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import axios from "axios";

import SongPlaylist from "~/components/SongPlaylist";
import Shortcuts from "~/components//Shortcuts";
import TopBar from "~/components//TopBar";
export default {
  data() {
    return {
      playlistID: this.$nuxt._route.params.id,
      playlistTracks: [],
      playlistName: "",
      playlistDescription: "",
      playlistThumbnail: "",
      isLoading: true,
      primaryColor: ""
    };
  },
  components: {
    SongPlaylist,
    Shortcuts,
    TopBar
  },
  mounted() {
    if (Cookies.get("token") === undefined) {
      const now = new Date();
      now.setTime(now.getTime() + 1 * 3600 * 1000);
      axios.get("http://localhost:9000/getAccessToken").then(res => {
        Cookies.set("token", res.data, { expires: now });
      });
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`
        }
      };
      axios
        .get(`https://api.spotify.com/v1/playlists/${this.playlistID}`, config)
        .then(res => {
          this.playlistTracks = res.data.tracks.items;
          this.isLoading = false;
          this.playlistName = res.data.name;
          this.playlistDescription = res.data.description;
          this.playlistThumbnail = res.data.images[0].url;
          this.primaryColor = res.data.primary_color;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style>
.playlistImg img {
  margin-top: 10px;
  border-radius: 6px;
}
.playlistText p {
  padding: 0;
  color: var(--text-color);
}
.spacer {
  padding: 20px 0px;
}
.playlistInfo {
  border-radius: 6px;
  padding: 10px 0;
}
</style>
