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
            name: [],
            color: "#FFA800",
            y: 100,
          }]
        }]
      },
    };
  },

  mounted() {
    this.loadData(); // uncomment this line if you want to load data from API
  },

  methods: {
    loadData() {
      const token = JSON.parse(localStorage.getItem("token"));
      axios
        .get("http://localhost:8000/rekap-persentase-lpk-terhadap-pencari-kerja", {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          // console.log(response.data);
          if (response.data) {
            var data = [];
            var y = [];
            response.data.data.forEach((item) => {
                data.push(item.nama_lembaga);
                // y.push(item.kapasitas_latih);
            });

            this.chartOptions.series[0].data[0].name = data;
            // this.chartOptions.series[0].data[0].y = y;
          }
        });
    },
  },
};
</script>