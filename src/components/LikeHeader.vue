<template>
  <div>
    <slot name="title" :user="user"><h2>デフォルトのタイトル</h2></slot>
    <slot></slot>
    <p>いいねの数</p>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"],
  data() {
    return {
      user: {
        firstName: "Jack",
        lastName: "Donald"
      }
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
