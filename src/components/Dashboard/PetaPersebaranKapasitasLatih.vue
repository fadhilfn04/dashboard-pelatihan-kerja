<template>
  <MapKapasitasLatih
    v-if="dataPolygon"
    :level="level"
    :center="center"
    :dataPolygon="dataPolygon"
    :zoom="zoom"
    @update-data="updateData"
  />
</template>

<script>
import MapKapasitasLatih from "./MapKapasitasLatih.vue";
import { ref } from "vue";
import { Modal } from "flowbite-vue";
import axios from "axios";

export default {
  name: "PetaPersebaranGis",
  components: {
    MapKapasitasLatih,
    Modal,
  },
  data() {
    return {
      imageUrl: window.BASE_URL + "assets/images/bg-item.png",
      host: import.meta.env.VITE_API_URL,
      center: [-0.884123, 116.038462],
      api: "/recap-capacity-ppk",
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
  props: {
    selectedYearSebaranKapasitasLatih: {
      type: Number,
      default: null,
    },
  },
  watch: {
    selectedYearSebaranKapasitasLatih(newYear) {
      this.updateApi(newYear);
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
    updateApi(newYear) {
      const currentYear = new Date().getFullYear();
      if (newYear) {
        this.api = `/recap-capacity-ppk-year/${newYear}`;
      } else {
        this.api = `/recap-capacity-ppk-year/${currentYear}`;
      }
      this.fetchData();
    },
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
                  accredited: item.properties.ACCREDITED,
                  not_accredited: item.properties.NOT_ACCREDITED,
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
            this.dataKecamatan = response.data;
          }
        });
        this.level = 2;
      }
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
      this.$emit('loading-complete', false);
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
