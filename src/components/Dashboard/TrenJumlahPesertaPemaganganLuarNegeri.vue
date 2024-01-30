<template>
  <highcharts :options="chartOptions" ref="pieChart"></highcharts>
</template>

<script>
import axios from "axios";

export default {
  name: "TrenJumlahPesertaPemaganganLuarNegeri",
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'column'
        },
        title: {
          text: null
        },
        subtitle: {
          text: null
        },
        xAxis: {
          type: 'category',
          labels: {
            autoRotation: [-45, -90],
            style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
            }
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Jumlah (Data)'
          }
        },
        legend: {
          enabled: false
        },
        tooltip: {
          pointFormat: 'Jumlah in 2024: <b>{point.y:.1f} Data</b>'
        },
        credits: {
          enabled: false,
        },
        series: [
          {
            name: 'Population',
            colors: [
              '#9b20d9', '#9215ac', '#861ec9', '#7a17e6', '#7010f9', '#691af3',
              '#6225ed', '#5b30e7', '#533be1', '#4c46db', '#4551d5', '#3e5ccf',
              '#3667c9', '#2f72c3', '#277dbd', '#1f88b7', '#1693b1', '#0a9eaa',
              '#03c69b',  '#00f194'
            ],
            colorByPoint: true,
            groupPadding: 0,
            data: [
              ['Jan', 37.33],
              ['Feb', 31.18],
              ['Mar', 27.79],
              ['Apr', 22.23],
              ['Mei', 21.91],
              ['Jun', 21.74],
              ['Jul', 21.32],
              ['Agu', 20.89],
              ['Sept', 20.67],
              ['Okt', 19.11],
              ['Nov', 16.45],
            ],
            dataLabels: {
              enabled: true,
              rotation: -90,
              color: '#FFFFFF',
              align: 'right',
              format: '{point.y:.1f}',
              y: 10,
              style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
              }
            }
          }
        ]
      }
    };
  },

  mounted() {
    this.loadData();
  },

  methods: {
    loadData() {
      const token = JSON.parse(localStorage.getItem("token"));
      axios
        .get(import.meta.env.VITE_API_URL + '/recap-trends-number-apprentices-dagri', {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          console.log(response)
          // if (response.data) {
          //   var LPK_SWASTA            = response.data.data.LPK_SWASTA;
          //   var BLK_KOMUNITAS         = response.data.data.BLK_KOMUNITAS;
          //   var BLKLN                 = response.data.data.BLKLN;
          //   var LEMBAGA_PELATIHAN_KL  = response.data.data.LEMBAGA_PELATIHAN_KL;
          //   var BLK_UPTD              = response.data.data.BLK_UPTD;
          //   var BLK_UPTP              = response.data.data.BLK_UPTP;
          //   var LPK_PERUSAHAAN        = response.data.data.LPK_PERUSAHAAN;
          //   var SKPD                  = response.data.data.SKPD;

          //   this.chartOptions.series[0].data = [LPK_SWASTA];
          //   this.chartOptions.series[1].data = [BLK_KOMUNITAS];
          //   this.chartOptions.series[2].data = [BLKLN];
          //   this.chartOptions.series[3].data = [LEMBAGA_PELATIHAN_KL];
          //   this.chartOptions.series[4].data = [BLK_UPTD];
          //   this.chartOptions.series[5].data = [BLK_UPTP];
          //   this.chartOptions.series[6].data = [LPK_PERUSAHAAN];
          //   this.chartOptions.series[7].data = [SKPD];
          // }
        });
    },
  },
};
</script>
