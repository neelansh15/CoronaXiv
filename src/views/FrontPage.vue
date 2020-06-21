<template>
  <v-main>
      <v-container>
          <v-row>
            <v-col cols="6">
                <h1>Research Papers: </h1>
                <!-- {{ results }} -->
                <v-list v-for="result in results" :key="result._id">
                    <PaperCard :title="result._source.title" :content="result._source.excerpt" :author ="result._source.authors" />
                </v-list>
            </v-col>
            <v-col cols="6">
                <h1>2D Representation</h1>
                <Chart />
            </v-col>
          </v-row>
      </v-container>
  </v-main>
</template>

<script>
import PaperCard from '../components/PaperCard'
import Chart from './Chart'

export default {
    name: 'FrontPage',
    components:{
        PaperCard,
        Chart
    },
    props:{
        results: Array
    },
    data: () => ({
        // results: [
        //     {
        //         name : "Covid Paper",
        //         content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
        //         author: "Max Maxilian"
        //     },
        //     {
        //         name : "Covid Paper",
        //         content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
        //         author: "Max Maxilian"
        //     },
        //     {
        //         name : "Covid Paper",
        //         content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
        //         author: "Max Maxilian"
        //     },
        //     {
        //         name : "Covid Paper",
        //         content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
        //         author: "Max Maxilian"
        //     },
        //     {
        //         name : "Covid Paper",
        //         content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
        //         author: "Max Maxilian"
        //     },
        // ]
    }),
    mounted(){
        console.log("Front Page Mounted")
    }
}
</script>

<style>

</style>