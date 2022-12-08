<template>
    <v-card
      class="mx-auto"
      max-width="344"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            {{user.password}}
          </div>
          <v-list-item-title class="text-h5 mb-1">
            {{user.username}}
          </v-list-item-title>
          <v-list-item-subtitle>{{user.password}}</v-list-item-subtitle>
        </v-list-item-content>
  
        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        ></v-list-item-avatar>
      </v-list-item>
  
      <v-card-actions>
        <v-btn
          outlined
          rounded
          text
        >
          Button
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>

  <script>
    export default {
      name: 'CardEvento',
      props: ['user'],
      
      mounted: () => {
        console.log("user: " + this.user)
      }
    };
</script>