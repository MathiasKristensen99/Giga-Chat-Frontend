<template>
  <h2>Search for user:</h2>
  <input v-model="inputName" placeholder="Enter name">
  <button type="submit" @click="searchUser"></button>
  <p v-if="userStore.userFound.length > 0">
    | User found: {{ userStore.userFound }}
  </p>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UserStore } from "@/stores/userStore";

const userStore = UserStore();
const inputName = ref("");

function searchUser() {
  console.log(userStore.userFound);
  userStore.searchUser(inputName.value);
}
</script>

<style scoped></style>
