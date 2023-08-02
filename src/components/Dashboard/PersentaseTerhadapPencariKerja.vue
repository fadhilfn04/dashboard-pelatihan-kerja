<template>
  <highcharts :options="chartOptions" ref="pieChart"></highcharts>
</template>

<script>
import axios from "axios";
import Highcharts from "highcharts";

export default {
  name: "PersentaseTerhadapPencariKerja",
  data() {
    return {
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: '',
          align: 'left'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
              valueSuffix: '%'
          }
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
        },
        series: [{
          name: 'Persentase',
          colorByPoint: true,
          data: [{
              name: 'LPK 1',
              color: "#FFA800",
              y: 50.00,
          },  {
              name: 'LPK 2',
              color: "#8A50FC",
              y: 50.00
          },  {
              name: 'LPK 3',
              color: "#F65464",
              y: 50.00
          },  {
              name: 'LPK 4',
              color: "#1BC5BC",
              y: 50.00
          }]
        }]
      },
    };
  },
};
</script>
