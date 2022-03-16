<template>
  <div id="login">
    <h1>Login</h1>
    <input type="text" name="email" v-model="input.email" placeholder="Email" />
    <input type="password" name="password" v-model="input.password" placeholder="Password" />
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data() {
    return {
      input: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    async login() {
      const { email, password } = this;
      const res = await fetch(
        "https://SomberHandsomePhysics--five-nine.repl.co/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, password })
        }
      );
      const data = await res.json();
      console.log(data);
    }
  }
};
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #CCCCCC;
  background-color: #FFFFFF;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>