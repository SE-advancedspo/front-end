<template>
    <div class="mt-16 py-16 px-4">
        <v-container class="d-flex flex-column justify-center align-center text-center">
            <v-img src="../assets/logo.png" alt="logo tn2night" class="mb-n16" style="z-index:900" max-width="175" max-height="175"></v-img>
            <v-card
                class="mx-auto rounded-xl pa-4"
                min-width="350"
                max-width="450"
                max-height="335"
                outlined
                elevation="1"
                >
                <v-list-item class="d-flex justify-space-between mt-16">
                    <v-list-item-content class="d-flex justify-center align-center">
                        <p class="mb-4 text-h5 font-weight-medium">
                            Login or Register
                        </p>
                        <v-text-field
                            label="Username"
                            hide-details="auto"
                            v-model="username"
                            ></v-text-field>
                        <v-text-field
                            label="Password"
                            hide-details="auto"
                            type="password"
                            v-model="password"
                            ></v-text-field>
                        <a @click="alert=true" class="text-decoration-underline black--text my-4 text-left" style="font-size: 0.8rem">
                            Forgot Password?
                        </a>
                        <v-container fluid class="d-flex justify-center" style="width:50%;">
                            <v-btn
                                @click="getUsername()"
                                class="black yellow--text ma-4 font-weight-bold"
                                style="font-size: 1rem"
                                elevation="5"
                                rounded>
                                Login
                            </v-btn>
                            <v-btn class="black yellow--text ma-4 font-weight-bold" elevation="5" style="font-size: 1rem" rounded to="/registration">
                                Register
                            </v-btn>
                        </v-container>
                    </v-list-item-content>       
                </v-list-item>
                </v-card>
                <div class="my-14" style="font-size:1.1rem">
                    <p style="font-size:0.8rem" class="text--secondary">OR</p>
                    <v-btn icon @click="unimplemented()">
                        <span class="text-decoration-underline black--text">Use Google</span> 
                        <v-icon class="mx-2">mdi-google-plus</v-icon>
                    </v-btn>
                </div>
            </v-container>
            <div>
        </div> 
    </div>
</template>

<script>
    import {login} from '../api/login/login'
    export default {
        data() {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            login() {
                if (this.username == '') {
                    this.$root.toast.show({message: "Please enter a username"})
                } else if (this.password == '') {
                    this.$root.toast.show({message: "Please enter a password"})
                } else {
                    const user = {
                        username: this.username,
                        password: this.password,
                    }
                    login(user)
                    .then(response => {
                        console.log(response)
                        // need to save the token in local storage
                        if (response.status == 200) {
                            this.$root.toast.show({message: "Successfully logged in as " + this.username})
                            this.$router.push('/')
                        } else {
                            this.$root.toast.show({message: "Incorrect username or password"})
                        }
                    })
                    .catch(error => {
                        console.log(error)
                        this.$root.toast.show({message: "Incorrect username or password"})
                    })
                }
            },
            getUsername() {
                localStorage.setItem('username', this.username)
                this.$root.toast.show({message: "Successfully logged in as " + this.username})
                this.$router.push('/')
            },
            unimplemented() {
                this.$root.toast.show({message: "Unfortunately, this feature hasn't been implemented yet!"})
            }
        },
    }
</script>