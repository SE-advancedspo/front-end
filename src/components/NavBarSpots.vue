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
        <v-btn icon x-large color="white" @click="goToFriends()">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn text color="black" class="white--text">
          <v-toolbar-title>Spots</v-toolbar-title>
        </v-btn>
        
        <v-btn icon x-large color="white" to="/">
           <v-icon>mdi-glass-wine</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>
  </v-card>
</template>

<script>
  import { isUserLogged } from '@/api/checkUser';

  export default {
    name: "NavBarSpots",
    methods: {
      goToFriends() {
        if(!isUserLogged())
        {
          this.$root.toast.show({message: "Please, authenticate yourself before moving on."})
          this.$router.push("/login");
        } else
        {
          this.$router.push("/friends");
        }
      }
    },
  };
</script>