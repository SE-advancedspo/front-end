<template>
    <div class="mt-16 py-16 px-4">
        <v-container class="d-flex flex-column justify-center align-center text-center">
            <v-img src="../assets/logo.png" alt="logo tn2night" style="z-index:999; border-radius: 50%;" max-width="175" max-height="175"></v-img>
            <p class="text-h2 mt-4 mb-n4">{{this.username}}</p>
            <v-list-item class="d-flex justify-center align-center mt-16">
                    <div class="grey lighten-3">
                        <v-row
                            no-gutters>
                        <v-col
                            v-for="(value, propretyName) in user"
                            :key="propretyName"
                            cols="12"
                            sm="6"
                        >
                            <v-card
                            class="pa-2 mt-4 grey lighten-3"
                            outlined
                            >
                            <p class="text-h6">{{propretyName}}</p>
                            {{value}}
                            </v-card>
                        </v-col>
                        </v-row>
                    </div>
                </v-list-item>
                <div class="d-flex justify-center"
                    style="position: fixed; bottom: 2.5%; width: 100%;"
                    >
                    <v-btn
                        class="black yellow--text ma-4 font-weight-bold"
                        style="font-size: 1rem"
                        elevation="5"
                        rounded
                        >
                        Edit
                    </v-btn>
                    <v-btn
                        class="black yellow--text ma-4 font-weight-bold"
                        style="font-size: 1rem"
                        elevation="5"
                        rounded
                        to="/"
                        >
                        Go Back
                    </v-btn>
                </div>  
            </v-container>
        </div> 
</template>

<script>
    import axios from 'axios'
    
    export default {
        data() {
            return {
                username: localStorage.getItem('username'),
                user: null,
            }
        },        
        methods: {
        fetchUser() {
            axios.get('http://localhost:3000/user/'+localStorage.getItem('username'))
            .then(({data}) => {  // descrutoring data
                console.log(data)
                let unwrap = ({email, contatto, bio, facolta, anno_acc, regione, desc}) => ({email, contatto, bio, facolta, anno_acc, regione, desc});
                this.user = unwrap(data)
            console.log(this.user)
            })
            .catch(error => {
            console.log(error)
            })
        },
        },
        mounted() {
            this.fetchUser()
        },
    }
</script>