<template>
  <div>
    <HomeComponent />
    <div class="playlistInfo text-center">
      <div class="playlistImg">
        <img v-if="!isLoading" v-bind:src="playlistThumbnail" height="200px" width="200px" />
      </div>
      <br />
      <div class="playlistText">
        <h3>{{ playlistName }}</h3>
        {{ playlistDescription }}
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
    <div class="spacer"></div>
  </div>
</template>

<script>
import * as SpotifyWebApi from 'spotify-web-api-js';
import axios from 'axios';

let spotify = new SpotifyWebApi();

import HomeComponent from '~/components/HomeComponent'
import SongPlaylist from '~/components/SongPlaylist'
export default {
  data() {
    return {
      playlistID: this.$nuxt._route.params.id,
      playlistTracks: [],
      playlistName: '',
      playlistDescription: '',
      playlistThumbnail: '',
      isLoading: true,
    }
  },
  components: {
    HomeComponent,
    SongPlaylist
  },
  mounted() {
    axios.get('/api/token').then(res => {
      spotify.setAccessToken(res.data);

      spotify.getPlaylist(this.playlistID, {}, (error, response) => {
        this.playlistTracks = response.tracks.items;
        this.isLoading = false;
        this.playlistName = response.name;
        this.playlistDescription = response.description;
        this.playlistThumbnail = response.images[0].url;
        console.log(response)
      })
    })
  }

}
</script>
<style>
.playlistImg img {
  border-radius: 6px;
}
.spacer {
  padding: 20px 0px;
}
</style>
