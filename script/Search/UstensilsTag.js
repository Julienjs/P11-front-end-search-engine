import SearchTag from "./SearchTag.js"


export default class UstensilsTag extends SearchTag {
    constructor(list, recipes) {
        super(list, recipes)
        this.data = []
    }

    // Récupèration de la liste des ustensils et suppression des doublons pour l'affichage de la liste
    search(recipes) {
        this.data = [];
        recipes.forEach((item) => {
            this.data = this.data.concat(item.ustensils.map(ustensil => ustensil[0].toUpperCase() + ustensil.slice(1).toLowerCase()
            ))
        });
        this.data = [...new Set(this.data)];
    };

    // Filtre la liste des ustensils lors de la fermeture d'un tag 
    filter(recipes, value) {
        let filterRecipe = [];
        recipes.forEach(recipe => {
            if (recipe.ustensils.some(ustensil => ustensil.toLowerCase() === value.toLowerCase())) {
                filterRecipe.push(recipe)
            }
        });
        return filterRecipe
    };
}