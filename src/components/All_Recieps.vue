<template>
  <div>
    <div>
      <div class="mt-2 text-3xl flex justify-center text-center font-serif pt-5 pb-5">
        All Recieps
      </div>
      <div class="border rounded-xl h-80 min-w-full  bg-red-100">
         <div class=" text-center text-3xl text-bold font-serif"> 
           <router-link to="/culturalFoods">
           <button>10 Ethiopian cultural foods</button>
           </router-link>
           </div>
          <img >
          <p class="flex justify-center text-center pt-20 pl-2 pr-2">You can’t go wrong with the bayenetu, a colorful
        smorgasbord of vegetable dishes arranged on a round of injera.<br/>
         Ethiopian Food Primer: 10 Essential cultural Dishes:</p>
      </div>
    </div>
    <div>
      <div class="text-center pt-5 text-bold text-xl pb-5">
        <div><span class="text-red-500">Ethiopian</span>Dishes</div>
      </div>
     <div
        class="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        <div class="bg-red-100 h-80 w-full rounded-lg m-2">
          <p v-if="error">somthing went wrong</p>
          <p v-if="loading">loading...</p>
            <ul v-else-if="result && result.Recipes">
    <li v-for="Recipe in result?.Recipes" :key="Recipe.id">
        <img src="{{result?.Recipe?.image}}" alt="">
        <h3>{{Recipe.title}}</h3>
        <button class="bg-gray-200 border rounded-lg" v-on:click="getTheSelectedOne(Recipe)">View Details</button>
    </li>
  </ul>
     </div>
       <router-view />
        </div>
      </div>
    </div>
</template>
<script>
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
const foods = (gql`
query getRecipes{
  Recipes{
    id
      image
       title,
       ingredient,
      instruction,
      description
    }
  }
`);
export default {
  data() {
    const { result, loading, error } = useQuery(foods);
    return {
      result,loading,error
    }
    
  },
  methods: {
    getTheSelectedOne(Recipe) {
     
    }
  }
}
</script>