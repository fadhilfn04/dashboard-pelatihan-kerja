<template>
  <div class="h-screen w-screen bg-brand-background">
    <div class="relative h-full w-full overflow-x-hidden">
      <div class="absolute top-0 left-0 right-0 h-96 bg-brand-blue-1"></div>
      <div
        class="absolute -top-20 -right-8 z-10 h-72 w-72 bg-contain bg-center bg-no-repeat"
        :style="{ 'background-image': 'url(' + imageUrl + ')' }"
      ></div>
      <div
        class="absolute top-44 right-52 z-10 h-40 w-40 bg-contain bg-center bg-no-repeat"
        :style="{ 'background-image': 'url(' + imageUrl + ')' }"
      ></div>
      <div
        class="absolute top-80 -left-8 z-10 h-24 w-24 bg-contain bg-center bg-no-repeat"
        :style="{ 'background-image': 'url(' + imageUrl + ')' }"
      ></div>
      <div class="absolute top-64 z-20 h-80 w-full px-16">
        <div class="w-full rounded-lg border border-gray-200 bg-white shadow">
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
                Peta Persebaran Tenaga Kerja Indonesia
              </h5>
            </a>
            <MapPelatihanKerja
              v-if="dataPolygon"
              :level="level"
              :center="center"
              :dataPolygon="dataPolygon"
              :zoom="zoom"
              @update-data="updateData"
            />
            <TheLegend
              v-if="dataPolygon"
              :level="level"
              :legends="legends"
              @update-data="updateData"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- <footer class="bg-brand-blue-1 py-3">
      <p class="text-sm text-white text-center">
        © 2023 | Pusat Data dan Teknologi Informasi Ketenagakerjaan, Kementrian
        Ketenagakerjaan Republik Indonesia
      </p>
    </footer> -->
  </div>
  <Modal size="2xl" v-if="isShowModal" @close="closeModal" class="z-20">
    <template #header>
      <div class="flex items-center text-lg">
        Detail Persebaran Tenaga Kerja
      </div>
    </template>
    <template #body>
      <div class="h-80 overflow-y-auto">
        <table class="w-full text-left text-sm text-gray-500">
          <thead class="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" class="px-2 py-3">Kecamatan</th>
              <th scope="col" class="px-2 py-3">Jumlah Tenaga Kerja</th>
              <th scope="col" class="px-2 py-3">Persentase</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-b bg-white"
              v-for="(city, index) in dataKecamatan"
              :key="index"
            >
              <td class="px-2 py-4">
                <a href="#" class="font-semibold text-brand-blue-1">{{
                  city.name
                }}</a>
              </td>
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
          class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Kembali
        </button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { Modal } from "flowbite-vue";
import MapPelatihanKerja from "./PetaPersebaran/MapPelatihanKerja.vue";
import TheLegend from "./PetaPersebaran/TheLegend.vue";
import { ref } from "vue";
import axios from "axios";

