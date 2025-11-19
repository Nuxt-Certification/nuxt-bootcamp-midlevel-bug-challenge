<script setup>
const { data: meals } = await useFetch("/api/meals");

const { addMeal } = useSavedMealsStore();
</script>

<template>
  <div v-if="meals">
    <MealList :meals @save-meal="addMeal" />
  </div>
</template>
