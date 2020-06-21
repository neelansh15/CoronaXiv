<template>
    <div>
        <v-card>
            <v-card-title> {{ title }}</v-card-title>
            <v-card-subtitle> {{ author }} </v-card-subtitle>
            <v-card-text> {{ content }} </v-card-text>

            <v-card-actions>
                <v-btn :href="final_url" target="_blank" color="primary" class="mx-2 mb-4">Visit</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    props:{
        title: String,
        author: String,
        content: String,
        url: String
    },
    computed:{
        //Getting just one link from the links separated by a semicolon
        final_url(){
            var semicolonIndex = this.url.indexOf(";")
            return this.url.slice(0, semicolonIndex)
        }
    }
}
</script>

<style>

</style>