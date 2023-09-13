<template>
  <MapTenagaKerja
    v-if="dataMarker"
    :center="center"
    :dataMarker="dataMarker"
  />
</template>

<script>
import MapTenagaKerja from "./PetaPersebaran/MapTenagaKerja.vue";
import { Modal } from "flowbite-vue";
import axios from "axios";

export default {
  name: "PetaPersebaranGis",
  components: {
    MapTenagaKerja,
    Modal,
  },
  data() {
    return {
      imageUrl: window.BASE_URL + "assets/images/bg-item.png",
      host: import.meta.env.VITE_API_URL,
      center: [-0.884123, 116.038462],
      api: "/kabKota",
      dataMarker: undefined,
    };
  },
  props: {
    filter: {
      type: String,
      default: "/kabKota",
    },
  },
  methods: {
    async initMap() {
      const url = this.host + (this.filter || this.api);
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };
      axios.get(url, config).then((response) => {
        if (response.data) {
          var dataDetail = [];
          response.data.features.forEach((item) => {  
            dataDetail.push({
              lat: item.geometry.coordinates[0],
              lng: item.geometry.coordinates[1],
              id: item.properties.ID,
            });
          });
          this.dataMarker = dataDetail;
        }
      });
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>
