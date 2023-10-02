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
    offsetSkidding: 50,
    offsetDistance: 0,
  };

  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.get(
      import.meta.env.VITE_API_URL + '/province-list',
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
              >{{ provinsi.name }}</label
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterProgramPelatihanProvinsi",
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
      this.$emit("provinsiProgramPelatihanChanged", data);
    },
  },
};
</script>