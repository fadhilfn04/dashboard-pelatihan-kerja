<template>
  <highcharts :options="chartOptions" ref="pieChart"></highcharts>
</template>

<script>
import axios from "axios";

export default {
  name: "JumlahLembagaPelatihanKerja",
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'column'
        },
        title: {
          text: null,
        },
        xAxis: null,
        yAxis: {
          title: null,
          enabled: false,
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px"></span><table>',
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
            name: "Lembaga Pemerintah",
            data: [],
            color: "#FFA800",
          },
          {
            name: "Lembaga Swasta",
            data: [],
            color: "#8A50FC",
          },
          {
            name: "Lembaga Yayasan",
            data: [],
            color: "#F65464",
          },
          {
            name: "Lembaga Pribadi",
            data: [],
            color: "#1BC5BC",
          },
        ],
        credits: {
          enabled: false,
        },
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
        .get(import.meta.env.VITE_API_URL + '/rekap-jumlah-lpk', {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          if (response.data) {
            var pemerintah = response.data.data.lpk_pemerintah;
            var swasta = response.data.data.lpk_swasta;
            var yayasan = response.data.data.lpk_yayasan;
            var pribadi = response.data.data.lpk_pribadi;

            this.chartOptions.series[0].data = [pemerintah];
            this.chartOptions.series[1].data = [swasta];
            this.chartOptions.series[2].data = [yayasan];
            this.chartOptions.series[3].data = [pribadi];
          }
        });
    },
  },
};
</script>
