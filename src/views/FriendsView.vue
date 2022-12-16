<template>
  <v-app id="inspire">
    <NavBarFriends/>
    <v-main class="grey lighten-3">
      <ListUsers/>
    </v-main>
  </v-app>
</template>

<script>
  import NavBarFriends from '../components/NavBarFriends.vue'
  import ListUsers from '../components/ListUsers.vue'

  export default {
    components: {
      NavBarFriends,
      ListUsers,
    },
  }
</script>
