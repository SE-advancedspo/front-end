<template>
    <v-card
      class="mx-auto rounded-lg pa-4"
      min-width="350"
      max-width="450"
      min-height="175"
      outlined
      elevation="1"
    >
      <v-list-item three-line class="d-flex justify-center align-center">
        <v-list-item-content>
          <div class="d-flex justify-space-between">
            <v-list-item class="text-h5 mb-1 ma-n2 pa-0">
              <v-btn icon color="#EF5350">
                <v-icon>mdi-map-marker</v-icon>
              </v-btn>
              {{info.nome}}
            </v-list-item>
            <v-btn icon x-large>
              <v-icon v-if="info.salvato">mdi-bookmark-outline</v-icon>
              <v-icon v-else color="yellow">mdi-bookmark</v-icon>
            </v-btn>
          </div>
          <v-list-item-subtitle>
            {{info.data}}
          </v-list-item-subtitle>
          <v-list-item class="d-flex-column ma-0 pa-0">
            <div v-for="amico in info.numAmici" :key="amico">
              <v-icon icon>mdi-account-circle</v-icon>
            </div>
          </v-list-item>
        </v-list-item-content>       
      </v-list-item>
    </v-card>
  </template>

  <script>
    export default {
      name: 'CardEvento',
      props: ['info'],
      
      mounted: () => {
      }
    };
</script>