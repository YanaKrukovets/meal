<template>
    <div class="flex justify-center gap-2 mt-3">
        <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter in letters" :key="letter">
            {{ letter }}
        </router-link>
    </div>   
        <div class="flex justify-center items-center flex-wrap">
            <p v-if="!meals">No Meals found</p>
            <div v-for="meal in meals" :key="meal.idMeal" class="hover:bg-indigo-100 m-4 bg-white rounded-lg border border-gray-200 shadow-md">
           
                <MealItem :meal="meal" />

            </div>
        </div>
    
</template>

<script setup>
    import { computed } from "@vue/reactivity";
    import {onMounted, ref, watch} from 'vue';
    import { useRoute } from "vue-router";
    import MealItem from "../components/MealItem.vue";
    import store from '../store';


    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const route = useRoute();
    const meals = computed(() => store.state.searchedMealsByLetter);
    
    watch(route, () => {
        store.dispatch("searchMealsByLetter", route.params.letter); 
    });
    onMounted(() => {
        store.dispatch("searchMealsByLetter", route.params.letter);
    });

</script>