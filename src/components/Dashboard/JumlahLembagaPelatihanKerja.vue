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
            name: "LPK SWASTA",
            data: [],
          },
          {
            name: "BLK KOMUNITAS",
            data: [],
          },
          {
            name: "BLKLN",
            data: [],
          },
          {
            name: "Lembaga Pelatihan K/L",
            data: [],
          },
          {
            name: "BLK UPTD",
            data: [],
          },
          {
            name: "UPTP BPVP",
            data: [],
          },
          {
            name: "LPK PERUSAHAAN",
            data: [],
          },
          {
            name: "SKPD",
            data: [],
          },
        ],
        credits: {
          enabled: false,
        },
      },
    };
  },
  props: {
    filter: {
      type: String,
      default: '/total-recap-lpk',
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
            var LPK_SWASTA            = response.data.data.LPK_SWASTA;
            var BLK_KOMUNITAS         = response.data.data.BLK_KOMUNITAS;
            var BLKLN                 = response.data.data.BLKLN;
            var LEMBAGA_PELATIHAN_KL  = response.data.data.LEMBAGA_PELATIHAN_KL;
            var BLK_UPTD              = response.data.data.BLK_UPTD;
            var BLK_UPTP              = response.data.data.BLK_UPTP;
            var LPK_PERUSAHAAN        = response.data.data.LPK_PERUSAHAAN;
            var SKPD                  = response.data.data.SKPD;

            this.chartOptions.series[0].data = [LPK_SWASTA];
            this.chartOptions.series[1].data = [BLK_KOMUNITAS];
            this.chartOptions.series[2].data = [BLKLN];
            this.chartOptions.series[3].data = [LEMBAGA_PELATIHAN_KL];
            this.chartOptions.series[4].data = [BLK_UPTD];
            this.chartOptions.series[5].data = [BLK_UPTP];
            this.chartOptions.series[6].data = [LPK_PERUSAHAAN];
            this.chartOptions.series[7].data = [SKPD];
          }
        });
    },
  },
};
</script>
