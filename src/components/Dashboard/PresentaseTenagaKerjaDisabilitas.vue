<template>
  <highcharts :options="chartOptions" ref="pieChart"></highcharts>
</template>

<script>
import axios from "axios";

export default {
  name: "PresentaseTenagaKerjaDisabilitas",
  data() {
    return {
      chartOptions: {
        chart: {
          type: "pie",
          options3d: {
            enabled: true,
            alpha: 45,
            beta: 0,
          },
        },
        title: {
          text: null,
        },
        plotOptions: {
          pie: {
            innerSize: "70%",
            depth: 45,
            dataLabels: {
              enabled: true,
              format: "{point.y:.1f}%",
              style: {
                fontSize: "16px",
              },
            },
          },
        },
        legend: {
          align: "center",
          verticalAlign: "bottom",
          layout: "horizontal",
          symbolWidth: 12,
          symbolHeight: 12,
          symbolRadius: 6,
          itemMarginBottom: 10,
          itemStyle: {
            fontSize: "12px",
            fontWeight: "normal",
          },
        },
        colors: ["#4472C4", "#ED7D31"],
        series: [
          {
            name: "Data",
            data: [],
          },
        ],
        credits: {
          enabled: false,
        },
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
        .get("http://192.168.221.169:8000/disabilitas", {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          if (response.data) {
            this.chartOptions.series[0].data = response.data;
          }
        });
    },
  },
};
</script>
