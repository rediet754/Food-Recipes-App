<template>
    <div>Dinner</div>
    
    <ul>
        <li v-for="foods in Recipes" :key="foods.id">
            {{foods?.title}}
        </li>
    </ul>
</template>
<script >
import axios from "axios"
export default {
    data() {
        return {
   Recipes:[]
        }
    },
  async mounted() {
      try {
          var result = await axios({
              method: "POST",
              url: "https://comic-sole-38.hasura.app/v1/graphql",
              data: {
                  query: `
                     {
                        image,
                        title,
                        ingredient,
                        instruction,
                        description
                     }
                  `
}
          });  
          this.Recipes = result.data.Recipes;
      }
         catch(error) {
        console.log(error)
    }
    }
   
}

</script>
