<template>
  <v-app id="inspire">
    <NavBarProfile/>
    <v-main class="grey lighten-3">
      <ProfileInfo/>
    </v-main>
  </v-app>
</template>

<script>
  import NavBarProfile from '../components/NavBarProfile.vue'
  import ProfileInfo from '../components/ProfileInfo.vue'
  
  export default {
    components: {
      NavBarProfile,
      ProfileInfo,
    },
  }
</script>
