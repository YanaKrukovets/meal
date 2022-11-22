<template>

<router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
    <img :src="meal.strMealThumb" alt="meal.strMeal" class="rounded-t-lg h-[310px] w-full object-cover" />
</router-link>

<h3 class="p-3 font-semibold">{{ meal.strMeal}}</h3>
<div class="p-3 mb-3 float-right">
    <a :href="meal.strYoutube" class="px-3 py-2 rounded border-2 border-indigo-500 hover:bg-red-500 hover:text-white">See recipe on YouTube</a>
</div>

</template>

<script setup>
    const { meal } = defineProps({
        meal: {
            required: true,
            type: Object
        }
})
</script>