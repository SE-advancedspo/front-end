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
                count: 0,
                spots: [],
            }
        },

        methods: {
            getSpotsAux() {
                this.spots = [
                    {id: this.count++, testo: 'Do mollit non minim est Lorem sint do pariatur pariatur enim. Nulla ex minim enim eu incididunt. Commodo cupidatat voluptate est qui et magna aute eiusmod.', autore:'vincenzo.netti@studenti.unint.it', upVoted: false},
                    {id: this.count++, testo: 'Nulla ex minim enim eu incididunt. Commodo cupidatat voluptate est qui et magna aute eiusmod. Ullamco officia sint exercitation occaecat ad magna nisi velit do consectetur esse adipisicing magna amet voluptate. Eiusmod dolor irure labore commodo magna.', autore:'vincenzo.netti@studenti.unint.it', upVoted: true},
                    {id: this.count++, testo: 'Nulla ex minim enim eu incididunt. Commodo cupidatat voluptate est qui et magna aute eiusmod. Do mollit non minim est Lorem sint do pariatur pariatur enim.', autore:'vincenzo.netti@studenti.unint.it', upVoted: true},
                    {id: this.count++, testo: 'Do mollit non minim est Lorem sint do pariatur pariatur enim. Nulla ex minim enim eu incididunt. Commodo cupidatat voluptate est qui et magna aute eiusmod.', autore:'vincenzo.netti@studenti.unint.it', upVoted: false},
                    {id: this.count++, testo: 'Nulla ex minim enim eu incididunt. Commodo cupidatat voluptate est qui et magna aute eiusmod. Ullamco officia sint exercitation occaecat ad magna nisi velit do consectetur esse adipisicing magna amet voluptate. Eiusmod dolor irure labore commodo magna.', autore:'vincenzo.netti@studenti.unint.it', upVoted: true},
                    {id: this.count++, testo: 'Nulla ex minim enim eu incididunt. Commodo cupidatat voluptate est qui et magna aute eiusmod. Do mollit non minim est Lorem sint do pariatur pariatur enim.', autore:'vincenzo.netti@studenti.unint.it', upVoted: true},
                ]
            },
            fetchSpots() {
                getAllSpots()
                .then(({data}) => {  // descrutoring data
                    this.spots = data.reverse()
                })
                .catch(error => {
                    console.log(error)
                })
            },
        },

        mounted() {
            //this.getSpotsAux()
            this.fetchSpots()
        },
    }
</script>