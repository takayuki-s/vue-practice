<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <router-view name="header"></router-view>
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム：</label>
    <input id="name" type="text" v-model="name">
    <br><br>
    <label for="comment">コメント：</label>
    <textarea id="comment" v-model="comment"></textarea>
    <h2>掲示板</h2>
    <transition name="fade" mode="out-in" @before-enter="beforeEnter">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      comment: "",
    };
  },
  methods: {
    beforeEnter() {
      this.$root.$emit('triggerScroll')
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