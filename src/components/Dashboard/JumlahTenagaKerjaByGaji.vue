<template>
  <highcharts :options="chartOptions" ref="pieChart"></highcharts>
</template>

<script>
import Highcharts from "highcharts";
import axios from "axios";

export default {
  name: "JumlahTenagaKerjaByGaji",
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
          categories: [
            "Tidak Ada Informasi",
            "> Rp10.000.000",
            "Rp5.000.000 - Rp10.000.000",
            "Rp3.000.000 - Rp5.000.000",
            "Rp1.000.000 - Rp3.000.000",
            "Rp500.000 - Rp1.000.000",
            "Rp100.000 - Rp500.000",
            "< Rp100.000",
          ],
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
            dataLabels: {
              enabled: true,
            },
          },
        },
        credits: {
          enabled: false,
        },
        series: [
          {
            name: "Jumlah Tenaga Kerja",
            data: [],
            color: "#4472C4",
          },
        ],
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
        .get(import.meta.env.VITE_API_URL + "/gaji", {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          if (response.data) {
            this.chartOptions.series[0].data = response.data.data;
          }
        });
    },
  },
};
</script>
