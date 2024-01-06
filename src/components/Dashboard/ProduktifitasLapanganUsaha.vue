<template>
  <highcharts :options="chartOptions" ref="columnChart"></highcharts>
</template>

<script>
import axios from "axios";
import Highcharts from "highcharts";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export default {
  name: "ProduktifitasLapanganUsaha",
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
            name: "Pemagangan Dalam Negeri",
            color: getRandomColor(),
            marker: {
              symbol: 'circle'
            },
          },
          {
            name: "Pemagangan Luar Negeri",
            color: getRandomColor(),
            marker: {
              symbol: 'square'
            },
          },
        ],
        credits: {
          enabled: false,
        },
      },
      dataTren: [
        {
          categories: "2011",
        },
        {
          categories: "2012",
        },
        {
          categories: "2013",
        },
        {
          categories: "2014",
        },
        {
          categories: "2015",
        },
        {
          categories: "2016",
        },
        {
          categories: "2017",
        },
        {
          categories: "2018",
        },
        {
          categories: "2019",
        },
        {
          categories: "2020",
        },
        {
          categories: "2021",
        },
        {
          categories: "2022",
        },
      ],
    };
  },
  props: {
    filter: {
      type: String,
      default: "/recap-business-productivity",
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
        .get(import.meta.env.VITE_API_URL + "/recap-trends-number-apprentices", {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          if (response.data && response.data.data) {
            const data = response.data.data.rekap_tren;

            var categories      = [];
            const dalam_negeri  = data.dalam_negeri;
            const luar_negeri   = data.luar_negeri;

            this.dataTren.forEach((item) => {
              categories.push(item.categories);
            });

            this.chartOptions.xAxis.categories  = categories;
            this.chartOptions.series[0].data    = dalam_negeri;
            this.chartOptions.series[1].data    = luar_negeri;
          }
        });
    },
  },
};
</script>
