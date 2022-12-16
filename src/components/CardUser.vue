<template>
    <v-card
      class="mx-auto rounded-xl pa-4"
      min-width="300"
      max-width="350"
      outlined
      elevation="1"
    >
      <v-container class="d-flex justify-center">
        <div
          class="d-flex flex-row justify-space-between align-center"
          style="width: 100%;"
        >
          <v-btn icon color="grey">
              <v-icon size="50px">mdi-account-circle</v-icon>
            </v-btn>
            <p class="text-h6 mb-0 ml-n10">
              {{s.username}}
            </p>
            <v-btn v-if="s.friend" icon x-large @click="removeBookmarkFriend()">
              <v-icon icon color="green">mdi-bookmark</v-icon>
            </v-btn>
            <v-btn v-else icon x-large @click="addBookmarkFriend()">
              <v-icon icon color="red">mdi-bookmark</v-icon>
            </v-btn>
          </div>       
      </v-container>
    </v-card>
  </template>

  <script>
    import {addFriend} from '../api/user/addFriend'
    import {removeFriend} from '../api/user/removeFriend'

    export default {
      name: 'CardUser',
      props: ['info'],
      data() {
          return {
              s: this.info,
          }
      },
      methods: {
          addBookmarkFriend() {
            addFriend(this.s.username)
            .then(res => {
              console.log(res)
            })
            .catch(error => {
              console.log(error)
            })
          },
          removeBookmarkFriend() {
            removeFriend(this.s.username)
            .then(res => {
              console.log(res)
            })
            .catch(error => {
              console.log(error)
            })
          },
      }
    };
</script>