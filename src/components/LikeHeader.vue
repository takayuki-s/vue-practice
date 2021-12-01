<template>
  <div>
    <h1>{{ headerText }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"]
}
</script>
