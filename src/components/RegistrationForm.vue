<template>
    <div class="mt-16">
        <v-container class="d-flex justify-center align-center text-center">
                <v-list-item>
                    <v-list-item-content
                        class="d-flex flex-column justify-center align-center"
                        >
                        <p class="mb-4 text-h5 font-weight-medium">
                            Register
                        </p>
                        <v-btn @click="unimplemented()"
                        class="my-8">
                            <v-icon icon>mdi-upload</v-icon>
                            Upload Image
                        </v-btn>
                        <v-text-field
                            label="Username *"
                            hide-details="auto"
                            v-model="username"
                            placeholder="TN2night"
                            class="mb-6"
                            style="width: 50%"
                            ></v-text-field>
                        <v-text-field
                            label="Contatto *"
                            hide-details="auto"
                            v-model="contatto"
                            class="mb-6"
                            style="width: 50%"
                            ></v-text-field>
                        <v-text-field
                            label="Email *"
                            hide-details="auto"
                            v-model="email"
                            placeholder="TN2@night.com"
                            class="mb-6"
                            style="width: 50%"
                            ></v-text-field>
                        <v-text-field
                            label="Password *"
                            hide-details="auto"
                            v-model="password"
                            placeholder="P@ssword0"
                            class="mb-6"
                            style="width: 50%"
                            ></v-text-field>
                        <v-text-field
                            label="Password Confirmation *"
                            hide-details="auto"
                            v-model="password_confirmation"
                            placeholder="P@ssword0"
                            class="mb-6"
                            style="width: 50%"
                            ></v-text-field>
                        <v-text-field
                            label="Biografia"
                            hide-details="auto"
                            v-model="bio"
                            class="mb-6"
                            style="width: 50%"
                            ></v-text-field>
                        <v-text-field
                            label="Facoltà"
                            hide-details="auto"
                            v-model="facolta"
                            class="mb-6"
                            style="width: 50%"
                            ></v-text-field>
                        <v-text-field
                            label="Anno Accademico"
                            hide-details="auto"
                            v-model="anno_acc"
                            class="mb-6"
                            style="width: 50%"
                            ></v-text-field>
                        <v-text-field
                            label="Regione"
                            hide-details="auto"
                            v-model="regione"
                            class="mb-6"
                            style="width: 50%"
                            ></v-text-field>
                        <v-text-field
                            label="Descrizione Fisica"
                            hide-details="auto"
                            v-model="desc"
                            class="mb-16"
                            style="width: 50%"
                            ></v-text-field>
                        </v-list-item-content>       
                        <div class="d-flex justify-center"
                            style="position: fixed; bottom: 2.5%; width: 100%;"
                        >
                            <v-btn 
                                class="black yellow--text ma-4 font-weight-bold"
                                elevation="5"
                                style="font-size: 1rem"
                                rounded
                                @click="registerUser()">
                                Register
                            </v-btn>
                        </div>
                </v-list-item>
            </v-container>
            <div>
        </div> 
    </div>
</template>

<script>

    import {registerNewUser} from '../api/registration/registration'

    export default {
        data() {
            return {
                username: '',
                contatto: '',
                email: '',
                password: '',
                password_confirmation: '',
                facolta: '',
                bio: '',
                anno_acc: '',
                regione: '',
                desc: '',
                foto: '',
            }
        },
        methods: {
            unimplemented() {
                this.$root.toast.show({message: "Unfortunately, this feature hasn't been implemented yet!"})
            },
            registerUser() {
                if(this.username == '' || this.email == '' || this.password == '' || this.password_confirmation == '' || this.contatto == '') {
                    this.$root.toast.show({message: "Please fill in all required fields"})
                    return
                }
                if(this.password != this.password_confirmation) {
                    this.$root.toast.show({message: "Passwords do not match"})
                    return
                }
                const newUser = {
                    username: this.username,
                    email: this.email,
                    contatto: this.contatto,
                    foto: this.foto,
                    password: this.password,
                    bio: this.bio,
                    facolta: this.facolta,
                    anno_acc: this.anno_acc,
                    regione: this.regione,
                    desc: this.desc,
                }
                registerNewUser(newUser)
                .then(() => {
                    this.$root.toast.show({message: "Registration successful! Now, please, login."})
                    this.$router.push({name: 'login'})
                })
                .catch((err) => {
                    console.log(err)
                    this.$root.toast.show({message: "An error occurred while registering. Please try again later."})
                })
            }

        },
    }
</script>