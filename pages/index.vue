<template>
  <div>
    <HomeComponent />

    <h3 class="heading">Editor's Picks</h3>
    <div v-if="loadingEditor" class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="content d-flex flex-wrap">
      <Album v-for="item in featuredPlaylists" :key="item.id" v-bind:item="item" />
    </div>
    <!-- <div class="spacer"></div> -->
    <h3 class="heading">Categories</h3>
    <div v-if="loadingCat" class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="content d-flex flex-wrap">
      <Category v-for="item in categories" :key="item.id" v-bind:item="item" />
    </div>

    <h3 class="heading">Featured</h3>
    <div v-if="loadingNew" class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="content d-flex flex-wrap">
      <Song v-for="item in newReleases" :key="item.id" v-bind:item="item" />
    </div>
    <!-- <div class="spacer"></div> -->

    <!-- <div class="spacer end"></div> -->
  </div>
</template>
<script>
import axios from "axios";
import Cookies from "js-cookie";

import HomeComponent from "~/components/HomeComponent";
import Song from "~/components/Song";
import Album from "~/components/Album";
import Category from "~/components/Category";

export default {
  data() {
    return {
      loadingEditor: true,
      loadingNew: true,
      loadingCat: true,
      newReleases: [],
      featuredPlaylists: [],
      artists: [],
      categories: []
    };
  },
  components: {
    HomeComponent,
    Song,
    Album,
    Category
  },
  mounted() {
    console.log("Index mounted...");
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
        .all([
          axios.get(
            "https://api.spotify.com/v1/browse/categories?country=IN&limit=50",
            config
          ),
          axios.get(
            "https://api.spotify.com/v1/browse/featured-playlists?country=IN",
            config
          ),
          axios.get(
            "https://api.spotify.com/v1/browse/new-releases?country=IN&limit=50",
            config
          )
        ])
        .then(
          axios.spread((categories, featured, newReleases) => {
            this.categories = categories.data.categories.items;
            this.newReleases = newReleases.data.albums.items;
            this.featuredPlaylists = featured.data.playlists.items;
            this.loadingCat = false;
            this.loadingNew = false;
            this.loadingEditor = false;
            // console.log(categories, featured, newReleases);
          })
        )
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style>
.heading {
  font-size: 24px;
  font-weight: 600;
  margin-left: 10px;
}
.content {
  padding-bottom: 85px;
}
</style>
