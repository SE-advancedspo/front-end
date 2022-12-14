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
        <v-btn icon x-large color="white" to="/profile">
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>

        <v-btn icon class="white--text" to="/">
          <v-toolbar-title>Events</v-toolbar-title>
        </v-btn>
        
        <v-btn icon x-large color="white" to="/spots">
           <v-icon>mdi-forum</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>
  </v-card>
</template>

<script>
  export default {
    name: "NavBarEvents",
    components: {
    }
  };
</script>