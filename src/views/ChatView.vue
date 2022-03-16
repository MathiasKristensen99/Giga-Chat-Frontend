<template>
  <h2>Send Chat</h2>
  <input v-model="txtChatInput" placeholder="Enter chat" /> <br />
  <input v-model="txtRoomInput" placeholder="Enter room" /> <br />
  <button @click="sendChat">Send</button>
  <h2>All chats:</h2>
  <input v-model="txtRoomListener" placeholder="Enter room name"> <br />
  <button @click="listenToRoom">Connect</button>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <div class="">
          <div class="card-body height3">
            <ul class="chat-list">
              <li
                v-for="(chat, index) in chatStore.chats"
                v-bind:key="index"
                class="out"
              >
                <div class="chat-body">
                  <div class="chat-message">
                    <h5>{{ userStore.userName }}</h5>
                    <p>{{ chat.text }}</p>
                  </div>
                </div>
              </li>
              <li
                v-for="(chat, index) in chatStore.chats"
                v-bind:key="index"
                class="in"
              >
                <div class="chat-body">
                  <div class="chat-message">
                    <h5>Christian Hussmann</h5>
                    <p>{{ chat.text }}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="type_msg">
            <div class="input_msg_write">
              <input
                v-model="txtChatInput"
                type="text"
                class="write_msg"
                placeholder="Type a message"
              />
              <button @click="sendChat" class="msg_send_btn" type="button">
                <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChatStore } from "@/stores/chatStore";
import { ref } from "vue";
import {UserStore} from "@/stores/userStore";

const userStore = UserStore();
const chatStore = ChatStore();
const txtChatInput = ref("");
const txtRoomInput = ref("");
const txtRoomListener = ref("");

function sendChat() {
  chatStore.createChat({ text: txtChatInput.value, room: txtRoomInput.value });
}

function listenToRoom() {
  chatStore.setRoom(txtRoomListener.value);
}
</script>

<style scoped>
body {
  background: #eee;
}
.chat-list {
  padding: 0;
  font-size: 0.8rem;
}

.chat-list li {
  margin-bottom: 10px;
  overflow: auto;
  color: #ffffff;
}

.chat-list .chat-img {
  float: left;
  width: 48px;
}

.chat-list .chat-img img {
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  width: 100%;
}

.chat-list .chat-message {
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  background: #5a99ee;
  display: inline-block;
  padding: 10px 20px;
  position: relative;
}

.chat-list .chat-message:before {
  content: "";
  position: absolute;
  top: 15px;
  width: 0;
  height: 0;
}

.chat-list .chat-message h5 {
  margin: 0 0 5px 0;
  font-weight: 600;
  line-height: 100%;
  font-size: 0.9rem;
}

.chat-list .chat-message p {
  line-height: 18px;
  margin: 0;
  padding: 0;
}

.chat-list .chat-body {
  margin-left: 20px;
  float: left;
  width: 70%;
}

.chat-list .in .chat-message:before {
  left: -12px;
  border-bottom: 20px solid transparent;
  border-right: 20px solid #5a99ee;
}

.chat-list .out .chat-body {
  float: right;
  margin-right: 20px;
  text-align: right;
}

.chat-list .out .chat-message {
  background: #fc6d4c;
}

.chat-list .out .chat-message:before {
  right: -12px;
  border-bottom: 20px solid transparent;
  border-left: 20px solid #fc6d4c;
}

.card .card-header:first-child {
  -webkit-border-radius: 0.3rem 0.3rem 0 0;
  -moz-border-radius: 0.3rem 0.3rem 0 0;
  border-radius: 0.3rem 0.3rem 0 0;
}
.card .card-header {
  background: #17202b;
  border: 0;
  font-size: 1rem;
  padding: 0.65rem 1rem;
  position: relative;
  font-weight: 600;
  color: #ffffff;
}

.content {
  margin-top: 40px;
}

.type_msg {
  border-top: 1px solid #c4c4c4;
  position: relative;
  display: flex;
  height: 100%;
}
.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}

.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}
</style>
