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
            "Upload",
            "Database",
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
  mounted() {
    this.loadData();
  },

  methods: {
    loadData() {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      let url = "";
      if (this.pageTitle === "lembaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-institutions";
      } else if (this.pageTitle === "program-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-program";
      } else if (this.pageTitle === "tenaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-personnel";
      } else if (this.pageTitle === "peserta-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-participants";
      } else if (this.pageTitle === "penyelenggara-magang") {
        url = import.meta.env.VITE_API_URL + "/total-internship-organizers";
      } else if (this.pageTitle === "peserta-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprentices";
      } else if (this.pageTitle === "program-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprenticeship-programs";
      } else if (this.pageTitle === "instruktur") {
        url = import.meta.env.VITE_API_URL + "/total-instructors";
      }

      axios.get(url, config).then((response) => {
        if (response.data) {
            const data = [
              response.data.data,
              response.data.data,
            ];
            this.chartOptions.series[0].data = data;
          }
      });
    },
  },
};
</script>
