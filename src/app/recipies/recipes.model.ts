
interface IRecipe {
    name: string;
    description: string;
    imgPath: string;
}

export class Recipe implements IRecipe {

    constructor(public name: string, public description: string, public imgPath: string) {

    }

}