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
            name: "Pra Kerja",
            data: [],
            color: "#FF8181",
          },
          {
            name: "Pemagangan Dalam Negeri",
            data: [],
            color: "#DE4EE1",
          },
          {
            name: "Pemagangan Luar Negeri",
            data: [],
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
  props: {
    filter: {
      type: String,
      default: "/rekap-tren-jumlah-peserta-pelatihan",
    },
  },
  mounted() {
    this.loadData(); // uncomment this line if you want to load data from API
    var categories = [];
    var jumlah = [];
    this.dataTren.forEach((item) => {
      categories.push(item.categories);
      jumlah.push(item.jumlah);
    });
    this.chartOptions.xAxis.categories = categories;
    this.chartOptions.series[0].data = jumlah;
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
            console.log(response.data.data);
            var categories = [];
            var prakerja = [];
            var dalam_negeri = [];
            var luar_negeri = [];

            prakerja.push(response.data.data.prakerja);
            dalam_negeri.push(response.data.data.dalam_negeri);
            luar_negeri.push(response.data.data.luar_negeri);

            this.dataTren.forEach((item) => {
              categories.push(item.categories);
            });
            this.chartOptions.xAxis.categories = categories;
            this.chartOptions.series[0].data = prakerja;
            this.chartOptions.series[1].data = dalam_negeri;
            this.chartOptions.series[2].data = luar_negeri;
          }
        });
    },
  },
};
</script>
