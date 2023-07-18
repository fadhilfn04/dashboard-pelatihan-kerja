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
              formatter: function () {
                const absoluteValue = Math.abs(this.y);
                const formatter = new Intl.NumberFormat("en-US");
                return formatter.format(absoluteValue);
              },
              style: {
                fontSize: "16px",
              },
            },
            showInLegend: true,
          },
        },
        legend: {
          symbolWidth: 10,
          symbolHeight: 10,
          symbolPadding: 5,
          symbolRadius: 0,
        },
        colors: ["#4472C4", "#ED7D31"],
        series: [
          {
            name: "Jumlah Tenaga Kerja",
            data: [],
          },
        ],
        credits: {
          enabled: false,
        },
      },
    };
  },
  props: {
    filter: {
      type: String,
      default: "/sektor",
    },
  },
  mounted() {
    this.loadData();
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
        .get("http://192.168.221.169:8000" + this.filter, {
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
