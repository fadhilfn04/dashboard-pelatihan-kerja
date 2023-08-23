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
              y: [],
          },  {
              name: 'Tidak Bekerja',
              color: "#FF8181",
              y: []
          }]
        }]
      },
    };
  },
  props: {
    filter: {
      type: String,
      default: "/rekap-produktifitas-tenaga-kerja",
    },
  },
  mounted() {
    this.loadData(); // uncomment this line if you want to load data from API
  },
  watch: {
    filter() {
      this.loadData();
    },
  },
  methods: {
    loadData() {
      const token = JSON.parse(localStorage.getItem("token"));
      axios
        .get(import.meta.env.VITE_API_URL + this.filter, {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          if (response.data) {
            var bekerja       = response.data.data.bekerja;
            var tidakBekerja  = response.data.data.tidak_bekerja;
            
            this.chartOptions.series[0].data[0].y = bekerja;
            this.chartOptions.series[0].data[1].y = tidakBekerja;
          }
        });
    },
  },
};
</script>
