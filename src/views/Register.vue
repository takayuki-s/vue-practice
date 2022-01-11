<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <h2>登録</h2>
    <p>{{clientKey}}</p>
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
import axios from "../axios-auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      clientKey: process.env.VUE_APP_FIREBASE_API_KEY,
    };
  },
  methods: {
    resister() {
      axios.post(
        `accounts:signUp?key=${process.env.VUE_APP_FIREBASE_API_KEY}`,
        {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        }
      ).then(response => {
        console.log(response);
      })
    }
  }
}
</script>