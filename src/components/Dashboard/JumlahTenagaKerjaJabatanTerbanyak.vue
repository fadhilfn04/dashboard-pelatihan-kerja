<template>
  <highcharts :options="chartOptions" ref="pieChart"></highcharts>
</template>

<script>
import axios from "axios";

export default {
  name: "JumlahTenagaKerjaJabatanTerbanyak",
  data() {
    return {
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
        },
        title: {
          text: null,
        },
        tooltip: {
          pointFormat: "Jumlah : <b>{point.y}</b>",
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.y}",
            },
          },
        },
        series: [
          {
            name: "Jabatan",
            colorByPoint: true,
            data: [
              {
                name: "Profesional",
                y: 0,
                color: "#4472C4",
              },
              {
                name: "Teknisi dan Asisten Profesional",
                y: 0,
                color: "#ED7D31",
              },
              {
                name: "Tenaga Tata Usaha",
                y: 0,
                color: "#B1B1B1",
              },
              {
                name: "Tenaga Usaha Jasa dan Tenaga Penjualan",
                y: 0,
                color: "#FFC000",
              },
              {
                name: "Manager",
                y: 0,
                color: "#5B9BD5",
              },
            ],
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
        .get(import.meta.env.VITE_API_URL + "/jabatan", {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          if (response.data) {
            this.chartOptions.series[0].data[0].y = response.data.data.profesionalprofesional;
            this.chartOptions.series[0].data[1].y = response.data.data.teknisi_asisten_profesional;
            this.chartOptions.series[0].data[2].y = response.data.data.tenaga_tata_usaha;
            this.chartOptions.series[0].data[3].y = response.data.data.tenaga_jasa_penjualan;
            this.chartOptions.series[0].data[4].y = response.data.data.manager;
          }
        });
    },
  },
};
</script>
