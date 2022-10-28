<template>
   <div >
     <div class="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div class="bg-red-100 h-80 w-98 rounded-lg m-4">
        <img class="rounded-lg" src="../assets/imags/images/yummy-chechebsa.jpg" alt="chechebsa-img">
      </div>
      <div class="bg-red-100 h-80 w-98 rounded-lg m-4">
        <img class="rounded-lg" src="../assets/imags/images/ethio-kitfo.jpg" alt="ehio-kitifo-img">
      </div>
      <div class="bg-red-100 h-80 w-98 rounded-lg m-4">
        <img class="rounded-lg" src="../assets/imags/images/ethio-shekla-tibs.jpg" alt="ethio-shekla-tibis">
      </div>
      <div class="bg-red-100 h-80 w-98 rounded-lg m-4">
        <img class="rounded-lg" src="../assets/imags/images/shiro.jpg" alt="ethio-shiro">
      </div>
      <div class="bg-red-100 h-80 w-98 rounded-lg m-4">
        <img class="rounded-lg" src="../assets/imags/images/Kale.jpg" alt="ethio-kale">
      </div>
      <div class="bg-red-100 h-80 w-98 rounded-lg m-4">
        <img  class="rounded-lg" src="../assets/imags/images/yataklete-kilkil.jpg" alt="ethio-wet">
      </div>
      <div class="bg-red-100 h-80 w-98 rounded-lg m-4">
        <img class="rounded-lg" src="../assets/imags/images/ethiopian-genfo.jpg" alt="ethio-genfo">
      </div>
      <div class="bg-red-100 h-80 w-98 rounded-lg m-4">
        <img class="rounded-lg" src="../assets/imags/images/doro-wot.jpg" alt="doro-wot">
      </div>
      <div class="bg-red-100 h-80 w-98 rounded-lg m-4">
        <img class="rounded-lg" src="../assets/imags/images/azifa-recipe-vegan-lentil-salad.jpg" alt="food">
      </div>
      <div class="bg-red-100 h-80 w-98 rounded-lg m-4">
        <img class="rounded-lg" src="../assets/imags/images/asa-tibis.jpg" alt="asa-tibis-img">
      </div>
     </div>
     </div>
</template>
  <div>
    <div class="bg-white p-10 font-serif">
      <div class="font-bold flex">
        <div>
          <img
            class="h-14"
            src="../assets/imags/icons/ethio.png"
            alt="ethio_icon"
          />
        </div>
        <div class="mt-3 text-2xl text-white">
          <span class="text-red-500">Ethio</span>Recieps
        </div>
      </div>
      <div class="lg:flex lg:float-right">
        <div class="flex">
          <input
            type="text"
            class="px-3 py-1 w-80 border-2 border-gray-200 rounded"
            placeholder="What Are You Looking For?"
          />
          <button class="px-3 text-white bg-gray-600">Search</button>
        </div>
        <div class="flex text-sm  justify-center w-36">
          <img
            class="h-8 pt-2"
            src="../assets/imags/icons/icons8-login-64.png"
            alt="login-icon"
          />
          <button>Login</button>
        </div>
      </div>
      <ul class="md:text-center">
        <li class="text-xs pt-8">
          <router-link class="pr-5 hover:text-red-400" to="/">All RECIEPS</router-link>
          <router-link class="pr-5 hover:text-red-400" to="/Breackfast">BREACKFAST</router-link>
          <router-link class="pr-5 hover:text-red-400" to="/Dinner">DINNERS</router-link>
          <router-link class="pr-5 hover:text-red-400" to="/Meal">MEAL</router-link>
          <router-link class="pr-5 hover:text-red-400" to="/Holiday">HOLIDAY</router-link>
          <router-link class="pr-5 hover:text-red-400" to="/Dessert">DESSERT </router-link>
          <router-link class="pr-5 hover:text-red-400" to="/About_us">ABOUT US</router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>








