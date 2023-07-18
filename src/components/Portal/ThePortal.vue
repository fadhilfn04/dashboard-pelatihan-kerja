<template>
  <div class="grid grid-cols-3 gap-4">
    <PortalItem :link="{ url: '/dashboard', title: 'Dashboard' }" />
    <PortalItem :link="{ url: '/api-generator', title: 'API Generator' }" />
    <PortalItem
      :link="{ url: '/upload-management', title: 'Upload Management' }"
    />
  </div>
</template>

<script>
import PortalItem from "./PortalItem.vue";

export default {
  name: "ThePortal",
  components: {
    PortalItem,
  },
};
</script>
