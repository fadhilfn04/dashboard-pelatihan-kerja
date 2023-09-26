<template>
  <div class="w-full">
    <div class="bg-white shadow-md rounded-lg p-6">
      <h1 class="text-2xl font-semibold mb-4">Cari Profil Peserta</h1>
      <form @submit.prevent="searchProfile">
        <div class="flex justify-between">
          <input v-model="nik" placeholder="masukkan NIK" type="text" id="nik" name="nik" class="border rounded px-2 py-1 focus:outline-none focus:border-blue-400 w-full" />
          <button type="submit" class="bg-blue-500 text-white rounded px-4 py-1 ml-2 hover:bg-blue-600 transition">Cari</button>
        </div>
      </form>
      <div v-if="searchedProfile" class="mt-4">
        <h2 class="text-xl font-semibold">Profil Peserta:</h2>
        <div class="bg-gray-100 p-4 rounded mt-2">
          <p class="mb-2"><span class="font-semibold">NIK:</span> {{ searchedProfile.nik }}</p>
          <p><span class="font-semibold">Nama:</span> {{ searchedProfile.nama }}</p>
        </div>
        <h2 class="text-xl font-semibold mt-2">Daftar Program Pelatihan:</h2>
        <div class="bg-gray-100 p-4 rounded mt-2">
          <ul>
            <li v-for="(program, index) in searchedProfile.judul_program.split(',')" :key="index">
              <span class="font-semibold">{{ index + 1 }}.</span> {{ program }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Modal, Alert } from "flowbite-vue";
import { ref } from "vue";

export default {
  name: "ProfilPeserta",
  data() {
    return {
      SOURCE_DATA_PATH    : "/upload-management/source-data",
      FILE_PENDUKUNG_PATH : "/upload-management/file-pendukung",
      nik                 : "",
      nama                : "",
      searchedProfile     : null
    };
  },

  components: {
    Modal,
    Alert,
  },

  methods: {
    searchProfile() {
      const url = import.meta.env.VITE_API_URL + "/participant-profile/" + this.nik
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      if(this.nik != ""){
        axios.get(url, config).then((response) => {
          if(response.data.data.length > 0 && this.nik === response.data.data[0].nik){
            if (response.data) {
              const combinedJudulProgram = response.data.data
                .slice(0, 100)
                .map((item) => item.judul_program)
                .join(',');

              this.searchedProfile = {
                nik           : this.nik,
                nama          : response.data.data[0].nama_peserta,
                judul_program : combinedJudulProgram,
              };
            } else {
              console.log('empty data!')
            }
          } else {
            console.log('nik salah!')
          }
        });
      } else {
        console.log('data kosong')
      }
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
