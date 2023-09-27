<template>
  <highcharts :options="chartOptions" ref="pieChart"></highcharts>
</template>

<script>
import axios from "axios";

function getRandomColor(count) {
  const colors = [];
  for (let i = 0; i < count; i++) {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16); // Generates a random hex color
    colors.push(randomColor);
  }
  return colors;
}

export default {
  name: "PersentaseTerhadapPencariKerja",
  data() {
    return {
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: '',
          align: 'left'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
              valueSuffix: '%'
          }
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
        },
        series: [{
          name: 'Persentase',
          colorByPoint: true,
          data: []
        }]
      },
    };
  },

  mounted() {
    this.loadData(); // uncomment this line if you want to load data from API
  },

  methods: {
    loadData() {
      const token = JSON.parse(localStorage.getItem("token"));
      axios
        .get(import.meta.env.VITE_API_URL + '/recap-percentage-job-seekers-lpk', {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          if (response.data) {
            var namaLembaga = [];
            var kapasitasLatih = [];
            response.data.data.forEach((item) => {
                namaLembaga.push(item.nama_lembaga);
                kapasitasLatih.push(item.kapasitas_latih);
            });

            var dataPoints = [];
            const colors = getRandomColor(namaLembaga.length);
            for (let i = 0; i < namaLembaga.length; i++) {
              dataPoints.push({
                name: namaLembaga[i],
                y: kapasitasLatih[i],
                color: colors[i],
              });
            }
            this.chartOptions.series[0].data = dataPoints;
          }
        });
    },
  },
};
</script>