<template>
  <div>
    <p v-border:solid.round.shadow="{width: '3px', color: 'red'}">Home {{ tmpData }}</p>
    <h2>{{ title | upperCase }}</h2>
    <h2>{{ subTitle | upperCase }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tmpData: "hello",
      title: "Welcome to Tokyo",
      subTitle: "Tokyo is a great city",
    };
  },
  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.26)";
      }
    }
  }
}
</script>
