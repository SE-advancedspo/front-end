<template>
    <v-card
      class="mx-auto rounded-xl pa-4"
      min-width="350"
      max-width="450"
      min-height="175"
      outlined
      elevation="4"
    >
      <v-list-item three-line class="text-left">
        <v-list-item-content>
          <div class="d-flex justify-space-between">
            <v-list-item class="text-h5 mb-1 ma-n2 pa-0">
              <v-btn icon color="#EF5350" @click="openGMaps()">
                <v-icon>mdi-map-marker</v-icon>
              </v-btn>
              {{e.nome}}
            </v-list-item>
            <v-btn v-if="this.e.salvato" icon x-large @click="unfollowBookmarkEvento()">
              <v-icon color="yellow">mdi-bookmark</v-icon>
            </v-btn>
            <v-btn v-else icon x-large @click="followBookmarkEvento()">
              <v-icon>mdi-bookmark-outline</v-icon>
            </v-btn>
          </div>
          <v-list-item-subtitle>
            {{e.data}}
          </v-list-item-subtitle>
          <v-list-item class="d-flex-column pa-0 mt-2">
            <div v-for="amico in e.numAmici" :key="amico">
              <v-icon icon>mdi-account-multiple</v-icon>
            </div>
          </v-list-item>
        </v-list-item-content>       
      </v-list-item>
    </v-card>
  </template>

  <script>
    import {followEvent} from '../api/events/followEvent';
    import {unfollowEvent} from '../api/events/unfollowEvent';
    import {isUserLogged} from '../api/checkUser';
    // import {authenticateUser} from '../api/authenticateUser';

    export default {
      name: 'CardEvent',
      props: ['info'],

      data() {
         return {
            e: this.info
         }
      },
      methods: {
        followBookmarkEvento() {
          if(!isUserLogged()) {
            this.$root.toast.show({message: "Please, authenticate yourself before moving on."})
            this.$router.push("/login");
            return
          }
          followEvent(this.e.id_evento)
          .then(() => {
            this.e.salvato = true
            // reload component
            this.$forceUpdate()
          })
          .catch(error => {
            console.log(error)
          })
        },
        unfollowBookmarkEvento() {
          if(!isUserLogged()) {
            this.$root.toast.show({message: "Please, authenticate yourself before moving on."})
            this.$router.push("/login");
            return
          }
          unfollowEvent(this.e.id_evento)
          .then(() => {
            this.e.salvato = false
            // reload component
            this.$forceUpdate()
          })
          .catch(error => {
            console.log(error)
          })
        },
        openGMaps() {
          window.open('https://www.google.com/maps/search/?api=1&query=' + this.e.luogo, '_blank')
        }
      },
    };
</script>