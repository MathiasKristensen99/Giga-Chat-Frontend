<template>
  <h2>Search for user:</h2>
  <input v-model="inputName" placeholder="Enter name" />
  <button type="submit" @click="searchUser">Search</button>
  <br />
  <p v-if="userStore.userFound.length > 0">
    User found: {{ userStore.userFound }}
    <button type="submit" @click="sendFriendRequest">
      Send friend request
    </button>
  </p>
  <p>{{ confirmation.valueOf() }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UserStore } from "@/stores/userStore";
import { FriendRequestService } from "@/services/friendRequest.service";

const friendRequestService: FriendRequestService = new FriendRequestService();
const userStore = UserStore();
const inputName = ref("");
const confirmation = ref("");

function searchUser() {
  userStore.searchUser(inputName.value);
}

function sendFriendRequest() {
  confirmation.value = "Friend request sent!";
  friendRequestService.sendFriendRequest(
    userStore.loggedInUser.uuid,
    userStore.foundUser.uuid,
    false
  );
}
</script>

<style scoped></style>
