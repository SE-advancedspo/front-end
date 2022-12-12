<template>
    <div class="mt-16 py-16 px-4">
        <v-container class="d-flex flex-column justify-center align-center text-center">
            <v-img src="../assets/logo.png" alt="logo tn2night" class="mb-n16" style="z-index:999" max-width="175" max-height="175"></v-img>
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
                            ></v-text-field>
                        <v-text-field
                            label="Password"
                            hide-details="auto"
                            ></v-text-field>
                        <a class="text-decoration-underline black--text my-4 text-left" style="font-size: 0.8rem">
                            Forgot Password?
                        </a>
                        <v-container fluid class="d-flex justify-center" style="width:50%;">
                            <v-btn to="/" class="black yellow--text ma-4 font-weight-bold" elevation="5" style="font-size: 1rem" rounded>
                                Login
                            </v-btn>
                            <v-btn class="black yellow--text ma-4 font-weight-bold" elevation="5" style="font-size: 1rem" rounded>
                                Register
                            </v-btn>
                        </v-container>
                    </v-list-item-content>       
                </v-list-item>
                </v-card>
                <div class="my-14" style="font-size:1.1rem">
                    <p style="font-size:0.8rem" class="text--secondary">OR</p>
                    <v-btn icon @click="alert = true">
                        <span class="text-decoration-underline black--text">Use Google</span> 
                        <v-icon class="mx-2">mdi-google-plus</v-icon>
                    </v-btn>
                </div>
            </v-container>
            <div>
                <v-alert
                    dense
                    outlined
                    type="error"
                    v-model="alert"
                    dismissible
                    border="left"
                    >
                   Unfortunately, this feature hasn't been implemented yet. Please try later.
                </v-alert>
            </div>
        </div> 
</template>

<script>
    export default {
        data() {
            return {
                alert: false,
            }
        },
    }
</script>