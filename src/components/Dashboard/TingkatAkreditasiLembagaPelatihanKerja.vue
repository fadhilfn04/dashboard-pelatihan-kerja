<template>
  <highcharts :options="chartOptions" ref="pieChart"></highcharts>
</template>

<script>
import axios from "axios";
import Highcharts from "highcharts";

export default {
  name: "TingkatAkreditasiLembagaPelatihanKerja",
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
          name: 'Tingkat Akreditasi',
          colorByPoint: true,
          data: [{
              name: 'Terakreditasi',
              color: "#4EE1AC",
              y: [],
          },  {
              name: 'Tidak Terakreditasi',
              color: "#FEC435",
              y: []
          }]
        }]
      },
    };
  },

  mounted() {
    this.loadData();
  },

  methods: {
    loadData() {
      const token = JSON.parse(localStorage.getItem("token"));
      axios
        .get(import.meta.env.VITE_API_URL + '/rekap-tingkat-akreditasi-lpk', {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          if (response.data) {
            var accredited = response.data.data.accredited;
            var notAccredited = response.data.data.not_accredited;

            this.chartOptions.series[0].data[0].y = accredited;
            this.chartOptions.series[0].data[1].y = notAccredited;
          }
        });
    },
  },
};
</script>
