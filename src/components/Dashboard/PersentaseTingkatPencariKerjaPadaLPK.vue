<template>
  <highcharts :options="chartOptions" ref="barChart"></highcharts>
</template>

<script>
import Highcharts from "highcharts";
import axios from "axios";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export default {
  name: "PersentaseTingkatPencariKerjaPadaLPK",
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
        series: [{
          name: 'Persentase Lulusan Pelatihan',
          colorByPoint: getRandomColor(),
          data: [],
          dataLabels: {
            enabled: true,
            formatter: function () {
              return this.y + '%'; // Add '%' after the value
            },
          },
        }],
        tooltip: {
          formatter: function () {
            return this.series.name + ': <b>' + this.y + '%</b>'; // Add '%' to tooltip
          },
        },
      },
    };
  },
  props: {
    filter: {
      type: String,
      default: '/recap-percentage-job-seekers-lpk',
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
          if (response.data.success) {
            var categories = [];
            var value = [];
            response.data.data.forEach((item) => {
              categories.push(item.nama_kejuruan);
              value.push({
                category: item.nama_kejuruan,
                percentage: Math.floor((item.bekerja / item.count) * 100)
              });
            });
            value.sort((a, b) => b.percentage - a.percentage);

            this.chartOptions.xAxis.categories = value.map(item => item.category);
            this.chartOptions.series[0].data = value.map(item => item.percentage);
          }
        });
    },
  },
};
</script>
