<template>
    <div class="mt-16 py-16 px-4">
        <v-container class="d-flex flex-column justify-center align-center text-center">
            <v-img src="../assets/logo.png" alt="logo tn2night" style="z-index:900; border-radius: 50%;" max-width="175" max-height="175"></v-img>
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
                        @click="unimplemented()"
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
                        @click="$router.go(-1)"
                        >
                        Go Back
                    </v-btn>
                </div>  
            </v-container>
        </div> 
</template>

<script>
    import {getUserInfo} from '../api/user/getUserInfo'
    
    export default {
        data() {
            return {
                username: localStorage.getItem('username'),
                user: null,
            }
        },        
        methods: {
            fetchUser() {
                getUserInfo(this.username)
                .then(({data}) => {  // descrutoring data
                    let unwrap = ({email, contatto, bio, facolta, anno_acc, regione, desc}) => ({email, contatto, bio, facolta, anno_acc, regione, desc});
                    this.user = unwrap(data)
                    this.$forceUpdate
                })
                .catch(error => {
                    console.log(error)
                })
            },
            unimplemented() {
                this.$root.toast.show({message: "Unfortunately, this feature hasn't been implemented yet!"})
            },
        },
        mounted() {
            this.fetchUser()
        },
    }
</script>