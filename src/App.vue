<template>
  <div id="app">
    <v-content>
        <ToastAlert ref="toast"/>
      <router-view/>
    </v-content>
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
