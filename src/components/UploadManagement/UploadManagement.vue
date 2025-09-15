<template>
  <particles></particles>
  <div class="w-full rounded-lg border border-gray-200 bg-white shadow">
    <div class="border-b-2 p-6">
      <h5 class="text-lg font-semibold">Upload Management</h5>
    </div>
    <div class="p-6">
      <div class="relative overflow-x-auto">
        <table class="w-full text-left text-sm text-gray-500">
          <thead class="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th class="px-6 py-3">No</th>
              <th class="px-6 py-3">Nama</th>
              <th class="px-6 py-3">Jenis Sumber</th>
              <th class="px-6 py-3">Uploader</th>
              <th class="px-6 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in uploads"
              :key="index"
              class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <td class="px-6 py-4">{{ index + 1 }}</td>
              <td class="px-6 py-4">{{ item.nama }}</td>
              <td class="px-6 py-4">
                <span
                  class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                >
                  {{ item.jenis }}
                </span>
              </td>
              <td class="px-6 py-4">{{ item.uploader }}</td>
              <td>
                <RouterLink
                  :to="item.path"
                  type="button"
                  class="mr-2 mb-2 rounded-lg bg-brand-blue-1 px-4 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </RouterLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal, Alert } from "flowbite-vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Particles from "../Shared/Particles.vue";

export default {
  name: "UploadManagement",
  components: {
    Modal,
    Alert,
    RouterLink,
    Particles,
  },
  setup() {
    const uploads = ref([
      {
        nama: "Upload Source Master Data Pelatihan",
        jenis: "File Import",
        uploader: "Kemnaker",
        path: "/upload-management/source-data",
      },
      {
        nama: "Upload File Pendukung Source Master Data Pelatihan",
        jenis: "File Import",
        uploader: "Kemnaker",
        path: "/upload-management/file-pendukung",
      },
      {
        nama: "Upload Data Untuk Chart Tren Produktifitas Tenaga Kerja Berdasarkan Lapangan Usaha",
        jenis: "File Import",
        uploader: "Kemnaker",
        path: "/upload-management/chart-data",
      },
    ]);

    const isShowModal = ref(false);

    function closeModal() {
      isShowModal.value = false;
    }

    function showModal() {
      isShowModal.value = true;
    }

    return {
      uploads,
      isShowModal,
      closeModal,
      showModal,
    };
  },
};
</script>