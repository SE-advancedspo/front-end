<template>
    <div v-if="events" class="mt-16 px-4">
        <v-container v-for="event in events" v-bind:key="event.id" info.sync="event">
            <CardEvent :info="event"/>
        </v-container>
        <v-btn icon
            bottom
            right
            fixed
            x-large
            class="black"
            to="/createspot">
            <v-icon color="yellow">mdi-plus</v-icon>
        </v-btn>
    </div> 
</template>

<script>
    import CardEvent from './CardEvent.vue'
    import {getAllEvents} from '../api/events/getAllEvents'

    export default {
        components: {
            CardEvent,
        },

        data() {
            return {
                events: [],
            }
        },
        methods: {
            fetchEvents() {
                getAllEvents()
                .then(({data}) => {  // descrutoring data
                    this.events = data
                })
                .catch(error => {
                    console.log(error)
                })
            },
        },
        mounted() {
            this.fetchEvents()
        },
    }
</script>