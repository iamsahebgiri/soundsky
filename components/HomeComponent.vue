<template>
  <div class="topbox light pb-3 pt-3">
    <TopBar/>
    <div class="row pr-0 mr-0">
      <!-- <div class="col-6 text-container">
        <div class="para">
          <div class="big-text text-wrap">{{ bigText }}</div>
          <div class="small-text text-wrap">{{ smallText }}</div>
        </div>
        <div class="call-to-action mt-4">
          <button class="btn-play-now">Play Now</button>
        </div>
      </div>
      <div class="col-6 illustration d-flex justify-content-around">
        <img src="~/assets/undraw_compose_music.svg" alt="Music">
      </div> -->
      
    </div>
    <Shortcuts></Shortcuts>
  </div>
</template>

<script>

import Shortcuts from './Shortcuts'
import TopBar from './TopBar'

export default {
  data() {
    return {
      bigText: "Feel the music",
      smallText: "Thirty seconds of ringtone is enough to ring your smart phone",
      
    };
  },
  components: {
    Shortcuts,
    TopBar
  }

};
</script>

<style>
.illustration img {
  height: 220px;
}

.para {
  font-family: 'Poppins';
  width: 400px;
  margin-top: 44px;
  color: var(--text-color);
}
.para .big-text {
  font-weight: 500;
  font-size: 45px;
  line-height: 45px;
}
.para .small-text {
  line-height: 20px;
  margin-top: 10px;
  width: 300px;
  color: var(--grey-text);
}

.btn-play-now {
  background-color: var(--dodger-blue);
  border: 2px solid var(--dodger-blue);
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  border-radius: 3px;
  padding: 6px 18px;
  user-select: none;
}
.btn-play-now:focus {
  outline: 0;
}
.btn-play-now:hover {
  background: var(--bg);
  color: var(--dodger-blue);
}
.heading {
  color: var(--text-color);
  font-weight: 500;
}
.content .box-item {
  height: 165px;
  width: 165px;
  margin: 10px;
  background: var(--light-gray);
  border-radius: 10px;
}
</style>
