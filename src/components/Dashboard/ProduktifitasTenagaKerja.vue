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
          type: "bar",
          zoomType: "y",
          scrollablePlotArea: {
            minHeight: 1000,
            scrollPositionX: 0,
          },
        },
        title: {
          text: null,
        },
        xAxis: {
          categories: [],
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
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name} (days): </td>' +
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
        legend: {
          symbolWidth: 10,
          symbolHeight: 10,
          symbolPadding: 5,
          symbolRadius: 0,
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
      dataKewirausahaan: [
        {
          provinsi: "JAWA BARAT",
          jumlah: 2567696,
        },
        {
          provinsi: "JAWA TENGAH",
          jumlah: 1722439,
        },
        {
          provinsi: "JAWA TIMUR",
          jumlah: 1524568,
        },
        {
          provinsi: "DKI JAKARTA",
          jumlah: 853374,
        },
        {
          provinsi: "BANTEN",
          jumlah: 522529,
        },
        {
          provinsi: "SUMATERA UTARA",
          jumlah: 486168,
        },
        {
          provinsi: "SULAWESEI SELATAN",
          jumlah: 334408,
        },
        {
          provinsi: "SUMATERA SELATAN",
          jumlah: 289991,
        },
        {
          provinsi: "LAMPUNG",
          jumlah: 257857,
        },
        {
          provinsi: "RIAU",
          jumlah: 238431,
        },
        {
          provinsi: "SUMATERA BARAT",
          jumlah: 224893,
        },
        {
          provinsi: "DAERAH ISTIMEWA YOGYAKARTA",
          jumlah: 209278,
        },
        {
          provinsi: "KALIMANTAN TIMUR",
          jumlah: 180038,
        },
        {
          provinsi: "BALI",
          jumlah: 168615,
        },
        {
          provinsi: "ACEH",
          jumlah: 152193,
        },
        {
          provinsi: "NUSA TENGGARA BARAT",
          jumlah: 149710,
        },
        {
          provinsi: "KEPULAUAN RIAU",
          jumlah: 139781,
        },
        {
          provinsi: "JAMBI",
          jumlah: 137040,
        },
        {
          provinsi: "KALIMANTAN BARAT",
          jumlah: 133157,
        },
        {
          provinsi: "KALIMANTAN SELATAN",
          jumlah: 130690,
        },
        {
          provinsi: "NUSA TENGGARA TIMUR",
          jumlah: 103081,
        },
        {
          provinsi: "SULAWESI UTARA",
          jumlah: 95263,
        },
        {
          provinsi: "SULAWESI TENGGARA",
          jumlah: 88596,
        },
        {
          provinsi: "SULAWESI TENGAH",
          jumlah: 87738,
        },
        {
          provinsi: "KALIMANTAN TENGAH",
          jumlah: 83334,
        },
        {
          provinsi: "BENGKULU",
          jumlah: 65759,
        },
        {
          provinsi: "MALUKU",
          jumlah: 53133,
        },
        {
          provinsi: "KEPULAUAN BANGKA BELITUNG",
          jumlah: 49008,
        },
        {
          provinsi: "SULAWESI BARAT",
          jumlah: 39656,
        },
        {
          provinsi: "GORONTALO",
          jumlah: 34660,
        },
        {
          provinsi: "MALUKU UTARA",
          jumlah: 30245,
        },
        {
          provinsi: "PAPUA",
          jumlah: 26563,
        },
        {
          provinsi: "PAPUA BARAT",
          jumlah: 20555,
        },
        {
          provinsi: "KALIMANTAN UTARA",
          jumlah: 8053,
        },
      ],
    };
  },
  mounted() {
    // this.loadData(); // uncomment this line to load data from API
    this.sortedData();
    var categories = [];
    var jumlah = [];
    this.dataKewirausahaan.forEach((item) => {
      categories.push(item.provinsi);
      jumlah.push(item.jumlah);
    });
    this.chartOptions.xAxis.categories = categories;
    this.chartOptions.series[0].data = jumlah;
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
