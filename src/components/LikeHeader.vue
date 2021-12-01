<template>
  <div>
    <slot><h2>デフォルトのタイトル</h2></slot>
    <h1>{{ headerText }}</h1>
  </div>
</template>

<script>
export default {
  props: ["headerText"]
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
