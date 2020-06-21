<template>
    <div>
        <v-card>
            <v-card-title> {{ name }}</v-card-title>
            <v-card-subtitle> {{ author }} </v-card-subtitle>
            <v-card-text> {{ content }} </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    props:{
        name: String,
        author: String,
        content: String
    }
}
</script>

<style>

</style>