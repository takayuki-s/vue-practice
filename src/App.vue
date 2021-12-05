<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" v-on:my-click="number = $event"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input id="title" type="text" v-model.lazy="eventData.title">
      <p>{{ eventData.title }}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"
import Home from "./components/Home.vue"
import About from "./components/About.vue"

export default {
  data: function() {
    return {
      number: 12,
      currentComponent: "Home",
      eventData: {
        title: "タイトル"
      }
    }
  },
  components: {
    LikeHeader,
    Home,
    About
  }
}
</script>
