<template>
  <div id="app">
  </div>
</template>

<script>
import axios from "./axios-auth";
export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: [],
    };
  },
  created() {
    axios.get(
        "/comments"
      )
      .then(response => {
        this.posts = response.data.documents
      })
  },
  methods: {
    beforeEnter() {
      this.$root.$emit('triggerScroll')
    },
    createComment() {
      axios.post("/comments",
      {
        fields: {
          name: {
            stringValue: this.name
          },
          comment: {
            stringValue: this.comment
          }
        }
      }
      ).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
      console.log("hello")
      this.name = "";
      this.comment = "";
    }
  }
}
</script>

<style scoped>
</style>