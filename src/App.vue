<template>
  <div>
    <LikeHeader headerText="hello">
      <h1>トータルのいいね数</h1>
      <h2>{{ number }}</h2>
    </LikeHeader>
    <!-- <h2>{{ number }}</h2> -->
    <LikeNumber :total-number="number" test-props="こんにちは" v-on:my-click="number = $event"></LikeNumber>
    <LikeNumber :total-number="number" test-props="こんばんは"></LikeNumber>
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
