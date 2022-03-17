<template>
  <div class="container py-5">
    <div class="row py-5">
      <div class="col-lg-7 mx-auto">
        <h1 class="text-center">Welcome {{ userStore.userName }}</h1>
        <div class="card-body p-5">
          <h3 class="mb-3">Your friends: {{ this.friendList.valueOf() }}</h3>
          <button class="btn btn-primary" @click="getFriendRequests">
            Get friend requests
          </button>
          <h4 class="mb-4">Friend requests:</h4>
          <button class="btn btn-primary" v-on:click="showPopUpWindow">
            New Chat
          </button>

          <ul v-if="friendRequests.length > 0" class="list-unstyled">
            <li
              v-for="(friendRequest, index) in friendRequests.values()"
              v-bind:key="index"
              class="mb-2"
            >
              {{ friendRequest.sentUserName }}
              <button
                @click="
                  friendRequestService.addFriend(
                    userStore.loggedInUserId,
                    friendRequest.sentUserName
                  ) +
                    friendRequestService.addFriend(
                      friendRequest.sentUserUuid,
                      userStore.userName
                    ) +
                    friendRequestService.deleteFriendRequest(
                      friendRequest.uuid
                    ) +
                    showConfirmation() +
                    getFriends(friendRequest.sentUserName)
                "
                class="btn-secondary"
              >
                Accept friend request
              </button>
              <h4>{{ confirmation.valueOf() }}</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="newChat-PopUp" v-if="popUpOpen">Ball</div>
  </div>
</template>

<script setup lang="ts">
import { UserStore } from "@/stores/userStore";
import { FriendRequestService } from "@/services/friendRequest.service";
import { ref } from "vue";
import type { FriendRequest } from "@/models/FriendRequest";
import {UserService} from "@/services/user.service";
import type { User } from "@/models/User";

const userStore = UserStore();
const friendRequestService: FriendRequestService = new FriendRequestService();
const userService: UserService = new UserService();
const friendRequests = ref<FriendRequest[]>([]);
const confirmation = ref("");
const friendList = ref(userStore.friendList);


function getFriendRequests() {
  friendRequestService.getFriendRequests(userStore.loggedInUserId).then((fq) =>
    fq.map((friendRequest) => {
      friendRequests.value.push(friendRequest);
    })
  );
}

function showConfirmation() {
  confirmation.value = "Friend request accepted";
}

function getFriends(newFriend: string) {
  friendList.value = userStore.friendList + ", " + newFriend;
}

function showPopUpWindow(): void {
  popUpOpen = 1;
  window.location.reload();
}
</script>

<style scoped>
.list-bullets {
  list-style: none;
}

.list-bullets li {
  display: flex;
  align-items: center;
}

.list-bullets li::before {
  content: "";
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #5784d7;
  border: 2px solid #8fb3f5;
  display: block;
  margin-right: 1rem;
}

/* Unordered list with custom numbers style */
ol.custom-numbers {
  list-style: none;
}

ol.custom-numbers li {
  counter-increment: my-awesome-counter;
}

ol.custom-numbers li::before {
  content: counter(my-awesome-counter) ". ";
  color: #2b90d9;
  font-weight: bold;
}

body {
  min-height: 100vh;
  background-color: #6190e8;
  background-image: linear-gradient(to right, #5784d7 0%, #a7bfe8 100%);
}

li {
  font-style: italic;
}
.New-Chat-Pop-Up {
  width: 150px;
  background: #33cc33;
  border-radius: 20px;
  align-self: center;
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  color: #ffffff;
}

.btn-primary {
}

.newChat-PopUp {
  flex-direction: column;
  width: 350px;
  height: 260px;
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
}
</style>
