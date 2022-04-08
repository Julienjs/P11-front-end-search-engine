import Ingredients from './Ingredients.js'

export default class Recipes {
    constructor(recipe) {
        Object.assign(this, recipe);
        this.ingredient = new Ingredients(this.ingredients)
    }

    // Fonction qui contient la création du dom pour les recettes 
    createDom() {
        return `
                <article>
                    <div class="image">
                    <img src="image/cover/${this.cover}"/>
                    </div>
                    <div class="container_article">
                        <div class="title">
                            <h2>${this.name}</h2>
                            <div class="times">
                                <img src="image/clock.png" alt="logo horloge">
                                <p>${this.time}min</p>
                            </div>
                        </div>
                        <div class="recipe">
                        <div class="recipe_detail">
                        ${this.ingredient.createDom()}
                     </div>
                            <div class="recipe_description">
                                <p>${this.description}</p>
                            </div>
                        </div>
                    </div>
                </article>`
    }
}
