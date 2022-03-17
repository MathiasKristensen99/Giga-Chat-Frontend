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
    <button class="btn btn-primary" type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script setup lang="ts">
import { UserStore } from "@/stores/userStore";
import { ref } from "vue";

const userStore = UserStore();
const inputEmail = ref("");
const inputPassword = ref("");

function login(this: any) {
  userStore.login(inputEmail.value, inputPassword.value);
}
</script>

<style scoped>
#login {
  width: 500px;
  border: 2px solid #cccccc;
  border-radius: 15px;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}






</style>
