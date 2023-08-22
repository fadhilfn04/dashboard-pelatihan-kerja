<template>
  <div class="w-full rounded-lg border border-gray-200 bg-white shadow">
    <div class="border-b-2 p-6 flex">
      <h5 class="text-lg font-semibold">Upload Management - File Pendukung</h5>
      <div class="flex-1"></div>
      <button
        type="button"
        class="rounded-lg bg-brand-blue-1 px-4 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
        @click="showModal"
      >
        Upload
      </button>
    </div>
    <div class="p-6">
      <div class="relative overflow-x-auto">
        <table class="w-full text-left text-sm text-gray-500">
          <thead class="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" class="px-6 py-3">No</th>
              <th scope="col" class="px-6 py-3">Nama File</th>
              <th scope="col" class="px-6 py-3">Size (KB)</th>
              <th scope="col" class="px-6 py-3">Tanggal Diupload</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800" v-for="(lfp, index) in listFilePendukung" :key="index">
              <td class="px-6 py-4">{{ index + 1 }}</td>
              <td class="px-6 py-4">
                <a :href="API_URL + DOWNLOAD_FILE_PENDUKUNG_ENDPOINT + '/' + lfp.filename" target="_blank" class="text-sm" style="background-color:white; border:none; color:dodgerblue;">{{ lfp.filename + '.' + lfp.extension }}</a>
              </td>
              <td class="px-6 py-4">{{ lfp.size }}</td>
              <td class="px-6 py-4">{{ lfp.uploaded_date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <Modal :size="xl" v-if="isShowModal" @close="closeModal">
      <template #header>
        <div class="flex items-center text-lg">Upload File Pendukung Source Master Data Pelatihan</div>
      </template>
      <template #body>
          <div id="alert-success-container" class="hidden">
            <Alert id="alert-success" type="success" class="mb-4" closable></Alert>
          </div>
          <div id="alert-fail-container" class="hidden">
            <Alert id="alert-fail" type="danger" class="mb-4" closable></Alert>
          </div>

          <span class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload file</span>
          <form id="form" @submit.prevent="importFilePendukung">
            <input id="file" class="block w-full text-sm border-[1px] border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file">

            <div class="flex justify-end mt-4">
              <button
                @click="importFilePendukung"
                type="button"
                class="ml-2 rounded-lg border border-gray-200 bg-brand-blue-1 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Import
              </button>
            </div>
          </form>
      </template>
  </Modal>
</template>

<script>
import { Modal, Alert } from "flowbite-vue";
import { ref } from "vue";
import axios from "axios";

export default {
  name: "UploadManagement",

  data() {
    return {
      API_URL: import.meta.env.VITE_API_URL,
      UPLOAD_FILE_PENDUKUNG_ENDPOINT: '/upload-file-pendukung',
      LIST_FILE_PENDUKUNG_ENDPOINT: '/list-file-pendukung',
      DOWNLOAD_FILE_PENDUKUNG_ENDPOINT: '/download-file-pendukung',
      listFilePendukung: null
    };
  },

  components: {
    Modal,
    Alert
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

  mounted() {
    this.loadData();
  },

  methods: {
    loadData() {
      const token = JSON.parse(localStorage.getItem("token"));
      
      axios.get(this.API_URL + this.LIST_FILE_PENDUKUNG_ENDPOINT, {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          if (response.data.is_success) {
            this.listFilePendukung = response.data.data;
          } else {
            this.$swal.fire ({
              title: response.data.message,
              icon: "error",
              showCancelButton: false,
              confirmButtonColor: "#3085d6",
              confirmButtonText: "Ya, saya mengerti.",
            })
          }
        });
    },
    
    importFilePendukung() {
      const token = JSON.parse(localStorage.getItem("token"));

      let uploadedFile  = document.getElementById('file').files[0]
      let ext =  uploadedFile.name.substr((uploadedFile.name.lastIndexOf('.') + 1));

      let alertDivContainer;
      let alertDiv;
      let alertDivMessage;

      if (ext == 'xlsx' || ext == 'xls') {
        axios.post(this.API_URL + this.UPLOAD_FILE_PENDUKUNG_ENDPOINT, {
          file: uploadedFile,
        }, {
          headers: {
            'Authorization': "Bearer " + token.value,
            'Content-Type': 'multipart/form-data'
          },
        })
        .then(response => {
          alertDivContainer = document.getElementById("alert-success-container");
          alertDiv = document.getElementById("alert-success");
          alertDivContainer.style.display = "block";
          alertDivMessage = alertDiv.getElementsByClassName("ml-3")[0];
          alertDivMessage.innerHTML = response.data.message;

          this.loadData();
          document.getElementById("form").reset();
        }).catch(response => {
          alertDivContainer = document.getElementById("alert-fail-container");
          alertDiv = document.getElementById("alert-fail");
          alertDivContainer.style.display = "block";
          alertDivMessage = alertDiv.getElementsByClassName("ml-3")[0];
          alertDivMessage.innerHTML = response.response.data.message;

          document.getElementById("form").reset();
        })
      }
      else {
        alertDivContainer = document.getElementById("alert-fail-container");
        alertDiv = document.getElementById("alert-fail");

        alertDivContainer.style.display = "block";
        alertDivMessage = alertDiv.getElementsByClassName("ml-3")[0];
        alertDivMessage.innerHTML = 'Maaf Anda hanya dapat mengupload file dengan tipe XLSX sesuai dengan template yang sudah disediakan';

        document.getElementById("form").reset();
      }
    }
  }
};
</script>
