<template>
    <v-card
      class="mx-auto rounded-xl pa-4"
      min-width="350"
      max-width="450"
      outlined
      elevation="1"
    >
      <v-list-item class="d-flex justify-space-between">
        <div class="ml-n12 mr-5">
          <v-btn v-if="s.upVoted" icon class="amber lighten-2" @click="downVote()">
            <v-icon x-large color="deep-orange darken-3">mdi-fire-circle</v-icon>
          </v-btn>
          <v-btn v-else icon outlined @click="upVote()">
            <v-icon color="black">mdi-fire</v-icon>
          </v-btn>
        </div>
        <v-list-item-content class="d-flex justify-center align-center text-justify">
            <p class="mb-4 font-weight-medium">
              {{s.testo}}
            </p>
            <div class="d-flex justify-space-between align-center mt-2">
              <v-btn x-small @click="translateText()" class="teal--text text-accent3" elevation="0" color="white">
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
    import {translate} from '../api/translate/translate'
    import {upVote} from '../api/spots/upVoteSpot'
    import {downVote} from '../api/spots/downVoteSpot'
    import {isUserLogged} from '../api/checkUser';
    
    export default {
      name: 'CardSpot',
      props: ['info'],
      data() {
          return {
              s: this.info,
          }
      },
      methods: {
        translateText() {
          const spotData = {
            q: this.s.testo,
          }
          translate(spotData)
          .then((response) => {
            this.s.testo = response.data.translations[0].text
          })
          .catch((error) => {
            console.log(error)
          })
        },
        sendMessageToAuthor() {
          this.$root.toast.show({message: 'The author of this spot is: ' + this.info.autore + ". Although, it's not possible to contact him/her yet."})
        },
        upVote() {
          if(!isUserLogged()) {
            this.$root.toast.show({message: "Please, authenticate yourself before moving on."})
            this.$router.push("/login");
            return
          }
          upVote(this.s.id_spot)
          .then(() => {
            this.s.upVoted = true
            this.$forceUpdate()
          })
          .catch((error) => {
            console.log(error)
          })
        },
        downVote() {
          if(!isUserLogged()) {
            this.$root.toast.show({message: "Please, authenticate yourself before moving on."})
            this.$router.push("/login");
            return
          }
          downVote(this.s.id_spot)
          .then(() => {
            this.s.upVoted = false
            this.$forceUpdate()
          })
          .catch((error) => {
            console.log(error)
          })
        },
      },
      mounted() {

      }
  };
</script>