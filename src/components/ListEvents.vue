<template>
    <div v-if="events" class="mt-16 px-4">
        <v-container v-for="event in eventsHanded" :key="event.id_evento" info.sync="event">
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
    import {getAllFollowedEvents} from '../api/events/getAllFollowedEvents'
    import {isUserLogged} from '../api/checkUser'

    export default {
        components: {
            CardEvent,
        },
        
        data() {
            return {
                username: localStorage.getItem('username'),
                events: [],
                followedEvents: [],
                eventsHanded: [],
            }
        },
        methods: {
            fetchEvents() {
                getAllEvents()
                .then(({data}) => {  // descrutoring data
                    this.events = data
                    this.events = this.events.map((event) => {
                        // create random number between 0 and 5
                        event.numAmici = Math.floor(Math.random() * 6)
                        event.salvato = false
                        return event
                    })
                    if(isUserLogged()) {
                        this.getAllFollowedEvents()
                    }
                    this.eventsHanded = this.events
                })
                .catch(error => {
                    console.log(error)
                })
            },
            getAllFollowedEvents() {
                getAllFollowedEvents(this.username)
                .then(({data}) => {  // descrutoring data
                    this.followedEvents = data.map(({id_evento}) => id_evento)
                    this.events = this.events.map((event) => {
                        if(this.followedEvents.includes(event.id_evento)) {
                            event.salvato = true
                        }
                        return event
                    })
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