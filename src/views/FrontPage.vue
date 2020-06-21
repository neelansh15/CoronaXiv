<template>
  <v-main>
      <v-container>
          <v-row>
            <v-col cols="6">
                <h1>
                    Research Papers:
                    <v-chip
                        color="primary"
                    >
                        {{ count }}
                    </v-chip>
                </h1>
                <!-- {{ results }} -->
                <v-list v-for="result in results" :key="result._id">
                    <PaperCard v-if="result._source.is_covid" :title="result._source.title" :content="result._source.excerpt" :author ="result._source.authors" :url="result._source.url" />
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
        // count: 0
    }),
    computed:{
        count(){
            return this.results.length
        }
    },
    mounted(){
        console.log("Front Page Mounted")
    }
}
</script>

<style>

</style>