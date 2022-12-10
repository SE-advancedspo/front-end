<template>
  <v-app id="inspire">
    <NavBar/>
    <v-main class="grey lighten-3">
      <ListEvents/>
    </v-main>
  </v-app>
</template>

<script>
  import NavBar from '../components/NavBar.vue'
  import ListEvents from '../components/ListEvents.vue'

  export default {
    components: {
      NavBar,
      ListEvents,
    },
  }
</script>
