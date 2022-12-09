<template>
  <v-app id="inspire">
    <NavBar/>
    <v-main class="grey lighten-3">
      <ListSpots/>
    </v-main>
  </v-app>
</template>

<script>
  import NavBar from '../../components/NavBar.vue'
  import ListSpots from '../../components/ListSpots.vue'

  export default {
    components: {
      NavBar,
      ListSpots,
    },
  }
</script>
