import state from "./state"

export function setSearchedMeals(state, meals) {
    state.searchedMeals = meals;
}

export function setSearchMealsByIngredient(state, meals) {
    state.searchedIngredients = meals;
}

export function setSearchedMealsByLetter(state, meals) {
    state.searchedMealsByLetter = meals;
}

export function setAllMeals(state, meals) {
    state.allMeals = meals;
}