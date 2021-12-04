<template>
  <div>
    <LikeHeader>
      <template>
        <p>{{ slotProps }}</p>
        <h2>みなさん</h2>
        <h3>はじめまして</h3>
        <p>よろしくお願いします</p>
      </template>
      <template #[title]></template>
      <!-- <template v-slot:title="slotProps">
        <h2>こんにちは</h2>
        <h2>{{ slotProps }}</h2>
      </template> -->
      <!-- <template v-slot:number>
        <h2>{{ number }}</h2>
      </template> -->
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
