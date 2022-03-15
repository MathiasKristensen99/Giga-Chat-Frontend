<template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <h2>Search for a user</h2>
          <div class="input-box">
            <input
              type="text"
              class="form-control"
              v-model="inputName"
              placeholder="Enter name"
            />
            <button class="btn-primary" @click="searchUser">Search</button>
          </div>
          <div class="list border-bottom">
            <i class="fa fa-fire"></i>
            <div class="d-flex flex-column ml-3">
              <h3 v-if="userStore.userFound.length > 0">
                User found: {{ userStore.userFound }}
                <button
                  type="button"
                  class="btn-secondary"
                  @click="sendFriendRequest"
                >
                  Send friend request
                </button>
              </h3>
              <h4>{{ confirmation.valueOf() }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UserStore } from "@/stores/userStore";
import { FriendRequestService } from "@/services/friendRequest.service";
import type { FriendRequest } from "@/models/FriendRequest";

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
    userStore.userName,
    userStore.foundUser.uuid,
    false
  );
}

</script>

<style scoped>
body {
  background-color: #eee;
}

.card {
  background-color: #fff;
  padding: 15px;
  border: none;
}

.input-box {
  position: relative;
}

.input-box i {
  position: absolute;
  right: 13px;
  top: 15px;
  color: #ced4da;
}

.form-control {
  height: 50px;
  background-color: #eeeeee69;
}

.form-control:focus {
  background-color: #eeeeee69;
  box-shadow: none;
  border-color: #eee;
}

.list {
  padding-top: 20px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
}

.border-bottom {
  border-bottom: 2px solid #eee;
}
</style>
