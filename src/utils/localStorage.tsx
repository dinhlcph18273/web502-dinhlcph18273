import { UserType } from "../types/user";

export const authenticated = (user: UserType, next: () => void) => {
    localStorage.setItem("user", JSON.stringify(user))
    next();
}

export const isAuthenticate = (key: string) => {
    if (!localStorage.getItem(key)) return
    return JSON.parse(localStorage.getItem(key) as string);
};