<script setup lang="ts">
const config = useRuntimeConfig();
const { fetchChats } = useChats();
const { fetchProjects } = useProjects();
Promise.all([fetchChats(), fetchProjects()]);

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
