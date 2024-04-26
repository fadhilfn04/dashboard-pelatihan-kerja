<template>
  <particles></particles>
  <div class="w-full rounded-lg border border-gray-200 bg-white shadow">
    <div class="border-b-2 p-6">
      <h5 class="text-lg font-semibold">Log Aktifitas</h5>
    </div>
    <div class="p-6">
      <div class="relative overflow-x-auto mt-2">
        <a-table 
          :columns="activityLogColumns" 
          :dataSource="activityLog" 
          :pagination="pagination"
          bordered>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import Particles from '../Shared/Particles.vue';

export default {
  name: "TableLogAktifitas",
  data() {
    return {
      host: import.meta.env.VITE_API_URL,
      api: "/activity-log",
      activityLog : ref([]),
      activityLogColumns: [
        { title: 'URL Asal', dataIndex: 'from', key: 'from' },
        { title: 'URL Tujuan', dataIndex: 'to', key: 'to' },
        { title: 'Aksi Oleh', dataIndex: 'email', key: 'email' },
        { title: 'Dibuat Pada', dataIndex: 'created_at', key: 'created_at' },
      ],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
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
          this.activityLog = response.data.data;
        }
      });
    },
  },
};
</script>

