<template>
  <form @submit.prevent="login">
    <h1>Login</h1>
    <input type="text" placeholder="Username" v-model="username" required />
    <input type="password" placeholder="Password" v-model="password" required />
    <input type="submit" value="Login" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const localUsername = localStorage.getItem("username");
      const localPassword = localStorage.getItem("password");

      // find(item => predicate) -> found value
      if(this.username !== localUsername) {
        return alert('Username not found')
      }

      if(this.password !== localPassword) {
        return alert('Wrong password')
      }

      console.log('Success')
    }
  },
};
</script>
