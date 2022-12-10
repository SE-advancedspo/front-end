<template>
  <v-app id="inspire">
    <NavBarEvents/>
    <v-main class="grey lighten-3">
      <ListEvents/>
    </v-main>
  </v-app>
</template>

<script>
  import NavBarEvents from '../components/NavBarEvents.vue'
  import ListEvents from '../components/ListEvents.vue'

  export default {
    components: {
      NavBarEvents,
      ListEvents,
    },
  }
</script>
