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
      dataPekerjaan: [
        {
          categories: "Balai Pelatihan Nasional",
          jumlah: 8561081,
        },
        {
          categories: "Balai Pelatihan Nasional",
          jumlah: 2427343,
        },
        {
          categories: "Balai Pelatihan Nasional",
          jumlah: 1800170,
        },
        {
          categories: "Balai Pelatihan Nasional",
          jumlah: 980995,
        },
        {
          categories: "Balai Pelatihan Nasional",
          jumlah: 980995,
        },
        {
          categories: "Balai Pelatihan Nasional",
          jumlah: 980995,
        },
        {
          categories: "Balai Pelatihan Nasional",
          jumlah: 980995,
        },
        {
          categories: "Balai Pelatihan Nasional",
          jumlah: 980995,
        },
        {
          categories: "Balai Pelatihan Nasional",
          jumlah: 980995,
        },
        {
          categories: "Balai Pelatihan Nasional",
          jumlah: 980995,
        },
      ],
    };
  },
  mounted() {
    //this.loadData(); // uncomment this line if you want to load data from API
    var categories = [];
    var jumlah = [];
    this.dataPekerjaan.forEach((item) => {
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
        .get("http://192.168.221.169:8000/pekerjaan", {
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
      return this.dataPekerjaan.sort((a, b) => b.jumlah - a.jumlah);
    },
  },
};
</script>
