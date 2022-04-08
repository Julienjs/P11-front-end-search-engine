import SearchTag from "./SearchTag.js"

export default class IngredientsTag extends SearchTag {
    constructor(list, recipes) {
        super(list, recipes)
        this.data = []
    }

    // Fonction qui filtre la liste des ingrédients et supprime les doublons 
    search(recipes) {
        this.data = []
        recipes.map((item) => {
            this.data = this.data.concat(item.ingredients.map(ingredient =>
                ingredient.ingredient[0].toUpperCase() + ingredient.ingredient.slice(1).toLowerCase()
            ))
        });
        this.data = [...new Set(this.data)]
    }

    filter(recipes, value) {
        let filterRecipe = [];
        recipes.forEach(recipe => {
            if (recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase() === value.toLowerCase())) {
                filterRecipe.push(recipe)
            }
        });
        return filterRecipe
    }



}

