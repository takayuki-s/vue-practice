<template>
  <div>
    <h2>{{ title | lowerCase | upperCase }}</h2>
    <h2>{{ subTitle | upperCase | lowerCase }}</h2>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tmpData: "hello",
      title: "Welcome to Tokyo",
      subTitle: "Tokyo is a great city",
      number: 0,
    };
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
}
</script>
