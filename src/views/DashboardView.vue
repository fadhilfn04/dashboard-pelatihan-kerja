<template>
  <div class="h-screen w-screen bg-brand-background">
    <div class="relative h-full w-full overflow-x-hidden">
      <MainNav />
      <div class="absolute top-0 left-0 right-0 h-96 bg-brand-blue-1"></div>
      <div
        class="absolute -top-20 -right-8 z-10 h-72 w-72 bg-contain bg-center bg-no-repeat"
        :style="{ 'background-image': 'url(' + imageUrl + ')' }"
      ></div>
      <div
        class="absolute top-44 right-52 z-10 h-40 w-40 bg-contain bg-center bg-no-repeat"
        :style="{ 'background-image': 'url(' + imageUrl + ')' }"
      ></div>
      <div
        class="absolute top-80 -left-8 z-10 h-24 w-24 bg-contain bg-center bg-no-repeat"
        :style="{ 'background-image': 'url(' + imageUrl + ')' }"
      ></div>
      <div class="absolute top-64 z-20 h-80 w-full px-16">
        <TheDashboard />
      </div>
    </div>
    <!-- <footer class="bg-brand-blue-1 py-3">
      <p class="text-sm text-white text-center">
        © 2023 | Pusat Data dan Teknologi Informasi Ketenagakerjaan, Kementrian
        Ketenagakerjaan Republik Indonesia
      </p>
    </footer> -->
  </div>
</template>

<script>
import MainNav from "@/components/Navigation/MainNav.vue";
import TheDashboard from "@/components/Dashboard/TheDashboard.vue";

export default {
  name: "Dashboard",
  components: {
    MainNav,
    TheDashboard,
  },
  data() {
    return {
      imageUrl: window.BASE_URL + "assets/images/bg-item.png",
    };
  },
};
</script>
