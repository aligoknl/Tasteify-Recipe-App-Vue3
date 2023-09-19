# Tasteify Recipe App

![App Screenshot](/public/appScreenshot.png)

## 1. Link

Project link is available at [Tasteify App](https://tasteify.netlify.app)

## 2. Description

This is a Vue.js application for exploring and discovering various recipes. Users can search for meals, bring a meal randomly, browse by categories, and view detailed information about each meal.

## 3. Features

- Search for meals by name.
- Random meals.
- Explore meals by categories.
- View detailed information for each meal, including ingredients and instructions.
- Direct links to the original source and video tutorials (if available).

## 4. Application

- API Source: [TheMealDB](https://www.themealdb.com/api.php)
- This project was created using the following technologies and tools:

  - Vue 3: A JavaScript framework for building user interfaces.
  - Pinia: State management for Vue 3 applications.
  - GSAP: Animation library for smooth and performant animations.
  - Vite: Build tool for fast development and building.
  - Cypress: End-to-end testing framework for web apps.
  - Vitest: Testing library for Vue 3 apps, improving testing capabilities.

## 5. App Tree

````plaintext
cypress
├── config
├── e2e
│ ├── HomeView.cy.js
│ ├── MealCategory.cy.js
│ └── SearchingMeal.cy.js
├── support
│ └── commands.js
public
├── images
src
├── api
│ └── fetchData.js
├── components
│ ├── __tests__
│ │ ├── AppButton.spec.js
│ │ ├── MealItem.spec.js
│ │ └── Sidebar.spec.js
│ ├── AnimatedContainer.vue
│ ├── AppButton.vue
│ ├── HeroSection.vue
│ ├── MealItem.vue
│ ├── MealLink.vue
│ ├── MealList.vue
│ └── Sidebar.vue
├── config
│ └── axiosClient.js
├── router
│ └── index.js
├── stores
│ └── recipeStore.js
├── styles
│ ├── components
│ │ ├── AppButton.scss
│ │ ├── HeroSection.scss
│ │ ├── MealItem.scss
│ │ └── Sidebar.scss
│ ├── pages
│ │ ├── Homeview.scss
│ │ ├── MealByCategory.scss
│ │ ├── MealCategories.scss
│ │ ├── MealDetail.scss
│ │ ├── NotFound.scss
│ │ └── SearchingMeal.scss
│ ├── _variables.scss
│ └── main.scss
├── views
│ ├── Homeview.vue
│ ├── MealByCategory.vue
│ ├── MealCategories.vue
│ ├── MealDetails.vue
│ ├── NotFound.vue
│ └── SearchingMeal.vue
App.vue
main.js

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
````
