<template>
    <div class="d-flex justify-center align-center px-16">
        <v-container class="mt-16" style="max-width: 500px">
            <p class="text-h6 mb-4">Type</p>
            <v-menu>
                <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-bind="attrs"
                    v-on="on"
                    class="mb-8"
                    >
                    General <v-icon icon>mdi-triangle-small-down</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <p class="text-h6">Description</p>
            <v-textarea
                v-model="testo"
                label="Enter your text here"
                counter
                maxlength="120"
                full-width
                single-line
                ></v-textarea>
            <v-container fluid class="d-flex flex-column"
                style="width: 25%">
                <v-btn class="black yellow--text my-4" @click="sendSpot()" rounded>
                    Send
                </v-btn>
                <v-btn to="/spots" class="black yellow--text my-4" rounded>
                    Cancel
                </v-btn>
            </v-container>
        </v-container> 
    </div>
</template>

<script>
    import router from '@/router';
import {createSpot} from '../api/spots/createSpot'

    export default {
        data: () => ({
            username: localStorage.getItem('username'),
            testo: '',
            items: [
                { title: 'General'  },
                { title: 'Specific'},
            ],
        }),
        methods: {
            sendSpot() {
                const spot = {
                    testo: this.testo,
                    autore: this.username,
                    num_like: 0,
                }
                createSpot(spot)
                .then(() => {
                    this.testo = ''
                    router.push('/spots')
                })
                .catch((error) => {
                    console.log(error)
                })
            },
        },
        mounted() {
            console.log(this.username)
        },
    };
</script>