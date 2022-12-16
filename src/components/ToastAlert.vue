<template>
    <v-snackbar
    v-model="showSnackbar"
    elevation="25"
    top
    style="z-index: 9999; margin-top: 60px;"
    :color="color"
    :timeout="timer"
    class="d-flex justify-align-center"
    max-width="200"
    >
      <v-icon left>{{icon}}</v-icon>{{message}}
    </v-snackbar>
</template>
  
<script>
  export default {
    name: "ToastAlert",
    data() {
      return{
        showSnackbar: false,
        message: '',
        color: 'red',
        icon: 'mdi-check',
        timer: 3000
      }
    },
    methods:{
      show(data) {
        this.message = data.message || 'missing "message".'
        this.color = data.color || 'error'
        this.icon = data.icon || 'mdi-check'
        this.showSnackbar = true
      }
    }
  };
</script>
  