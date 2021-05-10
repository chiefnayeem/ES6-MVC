import {ApplicationError} from "../../../Exceptions/ApplicationError.js";
import {Router} from "./Router.js";
import {routes} from "../../../../routes/routes.js";

class App {
    initialize() {
        try {
            /**
             * Initialize the router
             * Render the Not Found Component if no routes matched
             */
            routes();
            Router.renderNotFound();
        } catch (e) {
            new ApplicationError(e);
        }
    }
}

new App().initialize();