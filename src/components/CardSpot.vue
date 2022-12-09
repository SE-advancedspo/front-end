<template>
    <v-card
      class="mx-auto rounded-lg pa-4"
      min-width="350"
      max-width="450"
      min-height="25"
      outlined
      elevation="1"
    >
      <v-list-item class="d-flex justify-center align-center text-justify">
        <v-list-item-content >
            <p class="mb-4">
              {{s.testo}}
            </p>
            <div class="d-flex justify-space-between align-center mt-4">
              <v-btn x-small @click="translate()" class="teal--text text-accent3" elevation="0" color="white">
                <v-icon icon class="mr-2 ml-n2">mdi-translate-variant</v-icon>
                <span class="text-decoration-underline">Translate</span>
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
          console.log('message sent to: ' + this.s.autore)
        }
      },
    };
</script>