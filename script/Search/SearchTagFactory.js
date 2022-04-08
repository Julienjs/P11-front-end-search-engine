import IngredientsTag from "./IngredientsTag.js";
import UstensilsTag from "./UstensilsTag.js";
import AppliancesTag from "./AppliancesTag.js";

export default class SearchTagFactory {
    constructor(list, recipes) {
        switch (list) {
            case "ingredients":
                return new IngredientsTag(list, recipes);
            case "appliances":
                return new AppliancesTag(list, recipes);
            case "ustensils":
                return new UstensilsTag(list, recipes);
        }
    }
}