<template>
  <v-app id="inspire">
    <NavBarLogin/>
    <v-main class="grey lighten-3">
      <LoginForm/>
    </v-main>
  </v-app>
</template>

<script>
  import LoginForm from '../components/LoginForm.vue'
  import NavBarLogin from '../components/NavBarLogin.vue'

  export default {
    components: {
      NavBarLogin,
      LoginForm,
    },
  }
</script>
