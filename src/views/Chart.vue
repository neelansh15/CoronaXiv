<template>
  <div>
    <Plotly :data="data" :layout="layout" :display-mode-bar="true"></Plotly>
  </div>
</template>

<script>
import { Plotly } from 'vue-plotly'

export default {
  components: {
    Plotly
  },
  data: () => ({
    data:[{
      x: [1,2,3,4, 8],
      y: [10,15,13,17, 19],
      type:"scatter",
      mode: "lines+markers"
    }],
    layout:{
      title: "Covid19 Research Papers Scatter Plot"
    }
  })
}
</script>

<style>

</style>