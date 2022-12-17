<template>
    <v-container class="d-flex flex-column justify-center align-center mt-16 px-4">
        <div class="d-flex flex-row justify-center align-center mb-6">
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search a username"
                single-line
                hide-details
                background-color="rgba(0, 0, 0, 0.15)"
                color="white"
                placeholder="Look for a username"
                filled
                rounded
                @input="searchUser()"
                ></v-text-field>
                <v-btn icon x-large outlined color="black" class="align-self-center ml-4" @click="toggleFriends()">
                    <v-icon v-if="displayFriends" icon color="green">mdi-bookmark</v-icon>
                    <v-icon v-else icon color="red">mdi-bookmark</v-icon>
                </v-btn>
        </div>
    <div v-if="users">
        <v-container v-for="user in usersDisplayed" :key="user.username" info.sync="user">
            <CardUser :info="user"/>
        </v-container>
    </div> 
    </v-container>
</template>

<script>
    import CardUser from './CardUser.vue'
    import {getAllUsers} from '../api/user/getAllUsers'
    import {getAllFriends} from '../api/user/getAllFriends'

    export default {
        components: {
            CardUser,
        },

        data() {
            return {
                search: '',
                displayFriends: false,
                users: [],
                friends: [],
                usersDisplayed: [],
                username: localStorage.getItem('username'),
            }
        },

        methods: {
            fetchUsers() {
                getAllUsers()
                .then(({data}) => {  // descrutoring data
                    this.users = data
                    this.users = this.users.filter((user) => {
                        return (user.username !== this.username)
                    })
                })
                .catch(error => {
                    console.log(error)
                })
            },
            searchUser() {
                this.usersDisplayed = this.users.filter((user) => {
                    let regex = new RegExp('^'+this.search+'', 'gi')
                    return (regex.test(user.username))
                })
            },
            fetchFriends() {
                getAllFriends()
                .then(({data}) => {  // descrutoring data
                    this.friends = data.map(({friend_username}) => friend_username)
                    this.users = this.users.map((user) => {
                        if(this.friends.includes(user.username)) {
                            user.friend = true
                        } else {
                            user.friend = false
                        }
                        return user
                    })
                    this.usersDisplayed = this.users
                })
                .catch(error => {
                    console.log(error)
                })
            },
            toggleFriends() {
                // this.$forceUpdate()
                if(!this.displayFriends) {
                    this.usersDisplayed = this.users.filter((user) => {
                        return (this.friends.includes(user.username))
                    })
                } else {
                    this.usersDisplayed = this.users
                }
                this.displayFriends = !this.displayFriends
            },
        },

        mounted() {
            this.fetchUsers()
            this.fetchFriends()
        },
    }
</script>