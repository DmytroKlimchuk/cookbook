import { Ingredient } from '../shopping-list/ingredient.model';

interface IRecipe {
    name: string;
    description: string;
    imgPath: string;
}

export class Recipe implements IRecipe {
    name: string;
    description: string;
    imgPath: string;
    ingredients: Ingredient[] = [];

    constructor(name: string, description: string, imgPath: string, ...ingredient: Ingredient[]) {
        this.name = name;
        this.description = description;
        this.imgPath = imgPath;
        this.ingredients.push(...ingredient);
    }

}