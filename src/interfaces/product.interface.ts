



export interface IProduct{
    id:number,
     name:string,
     mark:string,
     model:string,
    cover:string,
    category:'componentes' | 'Tv' | 'Celular' | 'gamer'
    free:boolean,
    imgs:string[],
    state:'novo' | 'usado'
    about:string,
    price:number,
    tags:string[]
}