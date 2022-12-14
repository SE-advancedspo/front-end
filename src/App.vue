<template>
  <div id="app">
    <v-content>
      <router-view/>
    </v-content>
    <ToastAlert ref="toast"/>
  </div>
</template>

<script>
  import ToastAlert from './components/ToastAlert.vue'
  export default{
      name: 'App',
      components:{
          ToastAlert,
      },
      mounted() {
        this.$root.toast = this.$refs.toast
      },
  }
</script>
