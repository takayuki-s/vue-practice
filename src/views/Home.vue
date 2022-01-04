<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <p>{{ doubleCount }}</p>
    <input type="text" v-model="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["doubleCount"]),
    // message() {
    //   return this.$store.getters.message
    // },
    message: {
      get() {
        return this.$store.getters.message
      },
      set(value) {
        this.$store.dispatch("updateMessage", value)
      }
    }
  },
  methods: {
    updateMessage(e) {
      this.$store.dispatch("updateMessage", e.target.value)
    },
    toUsers() {
      this.$router.push({
        name: 'users-id-profile',
        params: {id: 1},
      })
    },

  }
}
</script>
