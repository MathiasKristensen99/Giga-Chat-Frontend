<template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <h2>Create a user</h2>
          <input
            type="text"
            class="form-control"
            v-model="inputName"
            placeholder="Enter name"
          />
          <br />
          <input
            type="text"
            class="form-control"
            v-model="inputEmail"
            placeholder="Enter Email"
          />
          <br />
          <form>
            <label> Select gender </label>
            <select v-model="inputGender">
              <option value="Man">Man</option>
              <option value="Woman">Woman</option>
              <option value="Other">Other</option>
            </select>
          </form>
          <br />
          <input
            type="password"
            class="form-control"
            v-model="inputPassword"
            placeholder="Enter Password"
          />
          <br />
          <button class="btn-primary" @click="handleCreateUser">Create</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserStore } from "@/stores/userStore";
import { ref } from "vue";
import { ProfileStore } from "@/stores/profileStore";

const profileStore = ProfileStore();
const userStore = UserStore();
const inputName = ref("");
const inputGender = ref("");
const inputEmail = ref("");
const inputPassword = ref("");

function handleCreateUser() {
  userStore.createUser(inputName.value, inputEmail.value, inputPassword.value);
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
