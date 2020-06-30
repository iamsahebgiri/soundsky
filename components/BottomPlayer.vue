<template>
  <div class="row fixed-bottom bottom-bar light mr-0 ml-0">
    <div class="col-2">
     <div class="row">
       <div class="thumb"></div>
       <div class="col">
         <span class="playerTitle">{{title}}</span>
         <br>
         <span class="playerArtist">{{playerArtist}}</span>
       </div>
     </div>
    </div>
    <div class="col-10 player">
      <vue-plyr ref="plyr">
      </vue-plyr>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      title: 'Baby',
      playerArtist: 'Justin Bieber',
    }
  },
  methods: {
    getPlyr() {
      return this.$refs.plyr.player;
    }
  },
  mounted() {
    this.$store.watch(() => this.$store.state.currentSong, () => {
      this.playerArtist = this.$store.state.currentSong.artists[0].name;
      this.title = this.$store.state.currentSong.name;
      console.log(this.$store.state.currentSong);
      this.getPlyr().source = {
        type: 'audio',
        autoplay: true,
        title: 'Example title',
        sources: [
          {
            src: this.$store.state.currentSong.preview_url,
            type: 'audio/mpeg',
          }
        ],
      };
    });
  },

}
</script>

<style>
.bottom-bar {
  padding: 6px;
}
.bottom-bar.light {
  background: rgba(255, 255, 255, 0.7);
}
.bottom-bar.dark {
  background: rgba(66, 66, 66, 0.7);
}
.song-info {
  width: 200px;
  color: var(--text-color);
}
.thumb {
  height: 48px;
  width: 48px;
  background: var(--light-gray);
  border-radius: 6px;
}

.playerArtist {
  margin:none;
  font-size: 14px;
  color: var(--text-color);
}

.plyr--audio .plyr__controls {
  background: none !important;
}
</style>
