<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      fixed
      color="black"
      elevate-on-scroll
      
      class="white--text rounded-t-0"
      style="z-index: 999;"
    >
      <v-container class=" d-flex justify-center align-center">
          <v-btn text color="black" class="white--text">
            <v-toolbar-title>registration</v-toolbar-title>
          </v-btn>
      </v-container>
    </v-app-bar>
  </v-card>
</template>

<script>
  export default {
    name: "NavBarRegistration",
    components: {
    }
  };
</script>