<template>
  <div class="artist">
    
    <nuxt-link :to="'/artists/'">
      <img :src="image" class="category-image">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {
      image : this.item.images[1]['url'],
    }
  },
  mounted() {
    console.log(this.item)
  }
}
</script>

<style>
</style>
