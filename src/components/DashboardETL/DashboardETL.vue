<template>
  <LoadingSpinner v-if="isLoading" />
  <particles></particles>

  <div class="d-flex justify-content-center mb-8">
      <button class="btn border border-gray-200 bg-blue-200 shadow">
        <h2>
          Dashboard ETL {{ pageTitle }}
        </h2>
          
      </button>
  </div>

  <div class="grid grid-cols-10 gap-8">
    <div class="col-span-2">
      <div class="w-full rounded-lg border border-gray-200 bg-green-200 shadow">
        <div class="p-4">
          <svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect>
              <path d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z" fill="#4caf50" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z" fill="#4caf50" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M34 27V31M37.4641 29L34 31M37.4641 33L34 31M34 35V31M30.5359 33L34 31M30.5359 29L34 31" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </svg>
          <h5 class="text-lg font-medium tracking-tight text-green-500">
            {{ totalDataEX + totalDataSK }}
          </h5>
          <h5 class="text-lg tracking-tight text-green-500">
            Data Total
          </h5>
        </div>
      </div>
    </div>

    <div class="col-span-2">
      <div class="w-full rounded-lg border border-gray-200 bg-yellow-200 shadow">
        <div class="p-4">
          <svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect>
              <path d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z" fill="#ffeb3b" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z" fill="#ffeb3b" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M38 31H34V27" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </svg>
          <h5 class="text-lg font-medium tracking-tight text-yellow-500">
            {{ totalDataEXUnprocessed + totalDataSKUnprocessed }}
          </h5>
          <h5 class="text-lg tracking-tight text-yellow-500">
            Data Belum Diproses
          </h5>
        </div>
      </div>
    </div>

    <div class="col-span-2">
      <div class="w-full rounded-lg border border-gray-200 bg-blue-200 shadow">
        <div class="p-4">
          <svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect>
              <path d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z" fill="#2196F3" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z" fill="#2196F3" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M38.5 29L33 34.5L30 31.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </svg>
          <h5 class="text-lg font-medium tracking-tight text-blue-500">
            {{ totalDataEXProcessed + totalDataSKProcessed }}
          </h5>
          <h5 class="text-lg tracking-tight text-blue-500">
            Data Berhasil Diproses
          </h5>
        </div>
      </div>
    </div>

    <div class="col-span-2">
      <div class="w-full rounded-lg border border-gray-200 bg-red-200 shadow">
        <div class="p-4">
          <svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect>
              <path d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z" fill="#F44336" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z" fill="#F44336" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M37 34L34 31M34 31L37 28M34 31L31 28M34 31L31 34" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </svg>
          <h5 class="text-lg font-medium tracking-tight text-red-500">
            {{ totalDataEXEliminated + totalDataSKEliminated }}
          </h5>
          <h5 class="text-lg tracking-tight text-red-500">
            Data Tereliminasi
          </h5>
        </div>
      </div>
    </div>

    <div class="col-span-2">
      <div class="w-full rounded-lg border border-gray-200 bg-orange-200 shadow">
        <div class="p-4">
          <svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect>
              <path d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z" fill="#FFCC80" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z" fill="#FFCC80" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M34 26V30" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M34 35V36" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </svg>
          <h5 class="text-lg font-medium tracking-tight text-orange-500">
            {{ totalDataEXDuplicated + totalDataSKDuplicated }}
          </h5>
          <h5 class="text-lg tracking-tight text-orange-500">
            Data Duplikasi
          </h5>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-10 gap-8">
    <div class="col-span-2">
      <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-4">
          <h5 class="text-lg font-medium tracking-tight text-green-500">
            Detail Data
          </h5>
          <div class="d-flex align-items-center mt-4">
            <div class="mr-3">
              <span class="inline-flex items-center rounded-md bg-green-200 font-medium text-green-500 px-2.5 py-2.5">EX</span>
            </div>
            <div class="d-flex flex-column">
              <h5 class="text-lg font-medium tracking-tight text-green-500">
                {{ totalDataEX }}
              </h5>
              <h5 class="text-lg tracking-tight text-green-500">
                Excel
              </h5>
            </div>
          </div>
          <div class="d-flex align-items-center mt-3">
            <div class="mr-3">
              <span class="inline-flex items-center rounded-md bg-green-200 font-medium text-green-500 px-2.5 py-2.5">SK</span>
            </div>
            <div class="d-flex flex-column">
              <h5 class="text-lg font-medium tracking-tight text-green-500">
                {{ totalDataSK }}
              </h5>
              <h5 class="text-lg tracking-tight text-green-500">
                Siap Kerja
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-span-2">
      <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-4">
          <h5 class="text-lg font-medium tracking-tight text-yellow-500">
            Detail Data
          </h5>
          <div class="d-flex align-items-center mt-4">
            <div class="mr-3">
              <span class="inline-flex items-center rounded-md bg-yellow-200 font-medium text-yellow-500 px-2.5 py-2.5">EX</span>
            </div>
            <div class="d-flex flex-column">
              <h5 class="text-lg font-medium tracking-tight text-yellow-500">
                {{ totalDataEXUnprocessed }}
              </h5>
              <h5 class="text-lg tracking-tight text-yellow-500">
                Excel
              </h5>
            </div>
          </div>
          <div class="d-flex align-items-center mt-3">
            <div class="mr-3">
              <span class="inline-flex items-center rounded-md bg-yellow-200 font-medium text-yellow-500 px-2.5 py-2.5">SK</span>
            </div>
            <div class="d-flex flex-column">
              <h5 class="text-lg font-medium tracking-tight text-yellow-500">
                {{ totalDataSKUnprocessed }}
              </h5>
              <h5 class="text-lg tracking-tight text-yellow-500">
                Siap Kerja
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-span-2">
      <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-4">
          <h5 class="text-lg font-medium tracking-tight text-blue-500">
            Detail Data
          </h5>
          <div class="d-flex align-items-center mt-4">
            <div class="mr-3">
              <span class="inline-flex items-center rounded-md bg-blue-200 font-medium text-blue-500 px-2.5 py-2.5">EX</span>
            </div>
            <div class="d-flex flex-column">
              <h5 class="text-lg font-medium tracking-tight text-blue-500">
                {{ totalDataEXProcessed }}
              </h5>
              <h5 class="text-lg tracking-tight text-blue-500">
                Excel
              </h5>
            </div>
          </div>
          <div class="d-flex align-items-center mt-3">
            <div class="mr-3">
              <span class="inline-flex items-center rounded-md bg-blue-200 font-medium text-blue-500 px-2.5 py-2.5">SK</span>
            </div>
            <div class="d-flex flex-column">
              <h5 class="text-lg font-medium tracking-tight text-blue-500">
                {{ totalDataSKProcessed }}
              </h5>
              <h5 class="text-lg tracking-tight text-blue-500">
                Siap Kerja
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-span-2">
      <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-4">
          <h5 class="text-lg font-medium tracking-tight text-red-500">
            Detail Data
          </h5>
          <div class="d-flex align-items-center mt-4">
            <div class="mr-3">
              <span class="inline-flex items-center rounded-md bg-red-200 font-medium text-red-500 px-2.5 py-2.5">EX</span>
            </div>
            <div class="d-flex flex-column">
              <h5 class="text-lg font-medium tracking-tight text-red-500">
                {{ totalDataEXEliminated }}
              </h5>
              <h5 class="text-lg tracking-tight text-red-500">
                Excel
              </h5>
            </div>
          </div>
          <div class="d-flex align-items-center mt-3">
            <div class="mr-3">
              <span class="inline-flex items-center rounded-md bg-red-200 font-medium text-red-500 px-2.5 py-2.5">SK</span>
            </div>
            <div class="d-flex flex-column">
              <h5 class="text-lg font-medium tracking-tight text-red-500">
                {{ totalDataSKEliminated }}
              </h5>
              <h5 class="text-lg tracking-tight text-red-500">
                Siap Kerja
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-span-2">
      <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-4">
          <h5 class="text-lg font-medium tracking-tight text-orange-500">
            Detail Data
          </h5>
          <div class="d-flex align-items-center mt-4">
            <div class="mr-3">
              <span class="inline-flex items-center rounded-md bg-orange-200 font-medium text-orange-500 px-2.5 py-2.5">EX</span>
            </div>
            <div class="d-flex flex-column">
              <h5 class="text-lg font-medium tracking-tight text-orange-500">
                {{ totalDataEXDuplicated }}
              </h5>
              <h5 class="text-lg tracking-tight text-orange-500">
                Excel
              </h5>
            </div>
          </div>
          <div class="d-flex align-items-center mt-3">
            <div class="mr-3">
              <span class="inline-flex items-center rounded-md bg-orange-200 font-medium text-orange-500 px-2.5 py-2.5">SK</span>
            </div>
            <div class="d-flex flex-column">
              <h5 class="text-lg font-medium tracking-tight text-orange-500">
                {{ totalDataSKDuplicated }}
              </h5>
              <h5 class="text-lg tracking-tight text-orange-500">
                Siap Kerja
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-4 gap-8">
    <div class="col-span-4">
      <div class="mt-8 w-full rounded-lg border border-gray-200 bg-white shadow">
        <div class="p-4">
          <h5 class="mb-5 text-lg font-medium tracking-tight text-gray-900">
            Statistik Data
          </h5>
          <StatistikData />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import StatistikData from "./StatistikData.vue";
