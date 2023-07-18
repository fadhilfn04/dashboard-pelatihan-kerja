<template>
  <div class="rounded-xl bg-white p-8">
    <h5 class="mb-8">
      Statistik Data
      <span :style="textColor">{{ statistik.category }}</span>
    </h5>
    <highcharts :options="chartOptions" ref="columnChart"></highcharts>
  </div>
</template>

<script>
import Highcharts, { numberFormat } from "highcharts";

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
          categories: [],
          crosshair: true,
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
            name: "Jumlah Data",
            data: [],
            color: "#4472C4",
          },
        ],
        credits: {
          enabled: false,
        },
      },
    };
  },
  props: {
    statistik: Object,
    order: Number,
    color: String,
  },
  mounted() {
    var categories = [];
    var jumlah = [];
    this.statistik.data.forEach((item) => {
      categories.push(item.source);
      jumlah.push(item.total);
    });

    this.chartOptions.xAxis.categories = categories;
    this.chartOptions.series[0].data = jumlah;
    this.chartOptions.series[0].color = this.color;
  },
  computed: {
    textColor() {
      return `color: ${this.color}`;
    },
  },
};
</script>
