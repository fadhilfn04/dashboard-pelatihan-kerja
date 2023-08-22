<template>
  <highcharts :options="chartOptions" ref="pieChart"></highcharts>
</template>

<script>
import axios from "axios";

export default {
  name: "JumlahLembagaPelatihanKerja",
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'column'
        },
        title: {
          text: null,
        },
        legend: {
          symbolWidth: 10,
          symbolHeight: 10,
          symbolPadding: 5,
          symbolRadius: 0,
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y}</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.1,
            borderWidth: 0,
          },
          series: {
            groupPadding: 0.1,
          },
        },
        series: [
          {
            name: "Lembaga Pemerintah",
            data: [
              1000
            ],
            color: "#FFA800",
          },
          {
            name: "Lembaga Swasta",
            data: [
              2000
            ],
            color: "#8A50FC",
          },
          {
            name: "Lembaga Yayasan",
            data: [
              3000
            ],
            color: "#F65464",
          },
          {
            name: "Lembaga Pribadi",
            data: [
              4000
            ],
            color: "#1BC5BC",
          },
        ],
        credits: {
          enabled: false,
        },
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
  //       .get(import.meta.env.VITE_API_URL + "/jumlahLPK", {
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
