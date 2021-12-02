<template>
  <div>
    <LikeHeader>
      <h2>みなさん</h2>
      <template v-slot:title>
        <h2>こんにちは</h2>
      </template>
      <h3>はじめまして</h3>
      <template v-slot:number>
        <h2>{{ number }}</h2>
      </template>
    </LikeHeader>
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
