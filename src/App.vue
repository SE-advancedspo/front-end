<template>
  <v-app id="inspire">
    <NavBar/>
    <!-- <h1>{{msg}}</h1> -->
    <v-main class="grey lighten-3" v-if="users">
      <v-container v-for="user in users" v-bind:key="user.username">
        <CardEvento :user="user"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import CardEvento from './components/CardEvento.vue'
  import axios from 'axios'

  export default {
    components: {
      NavBar,
      CardEvento,
    },
    data() {
      return {
        users: null,
        loading: true,
      }
    },
    methods: {
      // async fetchData() {
      //   const response = await fetch('https://api.tn2night.it/api/v1/events')
      //   const data = await response.json()
      //   console.log(data)
      // },
      fetchUsers() {
        axios.get('http://localhost:8081/user').then(response => {
          console.log(response.data)
          this.users = response.data
        })
        .catch(error => {
          console.log(error)
        })
      },
    }, 
    mounted() {
      this.fetchUsers()
    },
  }
</script>
