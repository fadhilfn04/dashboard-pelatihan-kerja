<template>
  <highcharts :options="chartOptions" ref="pieChart"></highcharts>
</template>

<script>
import axios from "axios";

export default {
  name: "TrenJumlahPesertaPemaganganDalamNegeri",
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'column'
        },
        title: {
          text: null
        },
        subtitle: {
          text: null
        },
        xAxis: {
          type: 'category',
          labels: {
            autoRotation: [-45, -90],
            style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
            }
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Jumlah (Peserta)'
          }
        },
        legend: {
          enabled: false
        },
        tooltip: {
          pointFormat: 'Jumlah: <b>{point.y} Peserta</b>'
        },
        credits: {
          enabled: false,
        },
        series: [
          {
            name: 'Population',
            colors: [
              '#9b20d9', '#9215ac', '#861ec9', '#7a17e6', '#7010f9', '#691af3',
              '#6225ed', '#5b30e7', '#533be1', '#4c46db', '#4551d5', '#3e5ccf',
              '#3667c9', '#2f72c3', '#277dbd', '#1f88b7', '#1693b1', '#0a9eaa',
              '#03c69b',  '#00f194'
            ],
            colorByPoint: true,
            groupPadding: 0,
            data: [],
            dataLabels: {
              enabled: true,
              rotation: -90,
              color: '#FFFFFF',
              align: 'right',
              format: '{point.y}',
              y: 10,
              style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
              }
            }
          }
        ]
      }
    };
  },

  mounted() {
    this.loadData();
  },

  methods: {
    loadData() {
      const token = JSON.parse(localStorage.getItem("token"));
      axios
        .get(import.meta.env.VITE_API_URL + '/recap-trends-number-apprentices-dagri', {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          if (response.data) {
            const data = response.data.data.rekap_tren;
            const dalam_negeri  = data.dalam_negeri;

            const months = [
              "Januari", "Februari", "Maret", "April", "Mei", "Juni",
              "Juli", "Agustus", "September", "Oktober", "November", "Desember"
            ];

            const monthlyData = months.map((month, index) => ({
              name: month,
              y: dalam_negeri[index]
            }));

            this.chartOptions.series[0].data = monthlyData;
          }
        });
    },
  },
};
</script>
