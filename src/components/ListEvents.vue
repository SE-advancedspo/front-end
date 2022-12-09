<template>
    <div v-if="events" class="mt-16">
        <v-container v-for="event in events" v-bind:key="event.id">
            <CardEvento :info="event"/>
        </v-container>
    </div> 
</template>

<script>
    import CardEvento from './CardEvento.vue'

    export default {
        components: {
            CardEvento,
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
                    {id: this.count++, nome: 'Sangria Sociologia', data: 'Thursday 20:00, 22/12/2022', luogo: 'Via Roma 1', salvato: false, numAmici: 4},
                    {id: this.count++, nome: 'Aperipovo Sociologia', data: 'Thursday 21:00, 29/12/2022', luogo: 'Via Roma 12', salvato: true, numAmici: 3},
                ]
            },
        },

        mounted() {
            this.getEventsAux()
            console.log(this.events)
        },
    }
</script>