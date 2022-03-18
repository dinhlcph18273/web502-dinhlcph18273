import instance from "./instance";

export const list = () => {
    const url = '/products';
    return instance.get(url);
}

export const add = (product: object) => {
    const url = "/products"
    return instance.post(url, product)
}