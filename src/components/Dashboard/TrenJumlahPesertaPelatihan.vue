<template>
  <highcharts :options="chartOptions" ref="columnChart"></highcharts>
</template>

<script>
import axios from "axios";
import Highcharts from "highcharts";

export default {
  name: "TrenJumlahPesertaPelatihan",
  data() {
    return {
      chartOptions: {
        title: {
          text: null,
        },
        xAxis: {
          categories: [],
          crosshair: true,
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
            name: "Kompetensi",
            data: [
              100000, 200000, 1000000, 163560, 1709365, 1399069, 1063947, 598438,
              4454038, 2682325, 679437, 1267279
            ],
            color: "#4EE1AC",
          },
          {
            name: "Peningkatan Produktifitas",
            data: [
              5000000, 245080, 574841, 163560, 1709365, 1399069, 1063947, 598438,
              4454038, 2682325, 679437, 1267279
            ],
            color: "#FF9F43",
          },
          {
            name: "Pra Kerja",
            data: [
              2500000, 245080, 574841, 163560, 1709365, 1399069, 1063947, 598438,
              4454038, 2682325, 679437, 1267279
            ],
            color: "#FF8181",
          },
          {
            name: "Pemagangan Dalam Kerja",
            data: [
              3500000, 245080, 574841, 163560, 1709365, 1399069, 1063947, 598438,
              4454038, 2682325, 679437, 1267279
            ],
            color: "#DE4EE1",
          },
          {
            name: "Pemagangan Luar Negeri",
            data: [
              4000000, 245080, 574841, 163560, 1709365, 1399069, 1063947, 598438,
              4454038, 2682325, 679437, 126727
            ],
            color: "#945FFB",
          },
        ],
        credits: {
          enabled: false,
        },
      },
      dataTren: [
        {
          categories: "Jan",
        },
        {
          categories: "Feb",
        },
        {
          categories: "Mar",
        },
        {
          categories: "Apr",
        },
        {
          categories: "Mei",
        },
        {
          categories: "Jun",
        },
        {
          categories: "Jul",
        },
        {
          categories: "Agu",
        },
        {
          categories: "Sep",
        },
        {
          categories: "Okt",
        },
        {
          categories: "Nov",
        },
        {
          categories: "Des",
        },
      ],
    };
  },

  mounted() {
    this.sortedData();
    var categories = [];
    var jumlah = [];
    this.dataTren.forEach((item) => {
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
        .get("http://192.168.221.169:8000/bansos", {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          if (response.data.success) {
            const responseData = response.data.data;
            const mappedData = responseData.map((item) => [item.total]);
            this.chartOptions.series[0].data = mappedData;
          }
        });
    },
    sortedData() {
      return this.dataTren.sort((a, b) => b.jumlah - a.jumlah);
    },
  },
};
</script>
