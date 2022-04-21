import Recipes from "../Recipes/Recipes.js";

export default class RecipesDom {

    // Affichage des recettes 
    static showRecipes(recipes) {
        let recipeDom = "";
        recipes.forEach((item) => {
            let recipe = new Recipes(item);
            recipeDom += recipe.createDom();
        });
        document.querySelector("#section_recipes").innerHTML = recipeDom
    };
}