<template>
    <div class="full-screen-loader backdrop-blur-sm">
        <div class="flex flex-col items-center justify-center space-y-4">
            <div class="relative">
                <div class="w-20 h-20 border-4 border-blue-200 rounded-full animate-spin"></div>
                <div class="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-brand-blue-1 rounded-full animate-spin"></div>
            </div>
            <div class="text-center">
                <h3 class="text-lg font-semibold text-brand-blue-1 mb-2">Memuat Data</h3>
                <p class="text-sm text-gray-600">Mohon tunggu sebentar...</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoadingSpinner',
};
</script>

<style scoped>
.full-screen-loader {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(4px);
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>