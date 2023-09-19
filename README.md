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

## 3. Application

- API Source: [TheMealDB](https://www.themealdb.com/api.php)
- This project was created using the following technologies and tools:

  - Vue 3: A JavaScript framework for building user interfaces.
  - Pinia: State management for Vue 3 applications.
  - GSAP: Animation library for smooth and performant animations.
  - Vite: Build tool for fast development and building.
  - Cypress: End-to-end testing framework for web apps.
  - Vitest: Testing library for Vue 3 apps, improving testing capabilities.

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
