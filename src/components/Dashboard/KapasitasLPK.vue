<template>
  <highcharts :options="chartOptions" ref="barChart"></highcharts>
</template>

<script>
import Highcharts from "highcharts";
import axios from "axios";

export default {
  name: "KapasitasLPK",
  data() {
    return {
      chartOptions: {
        chart: {
          type: "bar",
        },
        title: {
          text: null,
        },
        xAxis: {
          categories: [],
          title: {
            text: null,
          },
          labels: {
            style: {
              fontSize: "14px",
            },
          },
        },
        yAxis: {
          min: 0,
          title: null,
          labels: {
            formatter: function () {
              return Highcharts.numberFormat(this.value, 0, ".", ",");
            },
            style: {
              fontSize: "10px",
            },
            overflow: "justify",
          },
        },
        plotOptions: {
          bar: {
            minPointLength: 5,
            dataLabels: {
              enabled: true,
            },
          },
        },
        legend: {
          symbolWidth: 10,
          symbolHeight: 10,
          symbolPadding: 5,
          symbolRadius: 0,
        },
        credits: {
          enabled: false,
        },
        series: [
          {
            name: "Jumlah Kapasitas LPK",
            data: [],
            color: "#4472C4",
          },
        ],
      },
    };
  },
  props: {
    filter: {
      type: String,
      default: "/recap-capacity-lpk",
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
        .get(import.meta.env.VITE_API_URL + this.filter, {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          if (response.data) {
            var categories = [];
            var value = [];
            response.data.data.forEach((item) => {
              categories.push(item.nama_lembaga);
              value.push(item.kapasitas_latih);
            });

            this.chartOptions.xAxis.categories = categories;
            this.chartOptions.series[0].data = value;
          }
        });
    },
  },
};
</script>
