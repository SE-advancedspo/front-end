<template>
    <div v-if="spots" class="mt-16 px-4">
        <v-container v-for="spot in spotsHanded" :key="spot.id_spot" info.sync="spot">
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
    import { isUserLogged } from '@/api/checkUser'
    import {getAllSpots} from '../api/spots/getAllSpots'
    import {getAllLikedSpots} from '../api/spots/getAllLikedSpots'

    export default {
        components: {
            CardSpot,
        },
        data() {
            return {
                spots: [],
                likedSpots: [],
                spotsHanded: [],
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
                    this.spots = this.spots.map((spot) => {
                        spot.upVoted = false
                        return spot
                    })
                    if(isUserLogged()) {
                        this.getAllLikedSpots()
                    } else {
                        this.spotsHanded = this.spots
                    }
                })
                .catch(error => {
                    console.log(error)
                })
            },
            getAllLikedSpots() {
                getAllLikedSpots()
                .then(({data}) => {  // descrutoring data
                    this.likedSpots = data.map(({id_spot}) => id_spot)
                    this.spots = this.spots.map((spot) => {
                        if(this.likedSpots.includes(spot.id_spot)) {
                            spot.upVoted = true
                        }
                        return spot
                    })
                    this.spotsHanded = this.spots
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