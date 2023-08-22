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
    this.loadData(); // uncomment this line if you want to load data from API
  },

  methods: {
    loadData() {
      const token = JSON.parse(localStorage.getItem("token"));
      axios
        .get("http://localhost:8000/rekap-jumlah-lpk", {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          // console.log(response.data);
          if (response.data) {
            var pemerintah = [];
            var swasta = [];
            var yayasan = [];
            var pribadi = [];

            pemerintah.push(response.data.data.lpk_pemerintah);
            swasta.push(response.data.data.lpk_swasta);
            yayasan.push(response.data.data.lpk_yayasan);
            pribadi.push(response.data.data.lpk_pribadi);

            this.chartOptions.series[0].data = pemerintah;
            this.chartOptions.series[1].data = swasta;
            this.chartOptions.series[2].data = yayasan;
            this.chartOptions.series[3].data = pribadi;
          }
        });
    },
  },
};
</script>
