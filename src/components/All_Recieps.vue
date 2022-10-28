<template>
  <div>
    <div>
      <div class="mt-2 text-3xl flex justify-center text-center font-serif">
        All Recieps
      </div>
      <div class="m-5 border rounded-xl h-80 w-100 bg-red-100">
         <div class=" flex justify-center border rounded-lg text-center text-3xl text-bold font-serif"> 
           <!-- <router-link :to="{ path: '../pages/culturalfoods.vue' }"> -->
           <button>10 Ethiopian cultural foods</button>
           <!-- </router-link> -->
           </div>
          <img >
      </div>
      <p class="mx-10">
        Ethiopian is one of the best cuisines for vegetarians and vegans, since
        these traditions mean there’s always a large variety of veggie options
        on the menu. You can’t go wrong with the bayenetu, a colorful
        smorgasbord of vegetable dishes arranged on a round of injera. Below are
        10 more essential Ethiopian dishes:
      </p>
    </div>
    <div>
      <div class="text-center pt-5 text-bold text-4xl pb-5">
        <div><span class="text-red-500">Ethiopian</span>Dishes</div>
      </div>
     <div
        class="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        <div class="bg-red-100 h-80 w-98 rounded-lg m-4">
          <p v-if="error">somthing went wrong</p>
          <p v-if="loading">loading...</p>
            <ul v-else-if="result && result.Recipes">
    <li v-for="Recipe in result?.Recipes" :key="Recipe.id">
        <img src="{{result?.Recipe?.image}}" alt="">
        <button class="bg-gray-200 border rounded-lg" v-on:click="getTheSelectedOne(Recipe)">View Details</button>
    </li>
  </ul>
            <!-- <div>
             <ul v-if="result && result.Recipes"> 
                <li v-for="recipe in result.Recipes" :key="recipe.id">
                             {{recipe.title}}
                </li>
              </ul>
            </div> -->
     </div>
        </div>
      </div>
    </div>
</template>
<script>
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
const foods  = ( gql`
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
`)
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