<script setup>
const { count } = useSavedMealsStore();
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <div class="fixed bottom-20 right-10 bg-linear-to-r to-blue-600 from-blue-700 px-3 py-1 rounded-md font-semibold flex justify-center items-center w-48 gap-2 hover:opacity-100 z-50">Saved ({{ count }})</div>
      <ResetButton />
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
