<template>
  <highcharts :options="chartOptions" ref="barChart"></highcharts>
</template>

<script>
import Highcharts from "highcharts";
import axios from "axios";

export default {
  name: "KapasitasTerhadapPesertaTerdaftar",
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
        legend: {
          symbolWidth: 10,
          symbolHeight: 10,
          symbolPadding: 5,
          symbolRadius: 0,
        },
        plotOptions: {
          column: {
            maxPointWidth: 50,
            dataLabels: {
              enabled: true,
            },
          },
        },
        credits: {
          enabled: false,
        },
        series: [
          {
            name: "Jumlah Tenaga Kerja",
            data: [],
            color: "#FFC000",
          },
        ],
      },
      dataPelatihan: [
        {
          categories: "Prakerja",
          jumlah: 17474795,
        },
      ],
    };
  },
  mounted() {
    // this.loadData(); // uncomment this line if you want to load data from API
    this.sortedData();
    var categories = [];
    var jumlah = [];
    this.dataPelatihan.forEach((item) => {
      categories.push(item.categories);
      jumlah.push(item.jumlah);
    });
    this.chartOptions.xAxis.categories = categories;
    this.chartOptions.series[0].data = jumlah;
  },

  methods: {
    loadData() {
      const token = JSON.parse(localStorage.getItem("token"));
      axios
        .get("http://192.168.221.169:8000/pelatihan", {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          if (response.data) {
            this.chartOptions.series[0].data = response.data.data;
          }
        });
    },
    sortedData() {
      return this.dataPelatihan.sort((a, b) => b.jumlah - a.jumlah);
    },
  },
};
</script>
