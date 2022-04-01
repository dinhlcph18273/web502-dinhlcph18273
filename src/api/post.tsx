import instance from "./instance"


export const listPost = () => {
    const url = "/post"
    return instance.get(url)
}
