<template>
  <div>
    <slot></slot>
    <h1>{{ headerText }}</h1>
  </div>
</template>

<script>
export default {
  props: ["headerText"]
}
</script>
