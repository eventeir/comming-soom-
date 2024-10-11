<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
    <div class="text-center">
      <h1 class="text-5xl md:text-7xl font-bold mb-4 animate-pulse">Coming Soon</h1>
      <p class="text-xl md:text-2xl mb-8">Subscribe to our newsletter and get updated as we go!</p>
      <div class="flex space-x-4">
        <button @click="showModal = true" class="bg-white text-blue-600 hover:bg-gray-200 transition duration-300 py-2 px-4 rounded-md shadow-lg">
          Notify Me
        </button>
      </div>
    </div>
    <div class="absolute bottom-10">
      <p class="text-sm md:text-base">Stay tuned for updates!</p>
    </div>

    <!-- Modal Component -->
    <NotifyForm v-if="showModal" @close="showModal = false" />
  </div>
</template>

<script>
import NotifyForm from '@/components/NotifyForm.vue';

export default {
  components: {
    NotifyForm,
  },
  data() {
    return {
      showModal: false,
    };
  },
  head() {
    return {
      title: 'Coming Soon',
      meta: [
        { hid: 'description', name: 'description', content: 'Our website is coming soon!' },
      ],
    };
  },
};
</script>

<style scoped>
/* You can add additional custom styles here if needed */
</style>
