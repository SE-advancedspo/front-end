<template>
  <v-snackbar
    v-model="showSnackbar"
    :timeout="timeout"
    :color="this.color"
    class="d-flex justify-space-between align-center black--text"
    style="z-index: 9999; margin-top: 75px;"
    elevation="24"
    rounded="pill"
    absolute
    top
    centered
    >
    <v-icon left>mdi-alert-outline</v-icon>
      {{ message }}
    </v-snackbar>
</template>
  
<script>
  export default {
    name: "ToastAlert",
    data() {
      return{
        showSnackbar: false,
        message: '',
        color: 'error',
        timeout: 3000
      }
    },
    methods:{
      show(data) {
        this.message = data.message || 'missing "message".'
        this.color = data.color || 'error'
        this.showSnackbar = true
      }
    }
  };
</script>
  