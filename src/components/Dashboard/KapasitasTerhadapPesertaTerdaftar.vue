<template>
  <highcharts :options="chartOptions" ref="barChart"></highcharts>
</template>

<script>
import Highcharts from "highcharts";
import axios from "axios";

export default {
  name: "KapasitasTerhadapPesertaTerdaftar",
  data() {
    return {
      chartOptions: {
        chart: {
          type: "bar",
        },
        title: {
          text: null,
        },
        xAxis: {
          categories: ['BPN 1', 'BPN 2', 'BPN 3', 'BPN 4'],
          title: {
              text: null
          },
          gridLineWidth: 1,
          lineWidth: 0
        },
        yAxis: {
          min: 0,
          title: {
              text: null,
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          },
          gridLineWidth: 0
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          backgroundColor:
              Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
          shadow: true
        },
        tooltip: {
          valueSuffix: ' millions'
        },
        plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              },
              groupPadding: 0.1
          }
        },
        credits: {
          enabled: false,
        },
        series: [{
            name: 'Kapasitas Terisi',
            data: [631, 727, 3714, 726]
        }, {
            name: 'Kapasitas Tersisa',
            data: [814, 841, 3714, 726]
        }],
      },
    };
  },
};
</script>
