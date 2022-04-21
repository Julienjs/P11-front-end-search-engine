import SearchTag from "./SearchTag.js"

export default class IngredientsTag extends SearchTag {
    constructor(list, recipes) {
        super(list, recipes)
        this.data = []
    }

    // Récupèration de la liste des ingrédients et suppression des doublons pour l'affichage de la liste 
    search(recipes) {
        this.data = [];
        recipes.map((item) => {
            this.data = this.data.concat(item.ingredients.map(ingredient =>
                ingredient.ingredient[0].toUpperCase() + ingredient.ingredient.slice(1).toLowerCase()
            ))
        });
        this.data = [...new Set(this.data)];
    };

    // Filtre la liste des ingrédients lors de la fermeture d'un tag 
    filter(recipes, value) {
        let filterRecipe = [];
        recipes.forEach(recipe => {
            if (recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase() === value.toLowerCase())) {
                filterRecipe.push(recipe)
            }
        });
        return filterRecipe
    };



}

