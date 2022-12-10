<template>
  <v-app id="inspire">
    <NavBarSpots/>
    <v-main class="grey lighten-3">
      <ListSpots/>
    </v-main>
  </v-app>
</template>

<script>
  import NavBarSpots from '../components/NavBarSpots.vue'
  import ListSpots from '../components/ListSpots.vue'

  export default {
    components: {
      NavBarSpots,
      ListSpots,
    },
  }
</script>
