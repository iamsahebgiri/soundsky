<template>
  <div>
    <HomeComponent />
    <h3>Editor's Picks</h3>
    <div v-if="loadingEditor" class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="content d-flex flex-wrap">
      <Album v-for="item in featuredPlaylists" :key="item.id" v-bind:item="item" />
    </div>
    <div class="spacer"></div>
    <h3>Categories</h3>
    <div v-if="loadingCat" class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="content d-flex flex-wrap">
      <Category v-for="item in categories" :key="item.id" v-bind:item="item" />
    </div>
    <div class="spacer"></div>
    <h3>New Releases</h3>
    <div v-if="loadingNew" class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="content d-flex flex-wrap">
        <Song v-for="item in newReleases" :key="item.id" v-bind:item="item" />
    </div>
    <div class="spacer"></div>
  </div>
</template>
<script>
import * as SpotifyWebApi from 'spotify-web-api-js';
import axios from 'axios';

import HomeComponent from '~/components/HomeComponent'
import Song from '~/components/Song'
import Album from '~/components/Album'
import Category from '~/components/Category'

let spotify = new SpotifyWebApi();

export default {
  data() {
    return {
      loadingEditor: true,
      loadingNew: true,
      loadingCat: true,
      newReleases: [],
      featuredPlaylists: [],
      artists: [],
      categories: [],
    }
  },
  components: {
    HomeComponent,
    Song,
    Album,
    Category
  },
  mounted() {
    axios.get('/api/token').then(res => {
      spotify.setAccessToken(res.data);

      spotify.getFeaturedPlaylists({ country: "IN" }, (error, response) => {
        this.featuredPlaylists = response.playlists.items;
        this.loadingEditor = false;
      });

      spotify.getCategories({ country: "IN" }, (error, response) => {
        this.categories = response.categories.items;
        console.log(response.categories.items);
        this.loadingCat = false;
      })
      spotify.getNewReleases({ country: "IN" }, (error, response) => {
        this.newReleases = response.albums.items;
        console.log(response.albums.items)
        this.loadingNew = false;
      })
    })
  }

}
</script>
<style>
h3 {
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2rem;
}
.spacer {
  padding: 20px 0px;
}
</style>
