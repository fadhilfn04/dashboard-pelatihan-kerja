<template>
  <highcharts :options="chartOptions" ref="pieChart"></highcharts>
</template>

<script>
import axios from "axios";
import Highcharts from "highcharts";

export default {
  name: "TingkatAkreditasiLembagaPelatihanKerja",
  data() {
    return {
      chartOptions: {
        chart: {
          type: "column",
        },
        title: {
          text: null,
        },
        xAxis: {
          categories: [
            "Tingkat 1",
            "Tingkat 2",
            "Tingkat 3",
            "Tingkat 4",
          ],
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
            name: "Pemerintah",
            data: [
              2082, 245080, 574841, 163560, 1709365, 1399069, 1063947, 598438,
              4454038, 2682325, 679437, 1267279, 16209, 494,
            ],
            color: "#FFCE6F",
          },
          {
            name: "Swasta",
            data: [
              1496, 326766, 720696, 130149, 1465359, 1466188, 1015212, 586758,
              4018019, 2069101, 679101, 2068192, 17657, 471,
            ],
            color: "#945FFB",
          },
          {
            name: "Yayasan",
            data: [
              1496, 326766, 720696, 130149, 1465359, 1466188, 1015212, 586758,
              4018019, 2069101, 679101, 2068192, 17657, 471,
            ],
            color: "#FA7884",
          },
          {
            name: "Pribadi",
            data: [
              1496, 326766, 720696, 130149, 1465359, 1466188, 1015212, 586758,
              4018019, 2069101, 679101, 2068192, 17657, 471,
            ],
            color: "#49D3CC",
          },
        ],
        credits: {
          enabled: false,
        },
      },
      dataAkreditasiLembaga: [
        {
          categories: "Tingkat 1",
          pemerintah: 2082,
          swasta: 1496,
          yayasan: 1496,
          pribadi: 1496,
        },
        {
          categories: "Tingkat 2",
          pemerintah: 2082,
          swasta: 1496,
          yayasan: 1496,
          pribadi: 1496,
        },
        {
          categories: "Tingkat 3",
          pemerintah: 2082,
          swasta: 1496,
          yayasan: 1496,
          pribadi: 1496,
        },
        {
          categories: "Tingkat 4",
          pemerintah: 2082,
          swasta: 1496,
          yayasan: 1496,
          pribadi: 1496,
        },
      ],
    };
  },

  mounted() {
    // this.loadData(); // uncomment this line to load data from API
    var dataSorted = this.sortedData();
    var categories = [];
    var pemerintah = [];
    var swasta = [];
    var yayasan = [];
    var pribadi = [];

    dataSorted.forEach((item) => {
      categories.push(item.categories);
      pemerintah.push(item.pemerintah);
      swasta.push(item.swasta);
      yayasan.push(item.yayasan);
      pribadi.push(item.pribadi);
    });

    this.chartOptions.xAxis.categories = categories;
    this.chartOptions.series[0].data = pemerintah;
    this.chartOptions.series[1].data = swasta;
    this.chartOptions.series[2].data = yayasan;
    this.chartOptions.series[3].data = pribadi;
  },

  methods: {
    loadData() {
      const token = JSON.parse(localStorage.getItem("token"));
      axios
        .get("http://192.168.221.169:8000/pendidikan", {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          if (response.data) {
            this.chartOptions.series[0].data = response.data.data.pemerintah;
            this.chartOptions.series[1].data = response.data.data.swasta;
            this.chartOptions.series[2].data = response.data.data.yayasan;
            this.chartOptions.series[3].data = response.data.data.pribadi;
          }
        });
    },
    sortedData() {
      const sortedData = [...this.dataAkreditasiLembaga];

      sortedData.sort(
        (a, b, c, d) => b.laki_laki + b.perempuan - (a.laki_laki + a.perempuan)
      );

      return sortedData;
    },
  },
};
</script>
