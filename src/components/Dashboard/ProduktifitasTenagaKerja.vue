<template>
  <highcharts :options="chartOptions" ref="barChart"></highcharts>
</template>

<script>
import Highcharts from "highcharts";
import axios from "axios";

export default {
  name: "ProduktifitasTenagaKerja",
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
              color: "#4EE1AC",
              y: 50.00,
          },  {
              name: 'Tidak Bekerja',
              color: "#FF8181",
              y: 50.00
          }]
        }]
      },
      dataProduktifitas: [
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

  // methods: {
  //   loadData() {
  //     const token = JSON.parse(localStorage.getItem("token"));
  //     axios
  //       .get(import.meta.env.VITE_API_URL + "/kewirausahaan", {
  //         headers: {
  //           Authorization: "Bearer " + token.value,
  //         },
  //       })
  //       .then((response) => {
  //         if (response.data) {
  //           this.chartOptions.series[0].data = response.data.data;
  //         }
  //       });
  //   },
  //   sortedData() {
  //     return this.dataProduktifitas.sort((a, b) => b.jumlah - a.jumlah);
  //   },
  // },
};
</script>
