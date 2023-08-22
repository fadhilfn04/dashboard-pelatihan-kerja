<template>
  <div class="col-span-5 inline-flex p-4">
    <div class="text-center text-brand-blue-1">
      <img src="/assets/images/ion_man.png" alt="" class="mb-6" />
      <h5>{{ laki_laki_persentase }}%</h5>
      <h5>({{ laki_laki }} dari {{ total }} Tenaga Kerja)</h5>
    </div>
    <div class="text-center text-brand-pink-1">
      <img src="/assets/images/ion_woman.png" alt="" class="mb-6" />
      <h5>{{ perempuan_persentase }}%</h5>
      <h5>({{ perempuan }} dari {{ total }} Tenaga Kerja)</h5>
    </div>
  </div>
  <div class="col-span-7 w-full">
    <highcharts :options="chartOptions" ref="barChart"></highcharts>
  </div>
</template>

<script>
import axios from "axios";
import { numberFormat } from "highcharts";

const categories = [
  "15-19",
  "20-24",
  "25-29",
  "30-34",
  "35-40",
  "40-45",
  "45-49",
  "50-54",
  "55-59",
  "60+",
];

export default {
  data() {
    return {
      laki_laki: "",
      perempuan: "",
      laki_laki_persentase: 0,
      perempuan_persentase: 0,
      total :"",
      chartOptions: {
        chart: {
          type: "bar",
        },
        title: {
          text: null,
        },
        accessibility: {
          point: {
            valueDescriptionFormat: "{index}. Usia {xDescription}, {value}%.",
          },
        },
        legend: {
          verticalAlign: "top",
          layout: "horizontal",
          symbolWidth: 10,
          symbolHeight: 10,
          symbolPadding: 5,
          symbolRadius: 0,
        },
        xAxis: [
          {
            categories: categories,
            reversed: false,
            labels: {
              step: 1,
            },
            accessibility: {
              description: "Usia (Laki-laki)",
            },
          },
          {
            opposite: true,
            reversed: false,
            categories: categories,
            linkedTo: 0,
            labels: {
              step: 1,
            },
            accessibility: {
              description: "Usia (Perempuan)",
            },
          },
        ],
        yAxis: {
          title: {
            text: null,
          },
          visible: false,
        },

        plotOptions: {
          series: {
            stacking: "normal",
            pointPadding: 0.05,
            groupPadding: 0.1,
          },
        },

        tooltip: {
          formatter: function () {
            const absoluteValue = Math.abs(this.y);
            const formatter = new Intl.NumberFormat('en-US');
            return '<b>' + this.series.name + ' (' + this.point.category + ')' +'</b><br/>' +
                  'Jumlah: ' + formatter.format(absoluteValue);
          }
        },

        series: [
          {
            name: "Laki-Laki",
            data: [],
            color: "#06337A",
            dataLabels: {
              enabled: true,
              formatter: function () {
                const absoluteValue = Math.abs(this.y);
                const formatter = new Intl.NumberFormat('en-US');
                return formatter.format(absoluteValue);
              },
              align: "right",
              style: {
                fontSize: "12px",
              },

            },
          },
          {
            name: "Perempuan",
            data: [],
            color: "#E300B4",
            dataLabels: {
              enabled: true,
              formatter: function () {
                const absoluteValue = Math.abs(this.y);
                const formatter = new Intl.NumberFormat('en-US');
                return formatter.format(absoluteValue);
              },
              align: "left",
              style: {
                fontSize: "12px",
              },
            },
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
        .get(import.meta.env.VITE_API_URL + "/gender", {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          if (response.data) {
            this.chartOptions.series[0].data =
              response.data.by_age.laki_laki.map((value) => value * -1);
            this.chartOptions.series[1].data = response.data.by_age.perempuan;
            this.laki_laki = response.data.laki_laki;
            this.perempuan = response.data.perempuan;
            this.total = this.laki_laki + this.perempuan;
            this.laki_laki_persentase = ((this.laki_laki / this.total) * 100).toFixed(2);
            this.perempuan_persentase = ((this.perempuan / this.total) * 100).toFixed(2);
            this.laki_laki = this.laki_laki.toLocaleString();
            this.perempuan = this.perempuan.toLocaleString();
            this.total = this.total.toLocaleString();
          }
        });
    },
  },
};
</script>
