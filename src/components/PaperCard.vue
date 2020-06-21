<template>
    <div>
        <v-card>
            <v-card-title> {{ title }}</v-card-title>
            <v-card-subtitle> {{ author }} </v-card-subtitle>
            <v-card-text> {{ content }} </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    props:{
        title: String,
        author: String,
        content: String
    }
}
</script>

<style>

</style>