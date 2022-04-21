import SearchTag from "./SearchTag.js"


export default class AppliancesTag extends SearchTag {
    constructor(list, recipes) {
        super(list, recipes)
        this.data = []
        this.appliance = []
    }

    // Récupèration de la liste des appareils et suppression des doublons pour l'affichage de la liste
    search(recipes) {
        this.data = []
        this.data = this.data.concat(recipes.map(appliance => appliance.appliance[0].toUpperCase() + appliance.appliance.slice(1).toLowerCase()))
        this.data = [...new Set(this.data)];
    };

    // Filtre la liste des appareils lors de la fermeture d'un tag 
    filter(recipes, value) {
        let filterRecipe = [];
        recipes.forEach(recipe => {
            this.appliance.push(recipe.appliance)
            if (this.appliance.some(appliance => appliance.toLowerCase() === value.toLowerCase())) {
                filterRecipe.push(recipe)
            }
        });
        return filterRecipe
    };
}