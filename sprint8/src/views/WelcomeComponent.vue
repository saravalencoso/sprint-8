<template>
  <nav>
    <ul>
      <li>HOME</li>
      <router-link to="/details">
        <li>STARSHIPS</li>
      </router-link>
      <router-link to="/login">
        <li>LOG IN</li>
      </router-link>
      <router-link to="/register">
        <li>REGISTER</li>
      </router-link>
    </ul>
  </nav>
  <h1>Llistat de naus oficials d'Star Wars</h1>
  <h2>Descobreix-ne tots els detalls</h2>
  <!-- <ListItem></ListItem> -->
</template>

<script>
import ListItem from "../components/ListItem.vue";

export default {
  name: "WelcomeComponent",
  components: {
    ListItem
  }
};
</script>

<style lang="css">
h1 {
  color: white;
}
img {
  width: 40%;
  margin-top: 10px;
}

nav {
  border-top: 1px solid #c5c5c5;
  border-bottom: 1px solid #c5c5c5;
  margin-top: 10px;
  margin-bottom: 30px;
}

ul {
  margin:0;
}

li {
  display: inline-block;
  color: white;
  list-style-type: none;
  padding: 10px;
  border-right: 1px solid #c5c5c5;
  border-left: 1px solid #c5c5c5;
  margin-top: 0;
  width: 25%;
}
</style>
