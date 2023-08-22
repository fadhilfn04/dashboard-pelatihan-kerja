<template>
  <div class="mt-4 flex w-full flex-col px-32">
    <div class="mb-4 w-fit self-center">
      <!-- Breadcrumb -->
      <nav
        v-if="level == 2 || level == 3"
        class="flex w-fit rounded-lg border border-gray-200 bg-gray-50 px-5 py-1 text-gray-700 dark:border-gray-700 dark:bg-gray-800"
        aria-label="Breadcrumb"
      >
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <a
              href="#"
              :onclick="resetProvinsi"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Provinsi
            </a>
          </li>
          <li aria-current="page">
            <div class="flex items-center" v-if="level == 2 || level == 3">
              <svg
                aria-hidden="true"
                class="h-6 w-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ml-2"
                >Kabupaten atau Kota</span
              >
            </div>
          </li>
        </ol>
      </nav>
    </div>

    <div class="mb-4 flex w-full justify-evenly">
      <div
        v-for="(legend, index) in formattedLegends"
        :key="index"
        :style="{ backgroundColor: legend.color }"
        class="flex h-6 w-full items-center justify-end pr-2 text-end text-xs text-white"
      >
        {{ legend.legend }}
      </div>
    </div>
    <!-- <div class="flex w-full justify-between">
      <div
        v-for="(legend, index) in legends"
        :key="index"
        class="h-5 w-full text-end text-xs"
      >
        {{ legend.legend }}
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TheLegend",
  data() {
    return {
      baseColor: "#06337A",
      processedData: undefined,
      interval: 0,
      summaryNik: 0,
    };
  },
  props: ["level", "legends"],
  methods: {
    resetProvinsi() {
      const newData = {
        legend: true,
        api: "/provinsigis",
        level: 1,
        center: [-0.884123, 116.038462],
      };
      this.$emit("update-data", newData);
    },
    getSummaryNik() {
      const token = JSON.parse(localStorage.getItem("token"));
      axios
        .get(import.meta.env.VITE_API_URL + "/summary-nik", {
          headers: {
            Authorization: "Bearer " + token.value,
          },
        })
        .then((response) => {
          if (response.data) {
            this.summaryNik = response.data.data[0].total.toLocaleString();
          }
        });
    },
  },
  mounted() {
    this.getSummaryNik();
  },
  computed: {
    formattedLegends() {
      return this.legends.map((legend) => {
        if (typeof legend.legend === "number") {
          return {
            ...legend,
            legend: legend.legend.toLocaleString(),
          };
        }
        return legend;
      });
    },
  },
};
</script>
