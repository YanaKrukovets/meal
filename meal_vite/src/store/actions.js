export async function searchedMeals({ commit }, keyword) {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`);
    const res = await data.json();
    commit('setSearchedMeals', res.meals);
}

export async function searchMealsByLetter({ commit }, letter) {
    if (letter) {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
        const res =  await data.json();
        commit('setSearchedMealsByLetter', res.meals);
    }
}

export async function searchedIngredients({ commit }, ingredient) {    
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    const res =  await data.json();
    const meals = res.meals;
    let description = '', result = '';

    if (ingredient) {
        let key = ingredient.charAt(0).toUpperCase() + ingredient.slice(1); 
        description = meals.filter((meal) => {
           return meal.strIngredient === key;
        });

        result = description[0] ? description[0].strDescription : "Description not found";

    }
    commit('setSearchMealsByIngredient', result);
    
}

export async function allMeals( {commit} ) {
    const data = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Salmon");
    const res = await data.json(); 
    commit('setAllMeals', res.meals);
}