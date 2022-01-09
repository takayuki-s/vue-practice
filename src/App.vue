<template>
  <div id="app">
    <header>
      <router-link to="/" class="header-item">掲示板</router-link>
      <router-link to="/login" class="header-item">ログイン</router-link>
      <router-link to="/register" class="header-item">登録</router-link>
    </header>
    <router-view></router-view>
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
.header-item {
  padding: 10px;
}
</style>