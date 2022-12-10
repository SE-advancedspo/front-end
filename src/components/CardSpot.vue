<template>
    <v-card
      class="mx-auto rounded-xl pa-4"
      min-width="350"
      max-width="450"
      min-height="25"
      outlined
      elevation="1"
    >
      <v-list-item class="d-flex justify-space-between">
        <div class="ml-n12 mr-5">
          <v-btn v-if="info.upVoted" icon class="amber lighten-2" @click="toggleUpVoted()">
            <v-icon x-large color="deep-orange darken-3">mdi-fire-circle</v-icon>
          </v-btn>
          <v-btn v-else icon outlined @click="toggleUpVoted()">
            <v-icon color="black">mdi-fire</v-icon>
          </v-btn>
        </div>
        <v-list-item-content class="d-flex justify-center align-center text-justify">
            <p class="mb-4 font-weight-medium">
              {{info.testo}}
            </p>
            <div class="d-flex justify-space-between align-center mt-2">
              <v-btn x-small @click="translate()" class="teal--text text-accent3" elevation="0" color="white">
                <span class="text-decoration-underline ml-n2">Translate</span>
                <v-icon icon x-small class="px-2">mdi-translate-variant</v-icon>
              </v-btn>
              <v-btn icon color="black" @click="sendMessageToAuthor()">
                <v-icon >mdi-message-reply-text-outline</v-icon>
              </v-btn>
            </div>
        </v-list-item-content>       
      </v-list-item>
    </v-card>
  </template>

  <script>
    export default {
      name: 'CardSpot',
      props: ['info'],
      data() {
          return {
              s: this.info
          }
      },
      methods: {
        translate() {
          console.log('translated')
          this.s.testo = this.s.testo.split('').reverse().join('')
        },
        sendMessageToAuthor() {
          console.log('message sent to: ' + this.info.autore)
        },
        toggleUpVoted() {
          this.s.upVoted = !this.s.upVoted
        },
      },
    };
</script>