<template>
  <highcharts :options="chartOptions" ref="pieChart"></highcharts>
</template>

<script>
import axios from "axios";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default {
  name: "StatistikData",
  data() {
    return {
      pageTitle   : "",
      chartOptions: {
        chart: {
          type: "column",
        },
        title: {
          text: null,
        },
        xAxis: {
          categories: [
            "Upload Excel",
            "Database Siap Kerja",
          ],
        },
        yAxis: {
          title: null,
          enabled: false,
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px"></span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{point.category}: </td>' +
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
            name: null,
            data: [],
            color: getRandomColor(),
            showInLegend: false,
          },
        ],
        credits: {
          enabled: false,
        },
      },
    };
  },
  created() {
    this.pageTitle = this.$route.params.title;
  },
  methods: {
    loadData() {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      let urlEX = "";
      let urlSK = "";
      if (this.pageTitle === "lembaga-pelatihan") {
        urlEX = import.meta.env.VITE_API_URL + "/total-training-institutions-statistics-ex";
        urlSK = import.meta.env.VITE_API_URL + "/total-training-institutions-statistics-ex";
      } else if (this.pageTitle === "program-pelatihan") {
        urlEX = import.meta.env.VITE_API_URL + "/total-training-institutions-statistics-ex";
        urlSK = import.meta.env.VITE_API_URL + "/total-training-institutions-statistics-ex";
      } else if (this.pageTitle === "tenaga-pelatihan") {
        urlEX = import.meta.env.VITE_API_URL + "/total-training-institutions-statistics-ex";
        urlSK = import.meta.env.VITE_API_URL + "/total-training-institutions-statistics-ex";
      } else if (this.pageTitle === "peserta-pelatihan") {
        urlEX = import.meta.env.VITE_API_URL + "/total-training-institutions-statistics-ex";
        urlSK = import.meta.env.VITE_API_URL + "/total-training-institutions-statistics-ex";
      } else if (this.pageTitle === "penyelenggara-magang") {
        urlEX = import.meta.env.VITE_API_URL + "/total-training-institutions-statistics-ex";
        urlSK = import.meta.env.VITE_API_URL + "/total-training-institutions-statistics-ex";
      } else if (this.pageTitle === "peserta-pemagangan") {
        urlEX = import.meta.env.VITE_API_URL + "/total-training-institutions-statistics-ex";
        urlSK = import.meta.env.VITE_API_URL + "/total-training-institutions-statistics-ex";
      } else if (this.pageTitle === "program-pemagangan") {
        urlEX = import.meta.env.VITE_API_URL + "/total-training-institutions-statistics-ex";
        urlSK = import.meta.env.VITE_API_URL + "/total-training-institutions-statistics-ex";
      } else if (this.pageTitle === "instruktur") {
        urlEX = import.meta.env.VITE_API_URL + "/total-training-institutions-statistics-ex";
        urlSK = import.meta.env.VITE_API_URL + "/total-training-institutions-statistics-ex";
      }

      const dataEX = axios.get(urlEX, config).then((response) => {
        if (response.data) {
        
          const dataEX = [
            response.data.data,
            response.data.data,
          ];

          this.chartOptions.series[0].data = dataEX;
        }
      });

      // const dataSK = axios.get(urlSK, config).then((response) => {
      //   if (response.data) {
        
      //     const dataSK = [
      //       response.data.data,
      //     ];

      //     this.chartOptions.series[0].data = dataSK;
      //   }
      // });
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>