import Particles from '../Shared/Particles.vue';
import LoadingSpinner from '@/components/Shared/LoadingSpinner.vue';

export default {
  name: "DashboardETL",
  data() {
    return {
      isLoading               : true,
      pageTitle               : "",

      totalDataEX             : "",
      totalDataEXUnprocessed  : "",
      totalDataEXProcessed    : "",
      totalDataEXEliminated   : "",
      totalDataEXDuplicated   : "",
      
      totalDataSK             : "",
      totalDataSKUnprocessed  : "",
      totalDataSKProcessed    : "",
      totalDataSKEliminated   : "",
      totalDataSKDuplicated   : "",
    };
  },
  created() {
    this.pageTitle = this.$route.params.title;
  },
  components: {
    StatistikData,
    Particles,
    LoadingSpinner,
  },
  methods: {
    //EXCEL
    async loadTotalDataEX() {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      let url = "";
      if (this.pageTitle === "lembaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-institutions-ex";
      } else if (this.pageTitle === "program-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-program-ex";
      } else if (this.pageTitle === "tenaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-personnel-ex";
      } else if (this.pageTitle === "peserta-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-participants-ex";
      } else if (this.pageTitle === "penyelenggara-magang") {
        url = import.meta.env.VITE_API_URL + "/total-internship-organizers-ex";
      } else if (this.pageTitle === "peserta-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprentices-ex";
      } else if (this.pageTitle === "program-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprenticeship-programs-ex";
      } else if (this.pageTitle === "instruktur") {
        url = import.meta.env.VITE_API_URL + "/total-instructors-ex";
      }

      return axios.get(url, config).then((response) => {
        if (response.data.success && response.data.data > 0) {
          this.totalDataEX = response.data.data;
        } else {
          this.totalDataEX = 0;
        }
      });
    },
    async loadTotalDataEXUnprocessed() {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      let url = "";
      if (this.pageTitle === "lembaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-institutions-ex-unprocessed";
      } else if (this.pageTitle === "program-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-program-ex-unprocessed";
      } else if (this.pageTitle === "tenaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-personnel-ex-unprocessed";
      } else if (this.pageTitle === "peserta-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-participants-ex-unprocessed";
      } else if (this.pageTitle === "penyelenggara-magang") {
        url = import.meta.env.VITE_API_URL + "/total-internship-organizers-ex-unprocessed";
      } else if (this.pageTitle === "peserta-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprentices-ex-unprocessed";
      } else if (this.pageTitle === "program-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprenticeship-programs-ex-unprocessed";
      } else if (this.pageTitle === "instruktur") {
        url = import.meta.env.VITE_API_URL + "/total-instructors-ex-unprocessed";
      }

      return axios.get(url, config).then((response) => {
        if (response.data.success && response.data.data > 0) {
          this.totalDataEXUnprocessed = response.data.data;
        } else {
          this.totalDataEXUnprocessed = 0;
        }
      });
    },
    async loadTotalDataEXProcessed() {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      let url = "";
      if (this.pageTitle === "lembaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-institutions-ex-processed";
      } else if (this.pageTitle === "program-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-program-ex-processed";
      } else if (this.pageTitle === "tenaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-personnel-ex-processed";
      } else if (this.pageTitle === "peserta-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-participants-ex-processed";
      } else if (this.pageTitle === "penyelenggara-magang") {
        url = import.meta.env.VITE_API_URL + "/total-internship-organizers-ex-processed";
      } else if (this.pageTitle === "peserta-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprentices-ex-processed";
      } else if (this.pageTitle === "program-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprenticeship-programs-ex-processed";
      } else if (this.pageTitle === "instruktur") {
        url = import.meta.env.VITE_API_URL + "/total-instructors-ex-processed";
      }

      return axios.get(url, config).then((response) => {
        if (response.data.success && response.data.data > 0) {
          this.totalDataEXProcessed = response.data.data;
        } else {
          this.totalDataEXProcessed = 0;
        }
      });
    },
    async loadTotalDataEXEliminated() {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      let url = "";
      if (this.pageTitle === "lembaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-institutions-ex-eliminated";
      } else if (this.pageTitle === "program-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-program-ex-eliminated";
      } else if (this.pageTitle === "tenaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-personnel-ex-eliminated";
      } else if (this.pageTitle === "peserta-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-participants-ex-eliminated";
      } else if (this.pageTitle === "penyelenggara-magang") {
        url = import.meta.env.VITE_API_URL + "/total-internship-organizers-ex-eliminated";
      } else if (this.pageTitle === "peserta-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprentices-ex-eliminated";
      } else if (this.pageTitle === "program-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprenticeship-programs-ex-eliminated";
      } else if (this.pageTitle === "instruktur") {
        url = import.meta.env.VITE_API_URL + "/total-instructors-ex-eliminated";
      }

      return axios.get(url, config).then((response) => {
        if (response.data.success && response.data.data > 0) {
          this.totalDataEXEliminated = response.data.data;
        } else {
          this.totalDataEXEliminated = 0;
        }
      });
    },
    async loadTotalDataEXDuplicated() {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      let url = "";
      if (this.pageTitle === "lembaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-institutions-ex-duplicated";
      } else if (this.pageTitle === "program-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-program-ex-duplicated";
      } else if (this.pageTitle === "tenaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-personnel-ex-duplicated";
      } else if (this.pageTitle === "peserta-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-participants-ex-duplicated";
      } else if (this.pageTitle === "penyelenggara-magang") {
        url = import.meta.env.VITE_API_URL + "/total-internship-organizers-ex-duplicated";
      } else if (this.pageTitle === "peserta-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprentices-ex-duplicated";
      } else if (this.pageTitle === "program-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprenticeship-programs-ex-duplicated";
      } else if (this.pageTitle === "instruktur") {
        url = import.meta.env.VITE_API_URL + "/total-instructors-ex-duplicated";
      }

      return axios.get(url, config).then((response) => {
        if (response.data.success && response.data.data > 0) {
          this.totalDataEXDuplicated = response.data.data;
        } else {
          this.totalDataEXDuplicated = 0;
        }
      });
    },

    //SIAP KERJA
    async loadTotalDataSK() {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      let url = "";
      if (this.pageTitle === "lembaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-institutions-sk";
      } else if (this.pageTitle === "program-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-program-sk";
      } else if (this.pageTitle === "tenaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-personnel-sk";
      } else if (this.pageTitle === "peserta-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-participants-sk";
      } else if (this.pageTitle === "penyelenggara-magang") {
        url = import.meta.env.VITE_API_URL + "/total-internship-organizers-sk";
      } else if (this.pageTitle === "peserta-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprentices-sk";
      } else if (this.pageTitle === "program-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprenticeship-programs-sk";
      } else if (this.pageTitle === "instruktur") {
        url = import.meta.env.VITE_API_URL + "/total-instructors-sk";
      }

      return axios.get(url, config).then((response) => {
        if (response.data.success && response.data.data > 0) {
          this.totalDataSK = response.data.data;
        } else {
          this.totalDataSK = 0;
        }
      });
    },
    async loadTotalDataSKUnprocessed() {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      let url = "";
      if (this.pageTitle === "lembaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-institutions-sk-unprocessed";
      } else if (this.pageTitle === "program-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-program-sk-unprocessed";
      } else if (this.pageTitle === "tenaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-personnel-sk-unprocessed";
      } else if (this.pageTitle === "peserta-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-participants-sk-unprocessed";
      } else if (this.pageTitle === "penyelenggara-magang") {
        url = import.meta.env.VITE_API_URL + "/total-internship-organizers-sk-unprocessed";
      } else if (this.pageTitle === "peserta-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprentices-sk-unprocessed";
      } else if (this.pageTitle === "program-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprenticeship-programs-sk-unprocessed";
      } else if (this.pageTitle === "instruktur") {
        url = import.meta.env.VITE_API_URL + "/total-instructors-sk-unprocessed";
      }

      return axios.get(url, config).then((response) => {
        if (response.data.success && response.data.data > 0) {
          this.totalDataSKUnprocessed = response.data.data;
        } else {
          this.totalDataSKUnprocessed = 0;
        }
      });
    },
    async loadTotalDataSKProcessed() {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      let url = "";
      if (this.pageTitle === "lembaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-institutions-sk-processed";
      } else if (this.pageTitle === "program-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-program-sk-processed";
      } else if (this.pageTitle === "tenaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-personnel-sk-processed";
      } else if (this.pageTitle === "peserta-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-participants-sk-processed";
      } else if (this.pageTitle === "penyelenggara-magang") {
        url = import.meta.env.VITE_API_URL + "/total-internship-organizers-sk-processed";
      } else if (this.pageTitle === "peserta-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprentices-sk-processed";
      } else if (this.pageTitle === "program-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprenticeship-programs-sk-processed";
      } else if (this.pageTitle === "instruktur") {
        url = import.meta.env.VITE_API_URL + "/total-instructors-sk-processed";
      }

      return axios.get(url, config).then((response) => {
        if (response.data.success && response.data.data > 0) {
          this.totalDataSKProcessed = response.data.data;
        } else {
          this.totalDataSKProcessed = 0;
        }
      });
    },
    async loadTotalDataSKEliminated() {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      let url = "";
      if (this.pageTitle === "lembaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-institutions-sk-eliminated";
      } else if (this.pageTitle === "program-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-program-sk-eliminated";
      } else if (this.pageTitle === "tenaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-personnel-sk-eliminated";
      } else if (this.pageTitle === "peserta-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-participants-sk-eliminated";
      } else if (this.pageTitle === "penyelenggara-magang") {
        url = import.meta.env.VITE_API_URL + "/total-internship-organizers-sk-eliminated";
      } else if (this.pageTitle === "peserta-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprentices-sk-eliminated";
      } else if (this.pageTitle === "program-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprenticeship-programs-sk-eliminated";
      } else if (this.pageTitle === "instruktur") {
        url = import.meta.env.VITE_API_URL + "/total-instructors-sk-eliminated";
      }

      return axios.get(url, config).then((response) => {
        if (response.data.success && response.data.data > 0) {
          this.totalDataSKEliminated = response.data.data;
        } else {
          this.totalDataSKEliminated = 0;
        }
      });
    },
    async loadTotalDataSKDuplicated() {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      let url = "";
      if (this.pageTitle === "lembaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-institutions-sk-duplicated";
      } else if (this.pageTitle === "program-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-program-sk-duplicated";
      } else if (this.pageTitle === "tenaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-personnel-sk-duplicated";
      } else if (this.pageTitle === "peserta-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-participants-sk-duplicated";
      } else if (this.pageTitle === "penyelenggara-magang") {
        url = import.meta.env.VITE_API_URL + "/total-internship-organizers-sk-duplicated";
      } else if (this.pageTitle === "peserta-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprentices-sk-duplicated";
      } else if (this.pageTitle === "program-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprenticeship-programs-sk-duplicated";
      } else if (this.pageTitle === "instruktur") {
        url = import.meta.env.VITE_API_URL + "/total-instructors-sk-duplicated";
      }

      return axios.get(url, config).then((response) => {
        if (response.data.success && response.data.data > 0) {
          this.totalDataSKDuplicated = response.data.data;
        } else {
          this.totalDataSKDuplicated = 0;
        }
      });
    },
  },
  watch: {
    $route(to, from) {
      window.location.reload();
    },
  },
  mounted() {
    Promise.all([
      
      //EXCEL
      this.loadTotalDataEX(),
      this.loadTotalDataEXUnprocessed(),
      this.loadTotalDataEXProcessed(),
      this.loadTotalDataEXEliminated(),
      this.loadTotalDataEXDuplicated(),

      //SIAP KERJA
      this.loadTotalDataSK(),
      this.loadTotalDataSKUnprocessed(),
      this.loadTotalDataSKProcessed(),
      this.loadTotalDataSKEliminated(),
      this.loadTotalDataSKDuplicated(),
    ]).then(() => {
      this.isLoading = false;
    });
  },
};
</script>
