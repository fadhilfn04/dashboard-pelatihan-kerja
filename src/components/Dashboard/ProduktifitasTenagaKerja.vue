<template>
  <highcharts :options="chartOptions" ref="barChart"></highcharts>
</template>

<script>
import Highcharts from "highcharts";
import axios from "axios";

export default {
  name: "ProduktifitasTenagaKerja",
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
          name: 'Produktifitas',
          colorByPoint: true,
          data: [{
              name: 'Bekerja',
              color: "#4EE1AC",
              y: 30,
          },  {
              name: 'Tidak Bekerja',
              color: "#FF8181",
              y: 50
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
        .get("http://localhost:8000/rekap-produktifitas-tenaga-kerja", {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          console.log(response.data);
          if (response.data) {
            var bekerja       = [];
            var tidak_bekerja = [];
            
            bekerja.push(response.data.data.bekerja);
            tidak_bekerja.push(response.data.data.tidak_bekerja);

            // this.chartOptions.series[0].data[0].y = bekerja;
            // this.chartOptions.series[0].data[1].y = tidak_bekerja;
          }
        });
    },
  },
};
</script>
