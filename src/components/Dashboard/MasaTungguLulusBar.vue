<template>
  <highcharts :options="chartOptions" ref="barChart"></highcharts>
</template>

<script>
import axios from "axios";

export default {
  name: "MasaTungguLulusBar",
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
          categories: ['PERAKITAN KOMPUTER', 'PERANCANGAN DESAIN BUSANA', 'PEKERJAAN KONSTRUKSI KAYU', 'TEKNIK INSTALASI LISTRIK', 'TATA RIAS KECANTIKAN'],
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
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          backgroundColor: '#FFFFFF',
          shadow: true
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name: '1 Bulan',
            data: [631, 727, 940, 721, 631]
          },
          {
            name: '3 Bulan',
            data: [814, 841, 840, 726, 814]
          },
          {
            name: '6 Bulan',
            data: [631, 727, 800, 721, 631]
          },
          {
            name: 'Lebih Dari Setahun',
            data: [814, 841, 750, 726, 750]
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
        .get(import.meta.env.VITE_API_URL + '/recap-waiting-period-graduate-bar', {
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
