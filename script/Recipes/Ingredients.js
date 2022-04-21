export default class Ingredients {

    constructor(ingredients) {
        this.ingredients = ingredients
    }

    // Affichage des ingrédients dans les recettes 
    createDom() {
        return (
            this.ingredients.map((ingredient) => {

                // Ajout de la majuscule
                const upperCaseIngredient = () => {
                    return ingredient.ingredient[0].toUpperCase() + ingredient.ingredient.slice(1).toLowerCase()
                };

                // Affichage des quantités
                const checkQuantity = () => {
                    if (ingredient.quantity === undefined) {
                        return ""
                    }
                    else {
                        return ingredient.quantity
                    }
                };

                // Affichage des unités de mesure
                const checkUnit = () => {
                    if (ingredient.unit === undefined) {
                        return ""
                    } else if (ingredient.unit === "grammes") {
                        return "g"
                    }
                    else {
                        return ingredient.unit
                    }
                };

                // Affichage des deux points 
                const twoPoint = () => {
                    if (ingredient.unit === undefined && ingredient.quantity === undefined) {
                        return ""
                    } else {
                        return ":"
                    }
                };

                return `
            <div>
                <p class="recipe_detail_ingredient">${upperCaseIngredient()}${twoPoint()}</p>
                <p>${checkQuantity()}</p>
                <p> ${checkUnit()} </p>
            </div>`
            }).join('')
        )
    };
}