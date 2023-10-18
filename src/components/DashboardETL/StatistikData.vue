<template>
  <highcharts :options="chartOptions" ref="pieChart"></highcharts>
</template>

<script>
import axios from "axios";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default {
  name: "StatistikData",
  data() {
    return {
      chartOptions: {
        chart: {
          type: "column",
        },
        title: {
          text: null,
        },
        xAxis: {
          categories: [
            "LPK SWASTA",
            "BLK KOMUNITAS",
            "BLKLN",
            "Lembaga Pelatihan K/L",
            "BLK UPTD",
            "BLK UPTP",
            "LPK PERUSAHAAN",
            "SKPD",
          ],
        },
        yAxis: {
          title: null,
          enabled: false,
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px"></span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{point.category}: </td>' +
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
            name: null,
            data: [],
            color: getRandomColor(),
            showInLegend: false,
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
        .get(import.meta.env.VITE_API_URL + "/total-recap-lpk", {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          if (response.data) {
            const data = [
              response.data.data.LPK_SWASTA,
              response.data.data.BLK_KOMUNITAS,
              response.data.data.BLKLN,
              response.data.data.LEMBAGA_PELATIHAN_KL,
              response.data.data.BLK_UPTD,
              response.data.data.BLK_UPTP,
              response.data.data.LPK_PERUSAHAAN,
              response.data.data.SKPD,
            ];

            this.chartOptions.series[0].data = data;
          }
        });
    },
  },
};
</script>
