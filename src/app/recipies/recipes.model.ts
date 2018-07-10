import { Shopping } from '../shopping/shopping.model';

interface IRecipe {
    id: number;
    name: string;
    description: string;
    imgPath: string;
}

export class Recipe implements IRecipe {
    ingredients: Shopping[];

    constructor(public id: number, public name: string, public description: string, public imgPath: string, ...ingredients: Shopping[]) {
        this.ingredients = ingredients;
    }

}