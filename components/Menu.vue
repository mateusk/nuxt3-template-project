<script setup lang="ts"></script>

<template>
  <nav class="nav-container">
    <NuxtLink
      v-for="route in $router.options.routes"
      :key="route.path"
      :class="{ active: route.path === $router.currentRoute.value.path }"
      :to="route.path"
      >{{ route.name }}
    </NuxtLink>
  </nav>
</template>

<style scoped>
  .nav-container {
    padding: 20px;
  }
</style>
