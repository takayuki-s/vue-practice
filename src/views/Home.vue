<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  },
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