export default {
  name: "PetaPersebaranTenagaKerja",
  components: {
    Modal,
    MapPelatihanKerja,
    TheLegend,
  },
  data() {
    return {
      imageUrl: window.BASE_URL + "assets/images/bg-item.png",
      host: import.meta.env.VITE_API_URL,
      center: [-0.884123, 116.038462],
      api: "/provinsigis",
      dataPolygon: undefined,
      dataDaerah: undefined,
      legends: [],
      zoom: 5,
      level: 1,
      isKecamatan: false,
      dataKecamatan: undefined,
      kabKota: undefined,
    };
  },
  watch: {
    api(newApi) {
      this.fetchData();
    },
    dataDaerah(newDataDaerah) {
      this.processingData();
    },
    center(newCenter) {
      if (this.level == 1) {
        this.zoom = 5;
      } else if (this.level == 2) {
        this.zoom = 8;
      }
    },
    legends(newLegends) {
      this.dataDaerah.forEach((daerah) => {
        if (daerah.value >= 0 && daerah.value <= newLegends[0].legend) {
          daerah.color = newLegends[0].color;
        } else if (
          daerah.value > newLegends[0].legend &&
          daerah.value <= newLegends[1].legend
        ) {
          daerah.color = newLegends[1].color;
        } else if (
          daerah.value > newLegends[1].legend &&
          daerah.value <= newLegends[2].legend
        ) {
          daerah.color = newLegends[2].color;
        } else if (
          daerah.value > newLegends[2].legend &&
          daerah.value <= newLegends[3].legend
        ) {
          daerah.color = newLegends[3].color;
        } else if (
          daerah.value > newLegends[3].legend &&
          daerah.value <= newLegends[4].legend
        ) {
          daerah.color = newLegends[4].color;
        } else if (
          daerah.value > newLegends[4].legend &&
          daerah.value <= newLegends[5].legend
        ) {
          daerah.color = newLegends[5].color;
        } else if (
          daerah.value > newLegends[5].legend &&
          daerah.value <= newLegends[6].legend
        ) {
          daerah.color = newLegends[6].color;
        } else if (
          daerah.value > newLegends[6].legend &&
          daerah.value <= newLegends[7].legend
        ) {
          daerah.color = newLegends[7].color;
        } else if (
          daerah.value > newLegends[7].legend &&
          daerah.value <= newLegends[8].legend
        ) {
          daerah.color = newLegends[8].color;
        } else if (
          daerah.value > newLegends[8].legend &&
          daerah.value <= newLegends[9].legend
        ) {
          daerah.color = newLegends[9].color;
        }
      });
      this.dataPolygon = this.dataDaerah;
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const url = this.host + this.api;
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };
      if (this.level == 1 || this.level == 2) {
        axios.get(url, config).then((response) => {
          if (response.data) {
            var dataDetail = [];
            if (this.level == 1) {
              response.data.features.forEach((item) => {
                dataDetail.push({
                  name: item.properties.PROVINSI,
                  value: item.properties.TOTAL,
                  polygon: item.geometry.coordinates,
                  id: item.properties.ID,
                  color: "",
                });
              });
            } else if (this.level == 2) {
              response.data.features.forEach((item) => {
                dataDetail.push({
                  name: item.properties.KAB_KOTA,
                  value: item.properties.TOTAL,
                  polygon: item.geometry.coordinates,
                  id: item.properties.ID,
                  color: "",
                });
              });
            }
            this.dataDaerah = dataDetail;
          }
        });
      } else if (this.level == 3) {
        axios.get(url, config).then((response) => {
          if (response.data) {
            this.dataKecamatan = response.data;
          }
        });
        this.level = 2;
      }
      // fetch(this.api)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     var provinceData = [];
      //     data.features.forEach((item) => {
      //       provinceData.push({
      //         name: item.name,
      //         value: item.total,
      //         polygon: item.path,
      //         kabupatenKotaData: [],
      //         color: "",
      //       });
      //     });
      //     this.dataProvinsi = provinceData;
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
    },
    updateData(newData) {
      if (newData.isKecamatan) {
        this.isKecamatan = true;
      }

      this.api = newData.api;
      this.level = newData.level;
      this.center = newData.center;

      if (this.isKecamatan == true && this.level == 3) {
        this.showModal();
      }
    },
    generateGradientColors(max, interval) {
      this.legends = [];
      const startColor = "#06337A";
      const endColor = "#8a9fc0";

      const startR = parseInt(startColor.substring(1, 3), 16);
      const startG = parseInt(startColor.substring(3, 5), 16);
      const startB = parseInt(startColor.substring(5, 7), 16);

      const endR = parseInt(endColor.substring(1, 3), 16);
      const endG = parseInt(endColor.substring(3, 5), 16);
      const endB = parseInt(endColor.substring(5, 7), 16);

      let batasAtas = max;
      for (let i = 1; i <= 10; i++) {
        const factor = i / 9;
        const newR = Math.floor(startR + (endR - startR) * factor);
        const newG = Math.floor(startG + (endG - startG) * factor);
        const newB = Math.floor(startB + (endB - startB) * factor);

        const newColor = `#${this.componentToHex(newR)}${this.componentToHex(
          newG
        )}${this.componentToHex(newB)}`;
        if (i != 1) {
          batasAtas = batasAtas - interval;
        }
        const dataLegend = {
          legend: batasAtas,
          color: newColor,
        };

        this.legends.push(dataLegend);
      }
      this.legends.reverse();
    },
    componentToHex(c) {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    },
    processingData() {
      const data = this.dataDaerah;
      const max = Math.max(...data.map((item) => item.value));
      const min = 0;
      const interval = Math.floor((max - min) / 10);
      this.generateGradientColors(max, interval);
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
