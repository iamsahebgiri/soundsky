<template>
  <div class="album">
    <nuxt-link :to="'/playlist/'+item.id">
      <img v-bind:src="item.images[0].url" class="album-image" />
      <div class="album-name text-truncate">{{ item.name }}</div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>

<style>
.album {
  height: 190px;
  width: 190px;
  margin: 25px 10px;
}
.album .album-image {
  height: 190px;
  width: 190px;
  border-radius: 6px;
  background: var(--gray-1);
}
.album-name {
  margin-top: 8px;
  font-weight: 500;
  text-decoration: none;
}
</style>
