<template>
  <MapLembagaPelatihanKerja
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

  <Modal size="5x1" v-if="isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">
        Detail Persebaran Lembaga Pelatihan Kerja
      </div>
    </template>
    <template #body>
      <div class="h-80 overflow-y-auto">
        <table class="w-full text-left text-sm text-gray-500">
          <thead class="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" class="px-2 py-3">Nama Lembaga</th>
              <th scope="col" class="px-2 py-3">Provinsi</th>
              <th scope="col" class="px-2 py-3">Kota/Kabupaten</th>
              <th scope="col" class="px-2 py-3">Alamat</th>
              <th scope="col" class="px-2 py-3">Email</th>
              <th scope="col" class="px-2 py-3">No. Telepon</th>
              <th scope="col" class="px-2 py-3">No. VIN</th>
              <th scope="col" class="px-2 py-3">Status Akreditasi</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-b bg-white"
              v-for="(lembagaPelatihan, index) in dataLembagaPelatihan"
              :key="index"
            >
              <td class="px-2 py-4">
                <a href="#" class="font-semibold text-brand-blue-1">{{
                  lembagaPelatihan.nama_lembaga
                }}</a>
              </td>
              <td class="px-2 py-4">{{ lembagaPelatihan.nama_provinsi }}</td>
              <td class="px-2 py-4">{{ lembagaPelatihan.nama_kab_kota }}</td>
              <td class="px-2 py-4">{{ lembagaPelatihan.alamat }}</td>
              <td class="px-2 py-4">{{ lembagaPelatihan.email }}</td>
              <td class="px-2 py-4">{{ lembagaPelatihan.no_telp }}</td>
              <td class="px-2 py-4">{{ lembagaPelatihan.vin }}</td>
              <td class="px-2 py-4">{{ lembagaPelatihan.status_akreditasi }}</td>
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
import MapLembagaPelatihanKerja from "./MapLembagaPelatihanKerja.vue";
import TheLegend from "./TheLegend.vue";
import { ref } from "vue";
import { Modal } from "flowbite-vue";
import axios from "axios";

export default {
  name: "PetaPersebaranLembagaPelatihanKerja",
  components: {
    MapLembagaPelatihanKerja,
    TheLegend,
    Modal,
  },
  data() {
    return {
      imageUrl: window.BASE_URL + "assets/images/bg-item.png",
      host: "https://matapvp-api.kemnaker.go.id",
      center: [-0.884123, 116.038462],
      api: "/province",
      dataPolygon: undefined,
      dataDaerah: undefined,
      legends: [],
      zoom: 5,
      level: 1,
      isLembagaPelatihan: false,
      dataLembagaPelatihan: undefined,
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
                  uuid: item.properties.UUID,
                  color: "",
                });
              });
            } else if (this.level == 2) {
              response.data.features.forEach((item) => {
                dataDetail.push({
                  name: item.properties.KAB_KOTA,
                  value: item.properties.TOTAL,
                  polygon: item.geometry.coordinates,
                  uuid: item.properties.UUID,
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
            this.dataLembagaPelatihan = response.data.data;
          }
        });
        this.level = 2;
      }
    },
    updateData(newData) {
      if (newData.isLembagaPelatihan) {
        this.isLembagaPelatihan = true;
      }

      this.api = newData.api;
      this.level = newData.level;
      this.center = newData.center;

      if (this.isLembagaPelatihan == true && this.level == 3) {
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
