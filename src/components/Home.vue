<template>
  <div>
    <p v-border:solid.round.shadow="{width: '3px', color: 'red'}">Home {{ tmpData }}</p>
    <h2>{{ upperCaseTitle }}</h2>
    <h2>{{ upperCaseSubTitle }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tmpData: "hello",
      title: "Welcome to Tokyo",
      subtitle: "Tokyo is a great city",
    };
  },
  computed: {
    upperCaseTitle() {
      return this.title.toUpperCase();
    },
    upperCaseSubTitle() {
      return this.subtitle.toUpperCase();
    }
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
