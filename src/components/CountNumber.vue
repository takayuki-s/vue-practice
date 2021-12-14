<template>
  <div>
    <h2>{{ title | lowerCase | upperCase }}</h2>
    <h2>{{ subTitle | upperCase | lowerCase }}</h2>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
  </div>
</template>

<script>
import { tokyoNumber } from "@/tokyoNumber"

export default {
  mixins: [tokyoNumber],
  created() {
    console.log("created in component")
  }
}
</script>
