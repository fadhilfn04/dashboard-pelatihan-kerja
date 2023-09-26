<template>
  <div class="w-screen h-screen bg-brand-background">
    <div class="relative w-full h-full overflow-x-hidden">
      <MainNav />
      <div class="absolute top-0 left-0 right-0 h-96 bg-brand-blue-1"></div>
      <div
        class="absolute -top-20 -right-8 w-72 h-72 z-10 bg-contain bg-no-repeat bg-center"
        :style="{ 'background-image': 'url(' + imageUrl + ')' }"
      ></div>
      <div
        class="absolute top-44 right-52 w-40 h-40 z-10 bg-contain bg-no-repeat bg-center"
        :style="{ 'background-image': 'url(' + imageUrl + ')' }"
      ></div>
      <div
        class="absolute top-80 -left-8 w-24 h-24 z-10 bg-contain bg-no-repeat bg-center"
        :style="{ 'background-image': 'url(' + imageUrl + ')' }"
      ></div>
      <div class="absolute px-16 z-20 w-full h-80 top-64">
        <ProfilPeserta />
      </div>
    </div>
  </div>
</template>

<script>
import MainNav from "@/components/Navigation/MainNav.vue";
import ProfilPeserta from "@/components/ProfilPeserta/ProfilPeserta.vue";

export default {
  name: "ProfilPesertaView",
  components: {
    MainNav,
    ProfilPeserta,
  },
  data() {
    return {
      imageUrl: window.BASE_URL + "assets/images/bg-item.png",
    };
  },
};
</script>
