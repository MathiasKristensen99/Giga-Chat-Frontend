<template >
  <body>
  <nav>
    <RouterLink to="/home">Home</RouterLink> |
    <RouterLink to="/createUser">Create User</RouterLink> |
    <RouterLink to="/chat">Join Chat</RouterLink> |
    <RouterLink to="/login">Login</RouterLink> |
    <RouterLink to="/searchUser">Search users</RouterLink>

    <span v-if="userStore.userName.length > 0">
      | Logged in as: {{ userStore.userName }}</span
    >
  </nav>
  <br/>

  <RouterView />
  </body>
</template>


<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { UserStore } from "@/stores/userStore";

const userStore = UserStore();
</script>

<style>


</style>
