<template>
  <div id="login">
    <h1>Login</h1>
    <input type="text" name="email" v-model="inputEmail" placeholder="Email" />
    <input
      type="password"
      name="password"
      v-model="inputPassword"
      placeholder="Password"
    />
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script setup lang="ts">
import { UserStore } from "@/stores/userStore";
import { ref } from "vue";

const userStore = UserStore();
const inputEmail = ref("");
const inputPassword = ref("");

function login() {
  userStore.login(inputEmail.value, inputPassword.value);
}
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>
