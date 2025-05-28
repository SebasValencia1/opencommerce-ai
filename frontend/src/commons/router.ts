export enum RoutepPage {

    REGISTER = '/register',
    LOGIN = '/login',
    HOME = '/home'
}

export function redirect(page: RoutepPage) {
    window.location.href = page;
}