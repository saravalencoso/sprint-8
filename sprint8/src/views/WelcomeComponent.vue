<template>
  <nav>
    <ul>
      <li>HOME</li>
      <li>STARSHIPS</li>
    </ul>
  </nav>
  <ListItem></ListItem>
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

<style lang="css" scoped>
h1 {
  color: white;
}
img {
  width: 40%;
  margin-top: 10px;
}

nav {
  border-top: 1px solid #c5c5c5;
  margin-top: 10px;
  margin-bottom: 30px;
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
