<template>
    <div class="p-8">
        <input type="text" class="rounded border-2 border-indigo-500 w-full" 
        placeholder="Search ingredient..." 
        v-model="keyword"
        @change="searchMeals" />

        <p :key="descript" class="p-8 text-justify">{{descript}}</p>
        
    </div>

</template>

<script setup>
    import { computed } from "@vue/reactivity";
    import {onMounted, ref, watch} from 'vue';
    import store from '../store';

    const keyword = ref('');

    const descript = computed(() => store.state.searchedIngredients);

    function searchMeals() {
        store.dispatch('searchedIngredients', keyword.value);
    }

    onMounted(() => {
   
        if (keyword.value) {
            searchMeals();
        }
    });

</script>