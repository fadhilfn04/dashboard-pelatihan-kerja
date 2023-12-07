<template>
  <div class="flex justify-between">
    <PortalItem :link="{ url: '/', title: 'Dashboard' }" />
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
