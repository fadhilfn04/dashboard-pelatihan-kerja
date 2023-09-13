<template>
  <MapPelatihanKerja
    v-if="dataMarker"
    :center="center"
    :dataMarker="dataMarker"
  />
</template>

<script>
import MapPelatihanKerja from "./PetaPersebaran/MapPelatihanKerja.vue";
import { Modal } from "flowbite-vue";
import axios from "axios";

export default {
  name: "PetaPersebaranGis",
  components: {
    MapPelatihanKerja,
    Modal,
  },
  data() {
    return {
      imageUrl: window.BASE_URL + "assets/images/bg-item.png",
      host: import.meta.env.VITE_API_URL,
      center: [-0.884123, 116.038462],
      dataMarker: undefined,
    };
  },
  props: {
    filter: {
      type: String,
      default: "/kabKota",
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
      console.log(this.filter);
      axios.get(import.meta.env.VITE_API_URL + this.filter, {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      })
      .then((response) => {
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
};
</script>
