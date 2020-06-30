<template>
  <div class="category">
    <nuxt-link :to="'/category/'+item.id">
      <img v-bind:src="item.icons[0].url" class="category-image" />
      <div class="category-name">{{ item.name }}</div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>

<style>
.category {
  height: 190px;
  width: 190px;
  margin: 25px 10px;
}
.category .category-image {
  height: 190px;
  width: 190px;
  border-radius: 6px;
}
.category-name {
  margin-top: 6px;
  font-weight: 500;
}
</style>
