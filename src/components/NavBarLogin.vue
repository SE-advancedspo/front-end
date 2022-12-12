<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      fixed
      color="black"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      class="white--text rounded-t-0"
    >
      <v-container class=" d-flex justify-center align-center">
        <router-link to="/login">
          <v-btn color="black" class="white--text">
            <v-toolbar-title>TN2night</v-toolbar-title>
          </v-btn>
        </router-link>
      </v-container>
    </v-app-bar>
  </v-card>
</template>

<script>
  export default {
    name: "NavBarLogin",
    components: {
    }
  };
</script>