<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" v-on:my-click="number = $event"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"
export default {
  data: function() {
    return {
      number: 12,
      title: "title"
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
