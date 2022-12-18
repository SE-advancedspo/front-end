<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      fixed
      color="black"
      elevate-on-scroll
      
      class="white--text rounded-t-0"
      style="z-index: 999;"
    >
    <v-container class=" d-flex justify-space-between align-center">
        <v-btn icon x-large color="white" @click="logout()">
          <v-icon>mdi-logout</v-icon>
        </v-btn>

        <v-btn text class="white--text">
          <v-toolbar-title>Profile</v-toolbar-title>
        </v-btn>

        <v-btn icon x-large color="white" disabled>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
    </v-container>
    </v-app-bar>
  </v-card>
</template>

<script>
  export default {
    name: "NavBarLogin",
    methods: {
      logout() {
        localStorage.setItem('username', "")
        localStorage.setItem('token', undefined)
        this.$root.toast.show({color: "red", message: "Successfully logged out"})
        this.$router.push('/')
      }
    }
  };
</script>