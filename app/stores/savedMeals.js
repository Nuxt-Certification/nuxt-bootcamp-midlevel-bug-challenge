export const useSavedMealsStore = defineStore("saved-meals", () => {
  const savedMeals = ref([]);

  const count = computed(() => savedMeals.value.length);

  const addMeal = (mealId) => {
    const exists = savedMeals.value.find((savedMealId) => savedMealId === mealId);

    if (exists) return;

    savedMeals.value.push(mealId);
  };

  return { count, addMeal };
});
