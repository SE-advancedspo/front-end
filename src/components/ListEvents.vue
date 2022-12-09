<template>
    <div v-if="events" class="mt-16">
        <v-container v-for="event in events" v-bind:key="event.id" info.sync="event">
            <CardEvent :info="event"/>
        </v-container>
    </div> 
</template>

<script>
    import CardEvent from './CardEvent.vue'
    import axios from 'axios'

    export default {
        components: {
            CardEvent,
        },

        data() {
            return {
                count: 0,
                events: [],
            }
        },

        methods: {
            getEventsAux() {
                this.events = [
                    {id: this.count++, nome: 'Sangria Sociologia', data: 'Thursday 20:00, 22/12/2022', luogo: 'Via Rosmini, Trento', salvato: false, numAmici: 4},
                    {id: this.count++, nome: 'Aperipovo Sociologia', data: 'Thursday 21:00, 29/12/2022', luogo: 'Via Roma 12, Putignano', salvato: true, numAmici: 3},
                    {id: this.count++, nome: 'Sangria Giurisprudenza', data: 'Thursday 20:00, 22/12/2022', luogo: 'Via Paolo X, Cagliari', salvato: true, numAmici: 2},
                ]
            },
            fetchEvents() {
                axios.get('http://localhost:3000/evento').then(response => {
                    console.log(response.data)
                    this.events = response.data
                })
                .catch(error => {
                    console.log(error)
                })
            },
        },

        mounted() {
            //this.fetchEvents()
            this.getEventsAux()
        },
    }
</script>