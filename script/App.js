import SearchBar from './Search/SearchBar.js'
import SearchTagFactory from './Search/SearchTagFactory.js';
import RecipesDom from './Search/RecipesDom.js';


export default class App {

    constructor(recipes) {
        this.listTag = ["ingredients", "appliances", "ustensils"];
        this.listSearchTag = [];

        for (let list of this.listTag) {
            let searchTag = new SearchTagFactory(list, recipes);
            this.listSearchTag.push(searchTag);
            searchTag.search(recipes);
            searchTag.showTag();
            searchTag.displayListTag();
            searchTag.hideTag();
        };

        let searchBar = new SearchBar(this.listSearchTag, recipes)
        for (let list of this.listSearchTag) {
            searchBar.onTag(list);
        };

        RecipesDom.showRecipes(recipes);
        searchBar.onSearch();
    }
}
