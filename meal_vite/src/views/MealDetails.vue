<template>


<div class="relative h-80 mt-8 ml-8 mr-8 overflow-hidden rounded-lg bg-indigo-500">
  <div class="absolute z-30 flex w-full h-full">
    <div class="relative z-30 w-1/4 px-6 py-8 text-white md:py-10 md:w-1/3">
      <h2 class="text-5xl">{{ meal.strMeal }}</h2><span></span>
    </div>
    <div class="absolute top-0 right-0 flex w-full h-full">
      <div class="w-1/5 h-full bg-indigo-500"></div>
      <div class="relative w-1/5"><svg fill="currentColor" viewBox="0 0 100 100" class="absolute inset-y-0 z-20 h-full text-indigo-500">
          <polygon id="diagonal" points="0,0 100,0 50,100 0,100"></polygon>
        </svg><svg fill="currentColor" viewBox="0 0 100 100" class="absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50">
          <polygon points="0,0 100,0 50,100 0,100"></polygon>
        </svg></div>
    </div>
  </div>
  <div class="absolute top-0 right-0 block w-9/12 h-full"><img :src="meal.strMealThumb" :alt="meal.strMeal" class="object-cover min-w-full h-full"></div>
</div>



    <div class="px-10 mb-10">
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2 text-right">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Area:</strong> {{ meal.strArea }}
      </div>
      <div>
        <strong class="font-bold">Tags:</strong> {{ meal.strTags }}
      </div>
    </div>

    <div class="my-3 text-justify">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 pl-5">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
            {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }} {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>

    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';

    const meal = ref({});
    const route = useRoute();

    onMounted(async () => {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`);
        const res = await data.json(); 

        meal.value = res.meals[0] || {};

    });
</script>