<template>
  <form @submit.prevent="register">
    <h1>Register</h1>
    <input type="text" placeholder="Username" v-model="username" required/>
    <input type="password" placeholder="Password" v-model="password" required/>
    <input type="submit" value="Register" />
  </form>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        register() {
            localStorage.setItem('username', this.username)
            localStorage.setItem('password', this.password)
        }
    }
}
</script>
