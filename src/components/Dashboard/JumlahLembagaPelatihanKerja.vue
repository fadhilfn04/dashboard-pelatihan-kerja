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
            data: [
              1000
            ],
            color: "#FFA800",
          },
          {
            name: "Lembaga Swasta",
            data: [
              2000
            ],
            color: "#8A50FC",
          },
          {
            name: "Lembaga Yayasan",
            data: [
              3000
            ],
            color: "#F65464",
          },
          {
            name: "Lembaga Pribadi",
            data: [
              4000
            ],
            color: "#1BC5BC",
          },
        ],
        credits: {
          enabled: false,
        },
      },
      dataKewirausahaan: [
        {
          provinsi: "JAWA BARAT",
        },
        {
          provinsi: "JAWA TENGAH",
        },
        {
          provinsi: "JAWA TIMUR",
        },
        {
          provinsi: "DKI JAKARTA",
        },
        {
          provinsi: "BANTEN",
        },
        {
          provinsi: "SUMATERA UTARA",
        },
        {
          provinsi: "SULAWESEI SELATAN",
        },
        {
          provinsi: "SUMATERA SELATAN",
        },
        {
          provinsi: "LAMPUNG",
        },
        {
          provinsi: "RIAU",
        },
        {
          provinsi: "SUMATERA BARAT",
        },
        {
          provinsi: "DAERAH ISTIMEWA YOGYAKARTA",
        },
        {
          provinsi: "KALIMANTAN TIMUR",
        },
        {
          provinsi: "BALI",
        },
        {
          provinsi: "ACEH",
        },
        {
          provinsi: "NUSA TENGGARA BARAT",
        },
        {
          provinsi: "KEPULAUAN RIAU",
        },
        {
          provinsi: "JAMBI", 
        },
        {
          provinsi: "KALIMANTAN BARAT",
        },
        {
          provinsi: "KALIMANTAN SELATAN",
        },
        {
          provinsi: "NUSA TENGGARA TIMUR",
        },
        {
          provinsi: "SULAWESI UTARA",
        },
        {
          provinsi: "SULAWESI TENGGARA",
        },
        {
          provinsi: "SULAWESI TENGAH",
        },
        {
          provinsi: "KALIMANTAN TENGAH",
        },
        {
          provinsi: "BENGKULU",
        },
        {
          provinsi: "MALUKU",
        },
        {
          provinsi: "KEPULAUAN BANGKA BELITUNG",
        },
        {
          provinsi: "SULAWESI BARAT",
        },
        {
          provinsi: "GORONTALO",
        },
        {
          provinsi: "MALUKU UTARA",
        },
        {
          provinsi: "PAPUA",
        },
        {
          provinsi: "PAPUA BARAT",
        },
        {
          provinsi: "KALIMANTAN UTARA",
        },
      ],
    };
  },

  methods: {
    loadData() {
      const token = JSON.parse(localStorage.getItem("token"));
      axios
        .get("http://192.168.221.169:8000/kewirausahaan", {
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
    sortedData() {
      return this.dataKewirausahaan.sort((a, b) => b.jumlah - a.jumlah);
    },
  },
};
</script>
