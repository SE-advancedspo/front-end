<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      fixed
      color="black"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      class="white--text rounded-t-0"
    >
      <v-container class=" d-flex justify-space-between align-center">
        <v-btn icon x-large color="white">
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>

        <router-link to="/">
          <v-btn color="black" class="white--text">
            <v-toolbar-title>TN2night</v-toolbar-title>
          </v-btn>
        </router-link>
        
        <v-btn icon color="white" to="/spots">
           <v-icon>mdi-forum</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>
  </v-card>
</template>

<script>
  export default {
    name: "NavBar",
    components: {
    }
  };
</script>