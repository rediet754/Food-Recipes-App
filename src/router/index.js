import { createWebHistory, createRouter } from "vue-router"
import Breackfast from "../components/Breakfast.vue"
import Dinner from "../components/Dinner.vue"
import About_us from "../components/About_us.vue"
import Holiday from "../components/Holiday.vue"
import Meal from "../components/Meal.vue"
import Dessert from "../components/Dessert.vue"
import All_Recieps from "../components/All_Recieps.vue"
import culturalFoods from "../pages/culturalfoods.vue"
const routes = [
  {
    path: "/",
    name: "All_Recipes",
    component: All_Recieps,
  },
  {
    path: "/Breackfast",
    name: "Breackfast",
    component: Breackfast,
  },
  {
    path: "/Dinner",
    name: "Dinner",
    component: Dinner,
  },

  {
    path: "/Holiday",
    name: "Holiday",
    component: Holiday,
  },
  {
    path: "/Meal",
    name: "Meal",
    component: Meal,
  },
  {
    path: "/Dessert",
    name: "Dessert",
    component: Dessert,
  },
  {
    path: "/About_us",
    name: "About_us",
    component: About_us,
  },
  {
    path: "/culturalFoods",
    name: "culturalFoods",
    component: culturalFoods,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router;


