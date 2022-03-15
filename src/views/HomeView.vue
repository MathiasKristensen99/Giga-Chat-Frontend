<template>
  <main>
    <h2>Welcome!</h2>
  </main>
</template>

<script setup lang="ts">
import { FriendRequestStore } from "@/stores/friendRequestStore";
import { UserStore } from "@/stores/userStore";

const friendRequestStore = FriendRequestStore();
const userStore = UserStore();

function getFriendRequests() {
  friendRequestStore.getFriendRequests(userStore.loggedInUserId);
}
</script>

<style scoped></style>
