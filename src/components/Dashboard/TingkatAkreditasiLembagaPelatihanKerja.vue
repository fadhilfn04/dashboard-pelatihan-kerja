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
              y: 40.00,
          },  {
              name: 'Tidak Terakreditasi',
              color: "#FEC435",
              y: 30.00
          }]
        }]
      },
    };
  },

  // mounted() {
  //   //this.loadData(); // uncomment this line if you want to load data from API
  //   var categories = [];
  //   var jumlah = [];
  //   this.dataPekerjaan.forEach((item) => {
  //     categories.push(item.categories);
  //     jumlah.push(item.jumlah);
  //   });
  //   this.chartOptions.xAxis.categories = categories;
  //   this.chartOptions.series[0].data = jumlah;
  // },

  // methods: {
  //   loadData() {
  //     const token = JSON.parse(localStorage.getItem("token"));
  //     axios
  //       .get(import.meta.env.VITE_API_URL + "/rekap-tingkat-akreditasi-lpk", {
  //         headers: {
  //           Authorization: "Bearer " + token.value,
  //         },
  //       })
  //       .then((response) => {
  //         if (response.data) {
  //           this.chartOptions.series[0].data = response.data.data;
  //         }
  //       });
  //   },
  //   sortedData() {
  //     return this.dataPekerjaan.sort((a, b) => b.jumlah - a.jumlah);
  //   },
  // },
};
</script>
