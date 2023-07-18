<template>
  <div class="w-full bg-white border border-gray-200 rounded-lg shadow">
    <div class="p-6 border-b-2">
      <h5 class="font-semibold text-lg">API Generator</h5>
    </div>
    <div class="p-6">
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">No</th>
              <th scope="col" class="px-6 py-3">Data</th>
              <th scope="col" class="px-6 py-3">Total API</th>
              <th scope="col" class="px-6 py-3">Created At</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">1</td>
              <td class="px-6 py-4">Penempatan</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white bg-brand-blue-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 mr-2 mb-2"
                  @click="showModal"
                >
                  1 End Point
                </button>
              </td>
              <td class="px-6 py-4">22 Januari 2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <Modal :size="xl" v-if="isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">Endpoint Penempatan</div>
    </template>
    <template #body>
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-2 py-3">No</th>
            <th scope="col" class="px-2 py-3">Tabel</th>
            <th scope="col" class="px-2 py-3">Url</th>
            <th scope="col" class="px-2 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-2 py-4">1</td>
            <td class="px-2 py-4">Penempatan</td>
            <td class="px-2 py-4">
              <a href="datamaster.kemnaker.go.id/penempatan"
                >datamaster.kemnaker.go.id/penempatan</a
              >
            </td>
            <td class="px-2 py-4">
              <button
                type="button"
                class="text-white bg-brand-blue-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 mr-2 mb-2"
              >
                Detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          @click="closeModal"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Close
        </button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { Modal } from "flowbite-vue";
import { ref } from "vue";

export default {
  name: "ApiGenerator",
  components: {
    Modal,
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
