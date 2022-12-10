<template>
    <v-div class="d-flex justify-center align-center px-16">
        <v-container class="mt-16">
            <p class="text-h6 mb-4">Type</p>
            <v-menu>
                <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-bind="attrs"
                    v-on="on"
                    class="mb-8"
                    >
                    Choose Spot Type <v-icon icon>mdi-triangle-small-down</v-icon>
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
                v-model="title"
                label="Enter your text here"
                counter
                maxlength="120"
                full-width
                single-line
                ></v-textarea>
            <v-container class="d-flex flex-column">
                <v-btn class="black yellow--text my-8 mx-16" rounded>
                    Send
                </v-btn>
                <v-btn class="black yellow--text mx-16" rounded>
                    Cancel
                </v-btn>
            </v-container>
        </v-container> 
    </v-div>
</template>

<script>
    export default {
        data: () => ({
            items: [
                { title: 'General' },
                { title: 'Specific' },
            ],
        })
    };
</script>