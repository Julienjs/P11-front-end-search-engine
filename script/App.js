import SearchBarV2 from './Search/SearchBarV2.js'
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

        let searchBarV2 = new SearchBarV2(this.listSearchTag, recipes)
        for (let list of this.listSearchTag) {
            searchBarV2.onTag(list);
        };

        RecipesDom.showRecipes(recipes);
        searchBarV2.onSearch();
    }
}
