<template>
  <div class="fixed h-[100vh] top-0 left-0 w-[315px] min-w-[215px] navbar bg-primary-100 text-gray-100">
    <div class="text-center py-3">
      <UiLogo class="ps-[20px] pt-[23px] pb-[36px]" />
    </div>
    <ul class="main-links">
      <NuxtLink
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.link"
        class="flex py-4 px-3 font-bold"
        active-class="bg-primary-300 mx-auto relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-[4px] after:h-full after:bg-white" 
      >
        {{ item.name }}
      </NuxtLink>
    </ul>
    <hr>
    <ul class="main-links">
      <li class="flex py-4 px-3">
        Settings
      </li>
      <li class="flex py-4 px-3">
        Logout
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const navItems = ref([
  {
    name: 'Dashboard',
    link: '/',
  },
  {
    name: 'Create Post',
    link: '/create',
  },
  {
    name: 'Manage Posts',
    link: '/manage',
  },
  {
    name: 'Categories',
    link: '/categories',
  }
]);
</script>
