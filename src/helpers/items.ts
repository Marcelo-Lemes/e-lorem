type categorie = {
    categoria : string,
    img : string,
    items : object[],
}

type product = {
    name : string,
    categorie : string,
    img : string,
    price : number,
}

export const categorieItems : Array<categorie> = [
    {
        categoria: 'lorem 1',
        img: 'pc.png',
        items: [],
    },
    {
        categoria: 'lorem 2',
        img: 'pc.png',
        items: [],
    },
    {
        categoria: 'lorem 3',
        img: 'pc.png',
        items: [],
    },
    {
        categoria: 'lorem 4',
        img: 'pc.png',
        items: [],
    }
]

export const newProducts : Array<product> = [
    {
        name : 'Produto 1',
        categorie : 'Categoria',
        img : 'pc.png',
        price : 2000,
    },
    {
        name : 'Produto 2',
        categorie : 'Categoria',
        img : 'pc.png',
        price : 2000,
    },
    {
        name : 'Produto 3',
        categorie : 'Categoria',
        img : 'pc.png',
        price : 2000,
    },
    {
        name : 'Produto 4',
        categorie : 'Categoria',
        img : 'pc.png',
        price : 2000,
    },
    {
        name : 'Produto 5',
        categorie : 'Categoria',
        img : 'pc.png',
        price : 2000,
    },
    {
        name : 'Produto 6',
        categorie : 'Categoria',
        img : 'pc.png',
        price : 2000,
    }
]