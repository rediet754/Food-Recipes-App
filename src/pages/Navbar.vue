<template>
<div>
    <nav class=" bg-black container px-6 py-8 mx-auto md:flex md:justify-between md:items-center" >
      <div class="flex items-center justify-between">
         <div class="flex ">
          <img
            class="h-14"
            src="../assets/imags/icons/ethio.png"
            alt="ethio_icon"/>
             <div class="mt-3 text-2xl text-white">
          <span class="text-red-500">Ethio</span>Recieps
        </div>
        </div>
       <div class="lg:flex lg:ml-24">
        <div class="flex">
          <input
            type="text"
            class="px-3 py-1 lg:w-80 border-2 border-gray-200 rounded"
            placeholder="What Are You Looking For?"
          />
          <button class="px-3 text-white bg-gray-600">Search</button>
        </div>
        </div>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="
              text-gray-100
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

    
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="
          flex-col
          mt-8
          space-y-4
           md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
        "
      >
           <li class="text-xs pt-8 text-white">
          <router-link class="pr-5 hover:text-red-400" to="/">All RECIEPS</router-link>
          <router-link class="pr-5 hover:text-red-400" to="/Breackfast">BREACKFAST</router-link>
          <router-link class="pr-5 hover:text-red-400" to="/Dinner">DINNERS</router-link>
          <router-link class="pr-5 hover:text-red-400" to="/Meal">MEAL</router-link>
          <router-link class="pr-5 hover:text-red-400" to="/Holiday">HOLIDAY</router-link>
          <router-link class="pr-5 hover:text-red-400" to="/Dessert">DESSERT </router-link>
          <router-link class="pr-5 hover:text-red-400" to="/About_us">ABOUT US</router-link>
        </li>
      </ul>
    </nav>
   <router-view />
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>
