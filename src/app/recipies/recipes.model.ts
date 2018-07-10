import { Shopping } from '../shopping/shopping.model';

interface IRecipe {
    name: string;
    description: string;
    imgPath: string;
}

export class Recipe implements IRecipe {
    ingredients: Shopping[];

    constructor(public name: string, public description: string, public imgPath: string, ...ingredients: Shopping[]) {
        this.ingredients = ingredients;
    }

}