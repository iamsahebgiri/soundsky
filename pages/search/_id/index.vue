<template>
  <div>
    <h3 class="search-result-text">Search results for {{ searchTerm}}</h3>
    <div v-if="isLoading" class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="content d-flex flex-wrap">
      <div v-for="item in results" :key="item.id">
        <SearchItem v-if="(item.preview_url) !== null" v-bind:item="item" />
      </div>
    </div>
    <p v-if="noResult">No result found</p>
    <div class="spacer end"></div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import axios from "axios";

import SearchItem from "~/components/SearchItem";
export default {
  data() {
    return {
      searchTerm: this.$nuxt._route.params.id,
      results: null,
      isLoading: true,
      noResult: false
    };
  },
  components: {
    SearchItem
  },
  methods: {
    getData() {
      const config = {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`
        }
      };
      axios
        .get(
          `https://api.spotify.com/v1/search?q=${this.searchTerm}&type=track&limit=50`,
          config
        )
        .then(res => {
          console.log(res.data);
          this.isLoading = false;
          this.results = res.data.tracks.items;
          if (res.data.tracks.items == 0) {
            this.noResult = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    if (Cookies.get("token") === undefined) {
      const now = new Date();
      now.setTime(now.getTime() + 1 * 3600 * 1000);
      axios.get("https://soundsky.netlify.app/.netlify/functions/getAccessToken").then(res => {
        Cookies.set("token", res.data, { expires: now });
        this.getData();
      });
    } else {
      this.getData();
    }
  }
};
</script>

<style scoped>
.search-result-text {
  padding-top: 20px;
}
</style>