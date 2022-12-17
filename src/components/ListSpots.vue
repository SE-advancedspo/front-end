<template>
    <div v-if="spots" class="mt-16 px-4">
        <v-container v-for="spot in spots" v-bind:key="spot._id" info.sync="spot">
            <CardSpot :info="spot"/>
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
    import CardSpot from './CardSpot.vue'
    import {getAllSpots} from '../api/spots/getAllSpots'

    export default {
        components: {
            CardSpot,
        },
        data() {
            return {
                spots: [],
            }
        },
        methods: {
            fetchSpots() {
                getAllSpots()
                .then(({data}) => {  // descrutoring data
                    // cronological order
                    // this.spots = data.reverse()
                    // popularity order
                    this.spots = data.sort((a, b) => {
                        return (b.num_like - a.num_like)
                    })
                })
                .catch(error => {
                    console.log(error)
                })
            },
        },
        mounted() {
            this.fetchSpots()
        },
    }
</script>