import {ApplicationError} from "../../../Exceptions/ApplicationError.js";
import {RenderDOM} from "./RenderDOM.js";
import {removeStartingSlash} from "../../../Utils/removeStartingSlash.function.js";

window.__tempRouteList = [];

export class Router {
    static init(path, instance) {
        try {
            if(removeStartingSlash(window.location.pathname) === removeStartingSlash(path)) {
                window.__tempRouteList.push(removeStartingSlash(path));

                if (typeof instance === "function") {
                    RenderDOM.insertHTML(instance(), document.getElementById("root"));
                    return;
                }

                new instance[0]()[instance[1]]();
            }
        } catch (e) {
            new ApplicationError(e);
        }
    }

    static renderNotFound() {
        if(window.__tempRouteList.length === 0) {
            new ApplicationError({
                message: '404 - Not Found Exception',
                stack: "Page " + window.location.pathname + " not found!"
            });

            window.__tempRouteList = [];
        }
    }
}