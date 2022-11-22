<template>
     <div class="flex justify-center items-center flex-wrap">
        <div v-for="meal in meals" :key="meal.idMeal" class="hover:bg-indigo-100 m-4 bg-white rounded-lg border border-gray-200 shadow-md">
           
            <MealItem :meal="meal" />

        </div>
    </div>
</template>

<script setup>
    import { computed } from "@vue/reactivity";
    import {onMounted} from 'vue';
    import MealItem from "../components/MealItem.vue";
    import store from '../store';

    const meals = computed(() => store.state.allMeals);

    onMounted(() => {
        store.dispatch('allMeals');
    });

</script>