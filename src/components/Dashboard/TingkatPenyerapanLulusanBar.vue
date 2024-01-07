<template>
  <highcharts :options="chartOptions" ref="barChart"></highcharts>
</template>

<script>
import axios from "axios";

export default {
  name: "TingkatPenyerapanLulusanBar",
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'bar'
        },
        title: {
          text: null,
        },
        xAxis: {
          categories: ['TEKNIK FOTOGRAFI', 'TEKNIK MANUFAKTUR', 'TEKNIK AKUNTANSI JUNIOR', 'TEKNIK AUDIO VIDEO', 'TEKNIK INSTALASI TENAGA'],
          gridLineWidth: 1,
          lineWidth: 0
        },
        yAxis: {
          min: 0,
          title: {
            text: null,
          },
          labels: {
            overflow: 'justify'
          },
          gridLineWidth: 0
        },
        tooltip: {
          valueSuffix: ' Peserta'
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true
            },
            groupPadding: 0.1
          }
        },
        legend: {
          symbolWidth: 10,
          symbolHeight: 10,
          symbolPadding: 5,
          symbolRadius: 0,
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name: 'Bekerja',
            data: [631, 727, 800, 721, 631]
          },
          {
            name: 'Tidak Bekerja',
            data: [814, 841, 750, 726, 814]
          }
        ]
      },
    };
  },

  mounted() {
    this.loadData();
  },

  methods: {
    loadData() {
      const token = JSON.parse(localStorage.getItem("token"));
      axios
        .get(import.meta.env.VITE_API_URL + '/recap-graduate-absorption-rate-bar', {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          console.log(response)
          if (response.data) {
          }
        });
    },
  },
};
</script>
