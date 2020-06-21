<template>
  <v-main>
      <v-container>
          <v-row>
            <v-col cols="6">
                <h1>Research Papers: </h1>
                <!-- <v-list v-for="result in results" :key="result.name">
                    <PaperCard :name="result.name" :content="result.content" :author ="result.author" />
                </v-list> -->
            </v-col>
            <v-col cols="6">
                <h1>2D Representation</h1>
                {{ results }}

                <Chart />
            </v-col>
          </v-row>
      </v-container>
  </v-main>
</template>

<script>
// import PaperCard from '../components/PaperCard'
import Chart from './Chart'

export default {
    name: 'FrontPage',
    components:{
        // PaperCard
        Chart
    },
    props:{
        results: Object
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