<script setup lang="ts">
const config = useRuntimeConfig();

onMounted(() => {
  console.log(config);
});
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
