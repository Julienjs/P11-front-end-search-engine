import SearchTag from "./SearchTag.js"


export default class AppliancesTag extends SearchTag {
    constructor(list, recipes) {
        super(list, recipes)
        this.data = []
        this.appliances = []
    }


    // Fonction qui filtre la liste des apprareils et supprime les doublons 
    search(recipes) {
        this.data = []
        this.data = this.data.concat(recipes.map(appliance => appliance.appliance[0].toUpperCase() + appliance.appliance.slice(1).toLowerCase()))
        this.data = [...new Set(this.data)]
    }


    filter(recipes, value) {
        let filterRecipe = [];
        this.appliances = [];
        recipes.forEach(recipe => {
            this.appliances.push(recipe.appliance)
            if (this.appliances.some(appliance => appliance.toLowerCase() === value.toLowerCase())) {
                console.log(recipe);
                filterRecipe.push(recipe)
            }
        });
        return filterRecipe
    }
}