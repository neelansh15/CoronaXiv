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
                        Total: {{ count }}
                    </v-chip>
                </h1>
                
                <v-switch
                    label="Only Covid Results"
                    v-model="onlyCovid"
                ></v-switch>

                <v-list v-for="result in results" :key="result._id">
                    <PaperCard v-if="checkCovid(result._source.is_covid)" :title="result._source.title" :content="result._source.excerpt" :author ="result._source.authors" :url="result._source.url" />
                </v-list>
            </v-col>
            <!-- <v-col cols="6">
                <h1>2D Representation</h1>
                <Chart />
            </v-col> -->
          </v-row>
      </v-container>
  </v-main>
</template>

<script>
import PaperCard from '../components/PaperCard'
// import Chart from './Chart'

export default {
    name: 'FrontPage',
    components:{
        PaperCard
        // Chart
    },
    props:{
        results: Array
    },
    data: () => ({
        onlyCovid: false
    }),
    computed:{
        count(){
            return this.results.length
        }
    },
    methods:{
        checkCovid(status){
            if(this.onlyCovid == false) return true
            else if(this.onlyCovid == true && status == 'True') return true
            else return false
        }
    },
    mounted(){
        console.log("Front Page Mounted")
    }
}
</script>

<style>

</style>