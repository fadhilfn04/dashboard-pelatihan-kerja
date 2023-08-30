<template>
  <highcharts
    :constructorType="'mapChart'"
    class="hc"
    :options="chartOptions"
    ref="chart"
  ></highcharts>

  <Modal size="2xl" v-if="isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">
        Detail Persebaran Tenaga Kerja Provinsi {{ province.name }}
      </div>
    </template>
    <template #body>
      <div class="h-80 overflow-y-auto">
        <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-2 py-3">Wilayah Kabupaten/Kota</th>
            <th scope="col" class="px-2 py-3">Jumlah Tenaga Kerja</th>
            <th scope="col" class="px-2 py-3">Persentase</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b"
            v-for="(city, index) in cityItems"
            :key="index"
          >
            <td class="px-2 py-4"><a href="#" class="text-brand-blue-1 font-semibold">{{ city.name }}</a></td>
            <td class="px-2 py-4">{{ city.jumlah }}</td>
            <td class="px-2 py-4">{{ city.persentase }}</td>
          </tr>
        </tbody>
      </table>
      </div> 
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          @click="closeModal"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Kembali
        </button>
      </div>
    </template>
  </Modal>
</template>

<script>
import indonesiaMap from "@highcharts/map-collection/countries/id/id-all.geo.json";
import axios from "axios";
import { Modal } from "flowbite-vue";
import { ref } from "vue";

export default {
  data() {
    return {
      items: [],
      chartOptions: {
        chart: {
          map: indonesiaMap,
        },
        title: {
          text: "",
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            alignTo: "spacingBox",
          },
        },
        colorAxis: {
          min: 0,
        },
        tooltip: {
          formatter: function () {
            const absoluteValue = Math.abs(this.point.value);
            const formatter = new Intl.NumberFormat('en-US');
            return '<b>' + this.series.name +'</b><br/>' +
                  this.point.name + ' : ' + formatter.format(absoluteValue);
          }
        },
        series: [
          {
            name: "Jumlah Tenaga Kerja",
            states: {
              hover: {
                color: "#BADA55",
              },
            },
            dataLabels: {
              enabled: true,
              format: "{point.name}",
            },
            allAreas: false,
            data: [],
            events: {
              click: function (event) {
                const provinceName = event.point.options;
                this.showProvinsi(provinceName);
              }.bind(this),
            },
          },
        ],
        credits: {
          enabled: false,
        },
      },
      province: null,
      cityItems: [],
    };
  },
  components: {
    Modal,
  },

  mounted() {
    this.loadData();
  },

  methods: {
    loadData() {
      const token = JSON.parse(localStorage.getItem("token"));
      axios
        .get(import.meta.env.VITE_API_URL + "/provinsi", {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          if (response.data.success) {
            const responseData = response.data.data;
            const mappedData = responseData.map((item) => {
              return {
                "hc-key": item.kd_maps,
                value: parseInt(item.total),
                id: item.id_provinsi,
                name: item.name,
              };
            });
            this.chartOptions.series[0].data = mappedData;
          }
        });
    },
    showProvinsi(prov) {
      this.province = prov;
      const token = JSON.parse(localStorage.getItem("token"));
      axios
        .get(import.meta.env.VITE_API_URL + "/provinsi/" + this.province.id, {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          this.cityItems = response.data.map((item) => {
            item.name = item.name;
            item.jumlah = item.jumlah.toLocaleString();
            item.persentase = item.persentase;
            return item;
          });
        });
      this.showModal();
    },
  },
  setup() {
    const isShowModal = ref(false);

    function closeModal() {
      isShowModal.value = false;
    }

    function showModal() {
      isShowModal.value = true;
    }

    return {
      isShowModal,
      closeModal,
      showModal,
    };
  },
};
</script>
