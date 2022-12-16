<template>
  <v-app id="inspire">
    <NavBarRegistration/>
    <v-main class="grey lighten-3">
      <RegistrationForm/>
    </v-main>
  </v-app>
</template>

<script>
  import RegistrationForm from '../components/RegistrationForm.vue'
  import NavBarRegistration from '../components/NavBarRegistration.vue'

  export default {
    components: {
      NavBarRegistration,
      RegistrationForm,
    },
  }
</script>
