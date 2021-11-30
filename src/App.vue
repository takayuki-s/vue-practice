<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>
    <LikeNumber :total-number="number"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"
export default {
  data: function() {
    return {
      number: 12
    }
  },
  components: {
    LikeHeader: LikeHeader
  }
}
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
