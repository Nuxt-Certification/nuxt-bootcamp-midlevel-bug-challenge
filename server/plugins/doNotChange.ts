const mockedMeals = [
  {
    id: 52772,
    title: "Teriyaki Chicken Casserole",
    slug: "teriyaki-chicken-casserole",
    thumbnail: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    instructions:
      "Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!",
  },
  {
    id: 52845,
    title: "Turkey Meatloaf",
    slug: "turkey-meatloaf",
    thumbnail: "https://www.themealdb.com/images/media/meals/ypuxtw1511297463.jpg",
    instructions:
      "Heat oven to 180C/160C fan/gas 4. Heat the oil in a large frying pan and cook the onion for 8-10 mins until softened. Add the garlic, Worcestershire sauce and 2 tsp tomato purée, and stir until combined. Set aside to cool.\r\n\r\nPut the turkey mince, egg, breadcrumbs and cooled onion mix in a large bowl and season well. Mix everything to combine, then shape into a rectangular loaf and place in a large roasting tin. Spread 2 tbsp barbecue sauce over the meatloaf and bake for 30 mins.\r\n\r\nMeanwhile, drain 1 can of beans only, then pour both cans into a large bowl. Add the remaining barbecue sauce and tomato purée. Season and set aside.\r\n\r\nWhen the meatloaf has had its initial cooking time, scatter the beans around the outside and bake for 15 mins more until the meatloaf is cooked through and the beans are piping hot. Scatter over the parsley and serve the meatloaf in slices.",
  },
  {
    id: 52871,
    title: "Yaki Udon",
    slug: "yaki-udon",
    thumbnail: "https://www.themealdb.com/images/media/meals/wrustq1511475474.jpg",
    instructions:
      "Boil some water in a large saucepan. Add 250ml cold water and the udon noodles. (As they are so thick, adding cold water helps them to cook a little bit slower so the middle cooks through). If using frozen or fresh noodles, cook for 2 mins or until al dente; dried will take longer, about 5-6 mins. Drain and leave in the colander.\r\nHeat 1 tbsp of the oil, add the onion and cabbage and sauté for 5 mins until softened. Add the mushrooms and some spring onions, and sauté for 1 more min. Pour in the remaining sesame oil and the noodles. If using cold noodles, let them heat through before adding the ingredients for the sauce – otherwise tip in straight away and keep stir-frying until sticky and piping hot. Sprinkle with the remaining spring onions.",
  },
  {
    id: 52999,
    title: "Crispy Sausages and Greens",
    slug: "crispy-sausages-and-greens",
    thumbnail: "https://www.themealdb.com/images/media/meals/st1ifa1583267248.jpg",
    instructions:
      "Preheat the oven to 350°. Remove the stems from one bunch of Tuscan kale and tear the leaves into 1 pieces (mustard greens, collards, spinach, and chard are great, too). Coarsely chop half a head of green cabbage. Combine the greens in a large baking dish and add 4 cloves of thinly sliced garlic. Adding some sliced onions and shiitake mushrooms at this point is optional, but highly recommended (I'll sauté the onions and mushrooms in a cast iron baking dish right on the stove before adding to the greens). Coat the greens with some olive oil and pour ½ cup chicken stock or broth over everything. Cover the dish with foil and bake until the greens are wilted, about 15 minutes. Remove foil and season with salt and pepper. Continue to bake until cabbage is tender, about 20-25 minutes more.\r\n\r\nMeanwhile, heat a little olive oil in a large skillet over medium-high. Prick four sweet Italian sausages with a fork and cook until browned on all sides and cooked through, 10 to 12 minutes. When the greens are done, slice the sausage and toss into the greens with a splash of your favorite vinegar (I like sherry or red wine).",
  },
];

const fakePromise = async <T>(response: T): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, 1000);
  });
};

const fetchMeals = async (): Promise<Meal[]> => {
  return await fakePromise(mockedMeals);
};

const getMealsfromMemory = async (): Promise<Meal[] | []> => {
  return (await useStorage().getItem("meals")) ?? [];
};

export default defineNitroPlugin(async (nitro) => {
  const meals = await fetchMeals();
  await useStorage().setItem("meals", meals);

  nitro.hooks.hook("request", async (event) => {
    const reqUrl = getRequestURL(event).pathname;

    if (reqUrl === "/api/meals/delete") {
      const { mealId } = await readBody(event);

      const meals = await getMealsfromMemory();
      const filteredMeals = meals.filter((meal) => {
        return Number(meal.id) !== Number(mealId);
      });

      await useStorage().setItem("meals", filteredMeals);

      return await send(event, JSON.stringify(filteredMeals), "application/json");
    }

    if (reqUrl === "/api/meals") {
      const { slug } = getQuery(event);
      const meals = await getMealsfromMemory();
      const storedMeals = await fakePromise(meals);

      if (slug) {
        const targetMeal = meals.find((meal) => meal.slug === slug);

        if (!targetMeal)
          return sendError(
            event,
            createError({
              statusCode: 404,
              statusMessage: "Meal not found",
            })
          );

        return await send(event, JSON.stringify(targetMeal), "application/json");
      }

      if (!slug) {
        return await send(event, JSON.stringify(storedMeals), "application/json");
      }
    }

    if (reqUrl === "/api/reset") {
      const meals = await fetchMeals();
      await useStorage().setItem("meals", meals);
      await send(event);
    }
  });
});
