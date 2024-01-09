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
        categoria: 'Computadores',
        img: 'pc.png',
        items: [],
    },
    {
        categoria: 'Celulares',
        img: 'pc.png',
        items: [],
    },
    {
        categoria: 'Câmeras',
        img: 'pc.png',
        items: [],
    },
    {
        categoria: 'Acessórios',
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
        img : 'celular.png',
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
        img : 'celular.png',
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
        img : 'celular.png',
        price : 2000,
    },
    {
        name : 'Produto 7',
        categorie : 'Categoria',
        img : 'pc.png',
        price : 2000,
    },
    {
        name : 'Produto 8',
        categorie : 'Categoria',
        img : 'celular.png',
        price : 2000,
    }
]