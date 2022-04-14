import SearchTag from "./SearchTag.js"


export default class UstensilsTag extends SearchTag {
    constructor(list, recipes) {
        super(list, recipes)
        this.data = []
    }

    // Fonction qui filtre la liste des ustensiles et supprime les doublons 
    search(recipes) {
        this.data = []
        recipes.forEach((item) => {
            this.data = this.data.concat(item.ustensils.map(ustensil => ustensil[0].toUpperCase() + ustensil.slice(1).toLowerCase()
            ))
        });
        this.data = [...new Set(this.data)]

    }

    filter(recipes, value) {
        let filterRecipe = [];
        recipes.forEach(recipe => {
            console.log(recipe.ustensils);
            if (recipe.ustensils.some(ustensil => ustensil.toLowerCase() === value.toLowerCase())) {
                filterRecipe.push(recipe)
            }
        });
        return filterRecipe
    }
}