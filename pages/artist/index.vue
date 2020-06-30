
<template>
  <div>
    <HomeComponent />
    <h3>Artist</h3>
    <Artist v-for="item in artists" :key="item.id" v-bind:item="item" />
  </div>
</template>

<script>
import * as SpotifyWebApi from 'spotify-web-api-js';
import axios from 'axios';

import HomeComponent from '~/components/HomeComponent'
import Artist from '~/components/Artist'

let spotify = new SpotifyWebApi();
export default {
  data() {
    return {
      artistID: '4YRxDV8wJFPHPTeXepOstw',
      artists: []
    }
  },
  components: {
    HomeComponent,
    Artist,
  },
  mounted() {
    axios.get('/api/token').then(res => {
      spotify.setAccessToken(res.data);
      spotify.getArtistRelatedArtists(this.artistID, (error, response) => {
          console.log(response.artists[0])
          this.artists = response.artists;
      })
    })
  }

}
</script>

<style>
</style>
