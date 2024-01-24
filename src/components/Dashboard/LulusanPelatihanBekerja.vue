<template>
  <highcharts :options="chartOptions" ref="barChart"></highcharts>
</template>

<script>
import axios from "axios";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export default {
  name: "LulusanPelatihanBekerja",
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
          name: 'Produktifitas',
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
      default: "/recap-labor-productivity",
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
          if (response.data) {
            var bekerja       = response.data.data.bekerja;
            var tidakBekerja  = response.data.data.tidak_bekerja;
            
            this.chartOptions.series[0].data[0].y = bekerja;
            this.chartOptions.series[0].data[1].y = tidakBekerja;
          }
        });
    },
  },
};
</script>
