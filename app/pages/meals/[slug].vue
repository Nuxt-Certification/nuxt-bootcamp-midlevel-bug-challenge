<script setup>
const { slug } = useRoute().params;

const { data: meal } = await useFetch("/api/meals", {
  query: {
    slug: slug,
  },
});

useHead({
  title: meal.title,
});
</script>

<template>
  <div v-if="meal">
    <MealContent :meal />
  </div>
</template>
