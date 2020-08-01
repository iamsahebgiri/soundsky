<template>
  <div class="topbox light pb-3 pt-3">
    <TopBar />
    <!-- <div class="carousel-container">
      <div class="carousel bg1">
        <img src="~/assets/1.png" />
      </div>
      <div class="carousel bg2">
        <img src="~/assets/2.png" />
      </div>
    </div> -->
    <Shortcuts></Shortcuts>
  </div>
</template>

<script>
import Shortcuts from "./Shortcuts";
import TopBar from "./TopBar";

export default {
  components: {
    Shortcuts,
    TopBar
  }
};
</script>

<style>
.carousel-container {
  width: 100%;
  display: flex;
  margin-top: 20px;
}
.carousel {
  border-radius: 6px;
  height: 300px;
  width: 50%;
  margin: 0 10px;
}
.carousel img {
  height: 300px;
  border-radius: 6px;
}
.bg1 {
  background: #8eb8c4;
}
.bg2 {
  background: #f9b933;
}
</style>
