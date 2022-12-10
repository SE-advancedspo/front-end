<template>
  <v-app id="inspire">
    <NavBarCreateSpot/>
    <v-main class="grey lighten-3">
      <CreateSpot/>
    </v-main>
  </v-app>
</template>

<script>
  import NavBarCreateSpot from '../components/NavBarCreateSpot.vue'
  import CreateSpot from '../components/CreateSpot.vue'

  export default {
    components: {
      NavBarCreateSpot,
      CreateSpot,
    },
  }
</script>
