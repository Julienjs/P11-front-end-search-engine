import SearchBar from './Search/SearchBar.js'
import SearchTagFactory from './Search/SearchTagFactory.js';
import RecipesDom from './Search/RecipesDom.js';


export default class App {
    constructor(recipes) {
        this.listTag = ["ingredients", "appliances", "ustensils"]   //tableau contenant les listes des tags
        this.listSearchTag = []   //tableau vides
        for (let list of this.listTag) {  //boucle sur le tableau contenant les listes des tags
            let searchTag = new SearchTagFactory(list, recipes) // envoi des parametres list et recipes a SearchTagFactory / joue la fonction
            this.listSearchTag.push(searchTag)  // ajout dans le tableau les differentes fonctions d'affichages des listes
            searchTag.search(recipes)  // envoi des recettes dans la fonction search des differentes listes de tags
            searchTag.showTag()  //permet de jouer la fonction pour afficher la liste des tags dasn le dom
            searchTag.displayListTag()  //permet de jouer la fonction pour ouvrir la liste au clic
            searchTag.hideTag()  //permet de jouer la fonction pour fermer la liste 
        }
        let searchBar = new SearchBar(this.listSearchTag, recipes) // envoi en parametre le tableau contenant les list et les recettes / joue la fonction 
        for (let list of this.listSearchTag) {

            searchBar.onTag(list)
        }

        RecipesDom.showRecipes(recipes) //envoi des recettes en parametre / joue la fonction 
        searchBar.onSearch()  //joue la fonction qui permet de faire la recherche dans la barre principal
    }


}
