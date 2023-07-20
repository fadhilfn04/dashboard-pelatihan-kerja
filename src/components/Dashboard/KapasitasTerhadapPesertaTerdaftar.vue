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
          reversed: false,
          symbolWidth: 10,
          symbolHeight: 10,
          symbolPadding: 5,
          symbolRadius: 0,
        },
        plotOptions: {
          series: {
            stacking: 'normal',
            dataLabels: {
              enabled: true,
            },
          },
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
            name: "Kapasitas Terisi",
            data: [220, 180, 160, 140, 120, 100, 120, 140, 160, 180],
            color: "#F65464",
          },
          {
            name: "Kapasitas Tersisa",
            data: [200, 180, 160, 140, 120, 100, 120, 140, 160, 180],
            color: "#0BB783",
          },
        ],
      },
      dataKapasitas: [
        {
          categories: "Balai Pelatihan Nasional",
        },
        {
          categories: "Balai Pelatihan Nasional",
        },
        {
          categories: "Balai Pelatihan Nasional",
        },
        {
          categories: "Balai Pelatihan Nasional",
        },
        {
          categories: "Balai Pelatihan Nasional",
        },
        {
          categories: "Balai Pelatihan Nasional",
        },
        {
          categories: "Balai Pelatihan Nasional",
        },
        {
          categories: "Balai Pelatihan Nasional",
        },
        {
          categories: "Balai Pelatihan Nasional",
        },
        {
          categories: "Balai Pelatihan Nasional",
        },
      ],
    };
  },
  mounted() {
    // this.loadData(); // uncomment this line if you want to load data from API
    this.sortedData();
    var categories = [];
    var jumlah = [];
    this.dataKapasitas.forEach((item) => {
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
      return this.dataKapasitas.sort((a, b) => b.jumlah - a.jumlah);
    },
  },
};
</script>
