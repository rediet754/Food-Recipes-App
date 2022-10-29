<template>
<div class="w-full">
    <nav class=" bg-black w-full pt-5 pb-5">
            <div class="flex max-w-full">
         <div class="flex max-w-full h-10 lg:h-14 pl-5 md:pl-10 lg:pl-24 pr-2 lg:pr-10">
          <img
            class="h-10 lg:h-14"
            src="../assets/imags/icons/ethio.png"
            alt="ethio_icon"/>
             <div class="mt-3 text-1xl lg:text-2xl text-white">
          <span class="text-red-500">Ethio</span>Recieps
        </div>
        </div>
        
       <input
            type="text"
            class="px-3 py-1 border-2 border-gray-200 rounded-l ml-10 md:ml-14 lg:ml-20 w-full md:w-72 lg:w-96"
            placeholder="search..." />
          <button class="text-white bg-gray-600 mr-5 rounded-r fa-solid fa-magnifying-glass w-14"></button>
  <!-- <div class="dropdown relative hidden md:block ml-20">
    <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
      <span class="mr-1">Contact Us</span>
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
    </button>
    <ul class="hover:block absolute hidden h-auto pt-4">
      <li class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block ">PHONE: NUMBER</li>
      <li  class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block ">EMAIL:</li>
      <li class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block ">ADDRASS:</li>
    </ul>
</div> -->
        <div class="hidden md:block text-gray-500 font-serif font-bold pt-3 pl-10" >
          <a class="mr-10" href="#">Contact Us</a>
          <a href="#">Our Youtube Channel</a>
        </div>
        <div @click="toggleNav" class="flex md:hidden lg:hidden">
          <button
            type="button"
            class="
              text-gray-100 mr-3
              hover:text-gray-400
              focus:outline-none focus:text-gray-400">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </div>
      </div>
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="
           flex-col
           lg:pl-24
          mt-8
          space-y-4
           md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
           <li class="text-xs pt-8 text-white flex justify-center md:pl-10 lg:pl-20">
          <router-link class="pr-10 lg:pr-16 hover:text-red-400" to="/">All RECIEPS</router-link>
          <router-link class="pr-10 lg:pr-16 hover:text-red-400" to="/Breackfast">BREACKFAST</router-link>
          <router-link class="pr-10 lg:pr-16 hover:text-red-400" to="/Dinner">DINNERS</router-link>
          <router-link class="pr-10 lg:pr-16 hover:text-red-400" to="/Meal">MEAL</router-link>
          <router-link class="pr-10 lg:pr-16 hover:text-red-400" to="/Holiday">HOLIDAY</router-link>
          <router-link class="pr-10 lg:pr-16 hover:text-red-400" to="/Dessert">DESSERT </router-link>
          <router-link class="pr-10 lg:pr-16 hover:text-red-400" to="/About_us">ABOUT-US</router-link>
          <router-link class="hover:text-red-400 text-xl font-semibold" to="/Login">
          <i class="fa-solid fa-circle-user"></i>LOGIN /LOGOUT</router-link>
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




