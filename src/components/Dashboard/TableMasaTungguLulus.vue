<template>
  <a-table 
    :columns="waitingPeriodGraduateColumns" 
    :dataSource="waitingPeriodGraduate" 
    :pagination="pagination"
    bordered>
  </a-table>
</template>

<script>
import axios from "axios";
import { Modal, Alert } from "flowbite-vue";
import { ref } from "vue";

export default {
  name: "TableMasaTungguLulus",
  data() {
    return {
      host: import.meta.env.VITE_API_URL,
      api: "/recap-waiting-period-graduate",
      waitingPeriodGraduate : ref([]),
      waitingPeriodGraduateColumns: [
        { title: 'Nama Kejuruan', dataIndex: 'nama_kejuruan', key: 'nama_kejuruan' },
        { title: 'Masa Tunggu 1-3 Bulan', dataIndex: 'masa_tunggu_pertama', key: 'masa_tunggu_pertama' },
        { title: 'Masa Tunggu 4-6 Bulan', dataIndex: 'masa_tunggu_kedua', key: 'masa_tunggu_kedua' },
        { title: 'Masa Tunggu 7-12 Bulan', dataIndex: 'masa_tunggu_ketiga', key: 'masa_tunggu_ketiga' },
        { title: 'Masa Tunggu Lebih dari 1 Tahun', dataIndex: 'masa_tunggu_keempat', key: 'masa_tunggu_keempat' },
      ],
    };
  },
  props: {
    selectedYearMasaTungguLulus: {
      type: Number,
      default: null,
    },
  },
  watch: {
    selectedYearMasaTungguLulus(newYear) {
      this.updateApi(newYear);
    },
  },
  components: {
    Modal,
    Alert,
  },

  mounted() {
    this.loadData();
  },

  methods: {
    updateApi(newYear) {
      if (newYear) {
        this.api = `/recap-waiting-period-graduate-year/${newYear}`;
      } else {
        this.api = "/recap-waiting-period-graduate";
      }
      this.loadData();
    },
    loadData() {
      const url = this.host + this.api;
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };
      axios.get(url, config).then((response) => {
        if (response.data) {
          this.waitingPeriodGraduate = response.data.data;
        }
      });
    },
  },
};
</script>