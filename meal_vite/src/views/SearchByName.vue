<template>
    <div class="p-8">
        <input type="text" class="rounded border-2 border-indigo-500 w-full" 
        placeholder="Search for meals..." 
        v-model="keyword"
        @change="searchMeals" />
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
    import {onMounted, ref} from 'vue';
    import { useRoute } from "vue-router";
    import MealItem from "../components/MealItem.vue";
    import store from '../store';

    const route = useRoute();
    const keyword = ref('');
    const meals = computed(() => store.state.searchedMeals);

    function searchMeals() {
        store.dispatch('searchedMeals', keyword.value);
    }

    onMounted(() => {
        keyword.value = route.params.name;
    
        if (keyword.value)
            searchMeals();
    });
</script>