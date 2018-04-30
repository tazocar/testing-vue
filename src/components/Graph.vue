<template>
  <div class="mainContainer">
    <canvas :id="elementId"></canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js'
  export default {
    name: 'chart',
    props: ['data', 'chartName', 'labels', 'elementId'],
    data () {
      return {
      }
    },
    methods: {
      createChart: function(chartId, chartData, chartLabels){
        var ctx = document.getElementById(chartId).getContext('2d');
        var chart = new Chart(ctx, {
            responsive: true,
            maintainAspectRatio: false,
            type: 'horizontalBar',
            // The data for our dataset
            data: {
              labels: chartLabels,
              datasets: [{
                  label: this.chartName,
                  backgroundColor: ['rgba(187, 255, 0, 0.5)', 'rgba(4, 219, 226, 0.5)'],
                  borderColor: 'rgb(255, 99, 132)',
                  data: chartData,
              }]
            },
            options: {
              responsive:true,
              maintainAspectRatio: false,
              scales: {
                yAxes: [{
                  barPercentage: 0.4
                }],
                xAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
        });
      }
    },
    mounted() {
      this.createChart(this.elementId, this.data, this.labels)
    },
    watch: {
      // cuando cambie la data en el prop, se va a re ejecutar la función
      'data': function () {
        this.createChart(this.elementId, this.data, this.labels)
      }
    }
  }
</script>