<template>
  <nav>
    <h2>Home</h2>
    <router-link to="/" active-class="link--active" exact class="link">Home</router-link>
    <router-link to="/users" active-class="link--active" exact class="link">Users</router-link>
    <button @click="increment(1)">+1</button>
    <button @click="decrement(1)">-1</button>
  </nav>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["increment", "decrement"])
  }
}
</script>


<style scoped>
.link {
  margin-right: 10px;
}
.link--active {
  font-size: 20px;
}
</style>