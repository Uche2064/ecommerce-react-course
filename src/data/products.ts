export type Rating =  {
    rate: number;
    count: number;
}

export type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    price: number;
    rating: Rating;
}


async function getProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json() as Product[];
    return data;
}

export {getProducts}
