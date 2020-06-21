<template>
  <v-main>
      <v-container>
          <h1>Research Papers: </h1>
          <v-list v-for="result in results" :key="result.name">
              <Paper :name="result.name" :content="result.content" :author ="result.author" />
          </v-list>
      </v-container>
  </v-main>
</template>

<script>
import Paper from '../components/Paper'

export default {
    name: 'FrontPage',
    components:{
        Paper
    },
    data: () => ({
        results: [
            {
                name : "Covid Paper",
                content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
                author: "Max Maxilian"
            },
            {
                name : "Covid Paper",
                content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
                author: "Max Maxilian"
            },
            {
                name : "Covid Paper",
                content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
                author: "Max Maxilian"
            }
        ]
    })
}
</script>

<style>

</style>