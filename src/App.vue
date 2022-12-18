<template>
  <div id="app">
    <v-main>
      <ToastAlert ref="toast"/>
      <router-view/>
    </v-main>
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
