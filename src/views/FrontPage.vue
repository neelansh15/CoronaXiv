<template>
  <v-main>
      <v-container>
          <v-row>
            <!-- <v-col cols="12" md="6">
                <h1>2D Representation</h1>
                <Chart v-if="chartLoaded" :chartData = "chartData" :options = "options" />
            </v-col> -->

            <v-col cols="12" md="6">
                <h1>
                    Research Papers:
                    <v-chip
                        :color="(onlyPeer) ? 'primary lighten-1' : 'primary'"
                    >
                        Total: {{ count }}
                    </v-chip>
                </h1>
                
                <v-switch
                    label="Only Peer Reviewed"
                    v-model="onlyPeer"
                ></v-switch>

                {{ !results.length ? "No results" : "" }}
                
                <div v-if="loading">
                    <v-row v-for="n in 3" :key="n" class="mb-4">
                        <v-col
                            cols="12" md="10"
                        >
                            <v-skeleton-loader
                                type="card"
                            ></v-skeleton-loader>
                        </v-col>
                    </v-row>
                </div>


                <v-list v-else v-for="result in results" :key="result._id">
                    <PaperCard 
                        v-if="checkPeer(result._source.peer_reviewed)" 
                        :title="result._source.title" 
                        :content="result._source.excerpt" 
                        :author ="result._source.authors" 
                        :url="result._source.url"
                        :score="result._source.score"
                    />
                </v-list>
            </v-col>
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
        onlyPeer: false,
        chartLoaded: true
    }),
    computed:{
        count(){
            if(!this.onlyPeer) return this.results.length
            else return this.peerReviewedPaperCount
        },
        loading(){
            return this.$store.state.loading
        },
        peerReviewedPaperCount(){
            let num = 0
            this.results.forEach((result) => {
                if(result._source.peer_reviewed == 'True') num++
            })
            return num
        },
        chartData(){
            return {
                datasets:[{
                    label: 'Covid19 Research Papers Scatter Dataset',
                    data: [
                        {
                            x: -10,
                            y: 0
                        }, 
                        {
                            x: 0,
                            y: 10
                        }, 
                        {
                            x: 10,
                            y: 5
                        }
                    ]
                }]
            }
        },
        options(){
            return {
                scales: {
                    xAxes: [{
                        type: 'linear',
                        position: 'bottom'
                    }]
                }
            }
        }
    },
    methods:{
        checkPeer(status){
            if(this.onlyPeer == false) return true
            else if(this.onlyPeer == true && status == 'True') return true
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