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
      dataLPK: [
        {
          categories: "Balai Pelatihan Nasional 1",
          value: 2561081,
        },
        {
          categories: "Balai Pelatihan Nasional 2",
          value: 2427343,
        },
        {
          categories: "Balai Pelatihan Nasional 3",
          value: 1800170,
        },
        {
          categories: "Balai Pelatihan Nasional 4",
          value: 1500423,
        },
        {
          categories: "Balai Pelatihan Nasional 5",
          value: 1023124,
        },
        {
          categories: "Balai Pelatihan Nasional 6",
          value: 529342,
        },
        {
          categories: "Balai Pelatihan Nasional 7",
          value: 295739,
        },
        {
          categories: "Balai Pelatihan Nasional 8",
          value: 492019,
        },
        {
          categories: "Balai Pelatihan Nasional 9",
          value: 500995,
        },
        {
          categories: "Balai Pelatihan Nasional 10",
          value: 900995,
        },
      ],
    };
  },
  mounted() {
    // this.loadData(); // uncomment this line if you want to load data from API
    var categories = [];
    var value = [];
    this.dataLPK.forEach((item) => {
      categories.push(item.categories);
      value.push(item.value);
    });
    this.chartOptions.xAxis.categories = categories;
    this.chartOptions.series[0].data = value;
  },

  // methods: {
  //   loadData() {
  //     const token = JSON.parse(localStorage.getItem("token"));
  //     axios
  //       .get("http://192.168.221.169:8000/kapasitasLPK", {
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
  //     return this.dataLPK.sort((a, b) => b.jumlah - a.jumlah);
  //   },
  // },
};
</script>
