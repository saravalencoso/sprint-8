<template>
  <nav>
    <ul>
      <router-link to="/">
        <li>HOME</li>
      </router-link>
      <router-link to="/details">
        <li>STARSHIPS</li>
      </router-link>
      <li class="active">LOG IN</li>
      <router-link to="/register">
        <li>REGISTER</li>
      </router-link>
    </ul>
  </nav>
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
