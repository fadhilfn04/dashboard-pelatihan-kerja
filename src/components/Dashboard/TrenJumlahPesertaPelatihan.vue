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
            color: "#FF8181",
            marker: {
              symbol: 'circle'
            },
          },
          {
            name: "Pemagangan Dalam Negeri",
            color: "#DE4EE1",
            marker: {
              symbol: 'circle'
            },
          },
          {
            name: "Pemagangan Luar Negeri",
            color: "#945FFB",
            marker: {
              symbol: 'circle'
            },
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
      default: "/recap-trends-number-trainees",
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
          if (response.data && response.data.data) {
            const data = response.data.data.rekap_tren;

            var categories      = [];
            const prakerja      = data.prakerja;
            const dalam_negeri  = data.dalam_negeri;
            const luar_negeri   = data.luar_negeri;

            this.dataTren.forEach((item) => {
              categories.push(item.categories);
            });

            this.chartOptions.xAxis.categories  = categories;
            this.chartOptions.series[0].data    = prakerja;
            this.chartOptions.series[1].data    = dalam_negeri;
            this.chartOptions.series[2].data    = luar_negeri;
          }
        });
    },
  },
};
</script>
