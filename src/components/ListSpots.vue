<template>
    <div v-if="spots" class="mt-16">
        <v-container v-for="spot in spots" v-bind:key="spot.id" info.sync="spot">
            <CardSpot :info="spot"/>
        </v-container>
    </div> 
</template>

<script>
    import CardSpot from './CardSpot.vue'

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
                    {id: this.count++, testo: 'Do mollit non minim est Lorem sint do pariatur pariatur enim. Nulla ex minim enim eu incididunt. Commodo cupidatat voluptate est qui et magna aute eiusmod.', autore:'vincenzo.netti@studenti.unint.it', lang:'IT'},
                    {id: this.count++, testo: 'Nulla ex minim enim eu incididunt. Commodo cupidatat voluptate est qui et magna aute eiusmod. Ullamco officia sint exercitation occaecat ad magna nisi velit do consectetur esse adipisicing magna amet voluptate. Eiusmod dolor irure labore commodo magna.', autore:'vincenzo.netti@studenti.unint.it', lang:'EN'},
                    {id: this.count++, testo: 'Nulla ex minim enim eu incididunt. Commodo cupidatat voluptate est qui et magna aute eiusmod. Do mollit non minim est Lorem sint do pariatur pariatur enim.', autore:'vincenzo.netti@studenti.unint.it', lang:'EN'},
                ]
            },
        },

        mounted() {
            this.getSpotsAux()
        },
    }
</script>