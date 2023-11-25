<template>
  <LoadingSpinner v-if="isLoading" />
  <particles></particles>
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
            {{ totalData }}
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
            {{ totalDataUnprocessed }}
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
            {{ totalDataProcessed }}
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
            {{ totalDataEliminated }}
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
            {{ totalDataDuplicated }}
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
                {{ totalData }}
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
                {{ totalData }}
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
                {{ totalDataUnprocessed }}
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
                {{ totalDataUnprocessed }}
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
                {{ totalDataProcessed }}
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
                {{ totalDataProcessed }}
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
                {{ totalDataEliminated }}
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
                {{ totalDataEliminated }}
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
                {{ totalDataDuplicated }}
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
                {{ totalDataDuplicated }}
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
      isLoading             : true,
      pageTitle             : "",
      totalData             : "",
      totalDataUnprocessed  : "",
      totalDataProcessed    : "",
      totalDataEliminated   : "",
      totalDataDuplicated   : "",
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
    async loadTotalData() {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      let url = "";
      if (this.pageTitle === "lembaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-institutions";
      } else if (this.pageTitle === "program-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-program";
      } else if (this.pageTitle === "tenaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-personnel";
      } else if (this.pageTitle === "peserta-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-participants";
      } else if (this.pageTitle === "penyelenggara-magang") {
        url = import.meta.env.VITE_API_URL + "/total-internship-organizers";
      } else if (this.pageTitle === "peserta-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprentices";
      } else if (this.pageTitle === "program-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprenticeship-programs";
      } else if (this.pageTitle === "instruktur") {
        url = import.meta.env.VITE_API_URL + "/total-instructors";
      }

      return axios.get(url, config).then((response) => {
        if (response.data.success && response.data.data > 0) {
          this.totalData = response.data.data.toLocaleString();
        } else {
          this.totalData = 0;
        }
      });
    },
    async loadTotalDataUnprocessed() {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      let url = "";
      if (this.pageTitle === "lembaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-institutions-unprocessed";
      } else if (this.pageTitle === "program-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-program-unprocessed";
      } else if (this.pageTitle === "tenaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-personnel-unprocessed";
      } else if (this.pageTitle === "peserta-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-participants-unprocessed";
      } else if (this.pageTitle === "penyelenggara-magang") {
        url = import.meta.env.VITE_API_URL + "/total-internship-organizers-unprocessed";
      } else if (this.pageTitle === "peserta-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprentices-unprocessed";
      } else if (this.pageTitle === "program-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprenticeship-programs-unprocessed";
      } else if (this.pageTitle === "instruktur") {
        url = import.meta.env.VITE_API_URL + "/total-instructors-unprocessed";
      }

      return axios.get(url, config).then((response) => {
        if (response.data.success && response.data.data > 0) {
          this.totalDataUnprocessed = response.data.data.toLocaleString();
        } else {
          this.totalDataUnprocessed = 0;
        }
      });
    },
    async loadTotalDataProcessed() {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      let url = "";
      if (this.pageTitle === "lembaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-institutions-processed";
      } else if (this.pageTitle === "program-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-program-processed";
      } else if (this.pageTitle === "tenaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-personnel-processed";
      } else if (this.pageTitle === "peserta-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-participants-processed";
      } else if (this.pageTitle === "penyelenggara-magang") {
        url = import.meta.env.VITE_API_URL + "/total-internship-organizers-processed";
      } else if (this.pageTitle === "peserta-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprentices-processed";
      } else if (this.pageTitle === "program-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprenticeship-programs-processed";
      } else if (this.pageTitle === "instruktur") {
        url = import.meta.env.VITE_API_URL + "/total-instructors-processed";
      }

      return axios.get(url, config).then((response) => {
        if (response.data.success && response.data.data > 0) {
          this.totalDataProcessed = response.data.data.toLocaleString();
        } else {
          this.totalDataProcessed = 0;
        }
      });
    },
    async loadTotalDataEliminated() {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      let url = "";
      if (this.pageTitle === "lembaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-institutions-eliminated";
      } else if (this.pageTitle === "program-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-program-eliminated";
      } else if (this.pageTitle === "tenaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-personnel-eliminated";
      } else if (this.pageTitle === "peserta-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-participants-eliminated";
      } else if (this.pageTitle === "penyelenggara-magang") {
        url = import.meta.env.VITE_API_URL + "/total-internship-organizers-eliminated";
      } else if (this.pageTitle === "peserta-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprentices-eliminated";
      } else if (this.pageTitle === "program-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprenticeship-programs-eliminated";
      } else if (this.pageTitle === "instruktur") {
        url = import.meta.env.VITE_API_URL + "/total-instructors-eliminated";
      }

      return axios.get(url, config).then((response) => {
        if (response.data.success && response.data.data > 0) {
          this.totalDataEliminated = response.data.data.toLocaleString();
        } else {
          this.totalDataEliminated = 0;
        }
      });
    },
    async loadTotalDataDuplicated() {
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      };

      let url = "";
      if (this.pageTitle === "lembaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-institutions-duplicated";
      } else if (this.pageTitle === "program-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-program-duplicated";
      } else if (this.pageTitle === "tenaga-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-personnel-duplicated";
      } else if (this.pageTitle === "peserta-pelatihan") {
        url = import.meta.env.VITE_API_URL + "/total-training-participants-duplicated";
      } else if (this.pageTitle === "penyelenggara-magang") {
        url = import.meta.env.VITE_API_URL + "/total-internship-organizers-duplicated";
      } else if (this.pageTitle === "peserta-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprentices-duplicated";
      } else if (this.pageTitle === "program-pemagangan") {
        url = import.meta.env.VITE_API_URL + "/total-apprenticeship-programs-duplicated";
      } else if (this.pageTitle === "instruktur") {
        url = import.meta.env.VITE_API_URL + "/total-instructors-duplicated";
      }

      return axios.get(url, config).then((response) => {
        if (response.data.success && response.data.data > 0) {
          this.totalDataDuplicated = response.data.data.toLocaleString();
        } else {
          this.totalDataDuplicated = 0;
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
      this.loadTotalData(),
      this.loadTotalDataUnprocessed(),
      this.loadTotalDataProcessed(),
      this.loadTotalDataEliminated(),
      this.loadTotalDataDuplicated(),
    ]).then(() => {
      this.isLoading = false;
    });
  },
};
</script>
