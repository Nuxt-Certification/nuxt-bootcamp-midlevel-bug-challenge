---
difficulty: 1
tags: codechallenge, Bug Fixing Challenge, Exercise Challenge, Nuxt 3
openFiles: app/app.vue, app/pages/meals/[slug].vue, app/pages/dashboard.vue
---

# Tasty Meals Bug

# Challenge Description

In this challenge, we've prepared a basic food recipes application, but it has a few bugs that need to be fixed.

First of all, on the `/pages/[meal].vue` page, the title isn’t updating to match the meal’s title. Instead, it consistently displays the default site title.

Secondly, users can save meals by clicking the `+` icon on the cards displayed on the `/pages/index.vue` page. However, the saved meal count shown in the div with the class `'saved'` within `app.vue` isn’t accurate.

Lastly, while navigating between pages, a blur transition effect is applied. However, when navigating from and to the `/dashboard` page, the 'blur' transition isn’t applied.

## Requirements

1. Ensure the `<title>` tag updates dynamically to reflect the specific meal title on the `/meals/:id` route.

2. Investigate and fix the issue causing the saved meals count to display inaccurately in the saved div in `app.vue`.

3. Make sure the blur transition is applied consistently across all page routes, including the `/dashboard` page.

> 💡 HINT: The 'blur' effect CSS styles are already in place.

![bug-compressed](https://github.com/user-attachments/assets/c176af3c-5934-431e-9c92-49f2619576b2)

## Other Considerations

- If you see the `data-test` attribute in the boilerplate don't remove it. If you remove it, your code may be invalid for the certificate.
- Do not delete or modify the `/server/plugins/doNotChange.ts` file.

- TailwindCSS is preinstalled and with default config. It might be helpful for you if you want to have some styles. Or if you'd like to see a pretty result as you develop.

- It is NOT necessary to have the exact same styles as in the GIF above, or even any styles at all.

- If you're a TypeScript beginner and encounter some issues with it in the challenge, you can skip it by using `// @ts-expect-error` comment on the line above the error.
