<template>
  <v-app id="inspire">
    <NavBar/>
    <v-main class="grey lighten-3">
      <ListEvents/>
    </v-main>
  </v-app>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import ListEvents from './components/ListEvents.vue'
  //import axios from 'axios'

  export default {
    components: {
      NavBar,
      ListEvents,
    },
    data() {
      return {
      }
    },
    methods: {
      // fetchUsers() {
      //   axios.get('http://localhost:8081/user').then(response => {
      //     console.log(response.data)
      //     this.users = response.data
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })
      // },
    }, 
    mounted() {
    },
  }
</script>
