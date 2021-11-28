<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./LikeHeader.vue"
export default {
  data: function() {
    return {
      number: 5
    }
  },
  components: {
    LikeHeader: LikeHeader
  }
}
</script>

<style>
</style>
