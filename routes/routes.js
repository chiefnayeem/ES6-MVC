import {Router} from "../app/Services/Providers/Core/Router.js";
import {PersonController} from "../app/Http/Controllers/PersonController.js";

export function routes() {
    Router.init("/", function () {
        return '<h1>Welcome to ES6 MVC</h1>';
    });
    Router.init("/persons", [PersonController, 'index']);
}