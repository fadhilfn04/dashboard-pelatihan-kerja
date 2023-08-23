<script setup>
import { onMounted, ref } from "vue";
import { Dropdown } from "flowbite";
import axios from "axios";

const provinsiList = ref([]);

onMounted(async () => {
  const $targetEl = document.getElementById("dropdownMenu");
  const $triggerEl = document.getElementById("dropdownButton");

  const options = {
    placement: "left",
    offsetSkidding: 100,
    offsetDistance: 0,
  };

  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.get(
      import.meta.env.VITE_API_URL + '/list-provinsi',
      {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      }
    );

    if (response.data.success) {
      provinsiList.value = response.data.data;
    }
    if ($targetEl) {
      const dropdown = new Dropdown($targetEl, $triggerEl, options);
      // dropdown.show();
    }
  } catch (error) {}
});
</script>

<template>
  <div class="max-w-lg">
    <button
      id="dropdownButton"
      class="inline-flex items-center rounded-lg px-4 py-2 text-center text-sm font-medium text-brand-blue-2 hover:text-brand-blue-1 focus:outline-none focus:ring-blue-300"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="h-6 w-6"
      >
        <path
          fill-rule="evenodd"
          d="M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <!-- Dropdown menu -->
    <div
      id="dropdownMenu"
      class="z-10 hidden w-60 rounded-lg bg-white shadow dark:bg-gray-700"
    >
      <div class="p-3">
        <label for="input-group-search" class="sr-only">Search</label>
        <div class="relative">
          <div
            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
          >
            <svg
              class="h-5 w-5 text-gray-500"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="input-group-search"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Cari Provinsi"
          />
        </div>
      </div>
      <ul class="h-48 space-y-1 overflow-y-auto p-3 text-sm text-gray-700">
        <li>
          <div class="flex items-center rounded p-2 hover:bg-gray-100">
            <input
              checked
              id="all"
              type="radio"
              value="all"
              name="radioProvinsi"
              class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500"
              @change="emitEvent(0)"
            />
            <label
              for="default-radio-4"
              class="ml-2 w-full rounded text-sm font-medium text-gray-900"
              >NASIONAL</label
            >
          </div>
        </li>
        <li v-for="provinsi in provinsiList" :key="provinsi.id">
          <div class="flex items-center rounded p-2 hover:bg-gray-100">
            <input
              :id="provinsi.id"
              type="radio"
              :value="provinsi.id"
              name="radioProvinsi"
              class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500"
              @change="emitEvent(provinsi.id)"
            />
            <label
              for="default-radio-4"
              class="ml-2 w-full rounded text-sm font-medium text-gray-900"
              >{{ provinsi.nama_provinsi }}</label
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterProvinsi",
  props: {
    tipe: {
      type: String,
      default: null,
    },
  },
  methods: {
    emitEvent(id) {
      const data = {
        tipe: this.tipe,
        id: id,
      };
      this.$emit("provinsiChanged", data);
    },
  },
};
</script>