import RecipesDom from './RecipesDom.js'


export default class SearchBarV2 {
    constructor(listTag, recipes) {
        this.element = document.querySelector("#section_search")
        this.recipes = recipes
        this.filterRecipe = this.recipes
        this.listTag = listTag
        this.tagFilterRecipe = this.recipes
    }

    // Fonction qui filtre les recettes lorsque l'évenement est déclenché
    search(value) {
        if (value.length >= 3) {
            this.filterRecipe = [];
            // for (let recipe of this.recipes) {
            this.recipes.map(recipe => {
                if (recipe.name.toLowerCase().includes(value)) {
                    this.filterRecipe.push(recipe)
                }
                else if (recipe.description.toLowerCase().includes(value)) {
                    this.filterRecipe.push(recipe)
                }
                else if (recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(value))) {
                    this.filterRecipe.push(recipe)
                }
            });
            if (this.filterRecipe.length === 0) {
                this.errorMessage()
            }
        } else if (value.length === 0) {
            this.filterRecipe = this.recipes
        }
    }



    // Evenement lorsque que l'on écrit dans la barre de recherche principal  
    onSearch() {
        this.element.querySelector("input").addEventListener("keyup", (e) => {
            this.search(e.target.value);
            RecipesDom.showRecipes(this.filterRecipe);
            for (let list of this.listTag) {
                list.search(this.filterRecipe)
                list.showTag()
                this.onTag(list)
            }
            this.tagFilterRecipe = this.filterRecipe
        })
    }

    onTag(list) {
        list.element.querySelectorAll("li").forEach(tagList => {
            tagList.addEventListener("click", (e) => {
                list.tagList.push(tagList.textContent)
                this.tagFilterRecipe = list.filter(this.tagFilterRecipe, tagList.textContent)
                RecipesDom.showRecipes(this.tagFilterRecipe);
                document.querySelector("#section_tag").innerHTML = ""
                for (let li of this.listTag) {
                    li.search(this.tagFilterRecipe)
                    li.showTag()
                    li.displayTag()
                    this.onTag(li)
                }
                this.closeTag()
            })
        })
    };

    closeTag() {
        let close = document.querySelectorAll(".delete_img")
        close.forEach(item => {
            item.addEventListener("click", (e) => {
                let currentTag = e.currentTarget.closest(".tag");
                let list = this.listTag.find(list => list.list === currentTag.dataset.list);
                list.tagList = list.tagList.filter(tag => tag !== currentTag.querySelector("p").innerHTML)
                currentTag.remove()
                this.tagFilterRecipe = this.filterRecipe
                for (let li of this.listTag) {
                    for (let tag of li.tagList) {
                        this.tagFilterRecipe = li.filter(this.tagFilterRecipe, tag)
                    }
                }
                RecipesDom.showRecipes(this.tagFilterRecipe);
                for (let li of this.listTag) {
                    li.search(this.tagFilterRecipe)
                    li.showTag()
                    this.onTag(li)
                }
            })
        })
    }

    errorMessage() {
        document.querySelector("#section_error").innerHTML = `   
        <article class="filter_error">
             <h2>Aucune recettes ne correspond à votre critère...</h2>
             <p> vous pouvez chercher << tarte aux pommes >>, << poisson >>, etc.</p>
        </article>
        `
    }



}