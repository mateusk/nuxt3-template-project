<script setup lang="ts">
  const clickCount = useState<number>('clickCount', () => 0)
  const clickHandler = () => {
    clickCount.value = clickCount.value + 1
  }
</script>

<template>
  <p>{{ clickCount }} clicks</p>
  <button @click="clickHandler">Click me</button>
</template>

<style scoped></style>
