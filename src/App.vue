<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <router-view name="header"></router-view>
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム：</label>
    <input id="name" type="text" v-model="name">
    <br><br>
    <label for="comment">コメント：</label>
    <textarea id="comment" v-model="comment"></textarea>
    <br><br>
    <button @click="createComment">コメントをサーバーに送る</button>
    <h2>掲示板</h2>
    <transition name="fade" mode="out-in" @before-enter="beforeEnter">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      comment: "",
    };
  },
  created() {
    axios.get(
        "https://firestore.googleapis.com/v1/projects/vuejs-http-d048c/databases/(default)/documents/comments"
      )
      .then(response => {
        console.log(response)
      })
  },
  methods: {
    beforeEnter() {
      this.$root.$emit('triggerScroll')
    },
    createComment() {
      axios.post("https://firestore.googleapis.com/v1/projects/vuejs-http-d048c/databases/(default)/documents/comments",
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
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
</style>