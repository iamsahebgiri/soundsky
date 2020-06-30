<template>
    <div class="col error-page">
      <div class="row justify-content-center">
        <div class="col-lg-7 text-center">
          <img src="~/assets/undraw_not_found.svg" class="mb-4" alt="Page not found" height="250px">
          <h1 v-if="error.statusCode === 404">Page not found</h1>
          <h1 v-else>An error occured</h1>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
<style>
.error-page{
  margin-top: 100px;
}
</style>