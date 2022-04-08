export default class Ingredients {
    constructor(ingredients) {
        this.ingredients = ingredients


    }

    // Fonction qui contient la création du dom pour les ingrédients 
    createDom() {
        return (
            this.ingredients.map((ingredient) => {
                const upperCaseIngredient = () => {
                    return ingredient.ingredient[0].toUpperCase() + ingredient.ingredient.slice(1).toLowerCase()
                }
                const checkQuantity = () => {
                    if (ingredient.quantity === undefined) {
                        return ""
                    }
                    else {
                        return ingredient.quantity
                    }
                }
                const checkUnit = () => {
                    if (ingredient.unit === undefined) {
                        return ""
                    } else if (ingredient.unit === "grammes") {
                        return "g"
                    }
                    else {
                        return ingredient.unit
                    }
                }
                const twoPoint = () => {
                    if (ingredient.unit === undefined && ingredient.quantity === undefined) {
                        return ""
                    } else {
                        return ":"
                    }
                }
                return `
            <div>
                <p class="recipe_detail_ingredient">${upperCaseIngredient()}${twoPoint()}</p>
                <p>${checkQuantity()}</p>
                <p> ${checkUnit()} </p>
            </div>`
            }).join('')
        )
    }

}