<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <router-view name="header"></router-view>
    <h2>登録</h2>
    <label for="email">Email：</label>
    <input id="email" type="email" v-model="email">
    <br><br>
    <label for="password">パスワード：</label>
    <input id="password" type="password" v-model="password">
    <br><br>
    <button @click="resister">送信</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    resister() {
      alert("login")
    }
  }
}
</script>