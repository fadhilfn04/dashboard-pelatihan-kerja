<template>
  <highcharts :options="chartOptions" ref="columnChart"></highcharts>
</template>

<script>
import axios from "axios";
import Highcharts from "highcharts";

export default {
  name: "ProduktifitasLapanganUsaha",
  data() {
    return {
      chartOptions: {
        title: {
          text: null,
        },
        xAxis: {
          categories: [],
          crosshair: true,
        },
        yAxis: {
          title: {
              text: '(Juta)'
          }
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
          valueSuffix: ' Juta',
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
            name: "A. Pertanian, Kehutanan, dan Perikanan",
            marker: {
              symbol: 'circle'
            },
          },
          {
            name: "B. Pertambangan dan Penggalian",
            marker: {
              symbol: 'circle'
            },
          },
          {
            name: "C. Industri Pengolahan",
            marker: {
              symbol: 'circle'
            },
          },
          {
            name: "D. Pengadaan Listrik dan Gas",
            marker: {
              symbol: 'circle'
            },
          },
          {
            name: "E. Pengadaan Air, Pengelolaan Sampah, Limbah dan Daur Ulang",
            marker: {
              symbol: 'circle'
            },
          },
          {
            name: "F. Konstruksi",
            marker: {
              symbol: 'circle'
            },
          },
          {
            name: "G. Perdagangan Besar dan Eceran; Reparasi Mobil dan Sepeda Motor",
            marker: {
              symbol: 'circle'
            },
          },
          {
            name: "H. Transportasi dan Pergudangan",
            marker: {
              symbol: 'circle'
            },
          },
          {
            name: "I. Penyediaan Akomodasi dan Makan Minum",
            marker: {
              symbol: 'circle'
            },
          },
          {
            name: "J. Informasi dan Komunikasi",
            marker: {
              symbol: 'circle'
            },
          },
          {
            name: "K. Jasa Keuangan dan Asuransi",
            marker: {
              symbol: 'circle'
            },
          },
          {
            name: "L. Real Estate",
            marker: {
              symbol: 'circle'
            },
          },
          {
            name: "M,N. Jasa Perusahaan",
            marker: {
              symbol: 'circle'
            },
          },
          {
            name: "O. Administrasi Pemerintahan, Pertahanan dan Jaminan Sosial Wajib",
            marker: {
              symbol: 'circle'
            },
          },
          {
            name: "P. Jasa Pendidikan",
            marker: {
              symbol: 'circle'
            },
          },
          {
            name: "Q. Jasa Kesehatan dan Kegiatan Sosial",
            marker: {
              symbol: 'circle'
            },
          },
          {
            name: "R,S,T,U. Jasa lainnya",
            marker: {
              symbol: 'circle'
            },
          },
        ],
        credits: {
          enabled: false,
        },
      },
      dataTren: [
        {
          categories: "2011",
        },
        {
          categories: "2012",
        },
        {
          categories: "2013",
        },
        {
          categories: "2014",
        },
        {
          categories: "2015",
        },
        {
          categories: "2016",
        },
        {
          categories: "2017",
        },
        {
          categories: "2018",
        },
        {
          categories: "2019",
        },
        {
          categories: "2020",
        },
        {
          categories: "2021",
        },
        {
          categories: "2022",
        },
      ],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      const token = JSON.parse(localStorage.getItem("token"));
      axios.get(import.meta.env.VITE_API_URL + "/recap-business-productivity", {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      })
      .then((response) => {
        if (response.data && response.data.data) {
          var categories      = [];

          this.dataTren.forEach((item) => {
            categories.push(item.categories);
          });

          this.chartOptions.xAxis.categories  = categories;
          this.chartOptions.series[0].data    = response.data.data.rekap_produktifitas.dataA.map((value) => parseFloat(value));
          this.chartOptions.series[1].data    = response.data.data.rekap_produktifitas.dataB.map((value) => parseFloat(value));
          this.chartOptions.series[2].data    = response.data.data.rekap_produktifitas.dataC.map((value) => parseFloat(value));
          this.chartOptions.series[3].data    = response.data.data.rekap_produktifitas.dataD.map((value) => parseFloat(value));
          this.chartOptions.series[4].data    = response.data.data.rekap_produktifitas.dataE.map((value) => parseFloat(value));
          this.chartOptions.series[5].data    = response.data.data.rekap_produktifitas.dataF.map((value) => parseFloat(value));
          this.chartOptions.series[6].data    = response.data.data.rekap_produktifitas.dataG.map((value) => parseFloat(value));
          this.chartOptions.series[7].data    = response.data.data.rekap_produktifitas.dataH.map((value) => parseFloat(value));
          this.chartOptions.series[8].data    = response.data.data.rekap_produktifitas.dataI.map((value) => parseFloat(value));
          this.chartOptions.series[9].data    = response.data.data.rekap_produktifitas.dataJ.map((value) => parseFloat(value));
          this.chartOptions.series[10].data    = response.data.data.rekap_produktifitas.dataK.map((value) => parseFloat(value));
          this.chartOptions.series[11].data    = response.data.data.rekap_produktifitas.dataL.map((value) => parseFloat(value));
          this.chartOptions.series[12].data    = response.data.data.rekap_produktifitas.dataMN.map((value) => parseFloat(value));
          this.chartOptions.series[13].data    = response.data.data.rekap_produktifitas.dataO.map((value) => parseFloat(value));
          this.chartOptions.series[14].data    = response.data.data.rekap_produktifitas.dataP.map((value) => parseFloat(value));
          this.chartOptions.series[15].data    = response.data.data.rekap_produktifitas.dataQ.map((value) => parseFloat(value));
          this.chartOptions.series[16].data    = response.data.data.rekap_produktifitas.dataRSTU.map((value) => parseFloat(value));
        }
      });
    },
  },
};
</script>
