<template>
  <div>
    <HomeComponent />
    <div v-if="isLoading" class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="content d-flex flex-wrap">
      <Album v-for="item in categoryPlaylist" :key="item.id" v-bind:item="item" />
    </div>
  </div>
</template>
<script>
import * as SpotifyWebApi from 'spotify-web-api-js';
import axios from 'axios';

let spotify = new SpotifyWebApi();

import HomeComponent from '~/components/HomeComponent'
import SongPlaylist from '~/components/SongPlaylist'
import Album from '~/components/Album'

export default {
  data() {
    return {
      categoryId: this.$nuxt._route.params.id,
      isLoading: true,
      categoryPlaylist: []
    }
  },
  components: {
    HomeComponent,
    SongPlaylist,
    Album
  },
  mounted() {
    axios.get('/api/token').then(res => {
      spotify.setAccessToken(res.data);

      spotify.getCategoryPlaylists(this.categoryId, {}, (error, response) => {
        
        this.categoryPlaylist = response.playlists.items;
        console.log(response.playlists.items)
        this.isLoading= false;
      })
    })
  }
}
</script>
