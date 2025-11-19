<script setup>
definePageMeta({
  layout: "admin-layout",
});

const { data: meals, refresh } = await useFetch("/api/meals");

const deleteMeal = async (id) => {
  await $fetch("/api/meals/delete", {
    method: "POST",
    body: {
      mealId: id,
    },
  });

  await refresh();
};
</script>

<template>
  <div v-if="meals">
    <MealTable :meals @clicked-meal="deleteMeal" />
  </div>
</template>
