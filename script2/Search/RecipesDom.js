import Recipes from "../Recipes/Recipes.js";

export default class RecipesDom {
    // gestion d'affichage des recettes les recettes dans le dom 
    static showRecipes(recipes) {
        let recipeDom = "";
        recipes.forEach((item) => {
            let recipe = new Recipes(item);
            recipeDom += recipe.createDom();
        });
        document.querySelector("#section_recipes").innerHTML = recipeDom
    }
}