<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <!-- <p>{{ doubleCount }}</p> -->
    <p>{{ myComponentDoubleCount }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // computed: mapGetters(["doubleCount"]),
  computed: mapGetters({
    myComponentDoubleCount: "doubleCount"
  }),
  methods: {
    toUsers() {
      this.$router.push({
        name: 'users-id-profile',
        params: {id: 1},
      })
    },

  }
}
</script>
