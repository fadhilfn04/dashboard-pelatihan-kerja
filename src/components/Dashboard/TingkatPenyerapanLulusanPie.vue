<template>
  <highcharts :options="chartOptions" ref="barChart"></highcharts>
</template>

<script>
import axios from "axios";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export default {
  name: "TingkatPenyerapanLulusanPie",
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
          name: 'Kategori',
          colorByPoint: true,
          data: [{
              name: 'Bekerja',
              color: getRandomColor(),
              y: [],
          },  {
              name: 'Tidak Bekerja',
              color: getRandomColor(),
              y: []
          }]
        }]
      },
    };
  },
  props: {
    filter: {
      type: String,
      default: "/recap-graduate-absorption-rate-pie",
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
      axios.get(import.meta.env.VITE_API_URL + this.filter, {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      })
      .then((response) => {
        if (response.data) {
          var dataBekerja = [];
          var dataTidakBekerja = [];
          const randomBekerja = this.getRandomData(100, 1000);
          const randomTidakBekerja = this.getRandomData(100, 1000);
          dataBekerja.push(randomBekerja);
          dataTidakBekerja.push(randomTidakBekerja);
          
          this.chartOptions.series[0].data[0].y = dataBekerja[0];
          this.chartOptions.series[0].data[1].y = dataTidakBekerja[0];
        }
      });
    },
    getRandomData(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>
