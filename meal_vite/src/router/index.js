import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue'
import Home from '../views/Home.vue';
import SearchByName from '../views/SearchByName.vue';
import SearchByLetter from '../views/SearchByLetter.vue';
import SearchByIngredients from '../views/SearchByIngredients.vue';
import MealDetails from '../views/MealDetails.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
        {
            path: '/',
            name: "home",
            component: Home,
        },
        {
            path: '/by-name/:name?',
            name: "byName",
            component: SearchByName,
        },
        {
            path: '/by-letter/:letter?',
            name: "byLetter",
            component: SearchByLetter,
        },
        {
            path: '/by-ingredients/:ingredients?',
            name: "byIngredients",
            component: SearchByIngredients,
        },
        {
            path: '/meal/:id?',
            name: "mealDetails",
            component: MealDetails,
        }
    ]
  }
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;